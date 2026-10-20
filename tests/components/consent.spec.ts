import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import "../../src/components/consent/consent";
import type { Consent } from "../../src/components/consent/consent.component";

const CONSENT_STORAGE_KEYS = ["-consent-agree", "map-app-consent-agree"];

function clearConsentStorage() {
  for (const key of CONSENT_STORAGE_KEYS) localStorage.removeItem(key);
}

describe("<hot-consent>", () => {
  let el: Consent;

  const getOverlay = (node: Consent) => node.shadowRoot?.querySelector(".consent-overlay");

  const getAcceptButton = (node: Consent) =>
    node.shadowRoot?.querySelector(".accept-button") as HTMLElement | null;

  const getDeclineButton = (node: Consent) =>
    node.shadowRoot?.querySelector(".decline-button") as HTMLElement | null;

  beforeEach(async () => {
    clearConsentStorage();

    el = document.createElement("hot-consent") as Consent;
    document.body.appendChild(el);

    await el.updateComplete;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    el.remove();
    clearConsentStorage();
  });

  it("opens automatically when no choice is stored", () => {
    expect(el).toBeInTheDocument();
    expect(el.shadowRoot).toBeTruthy();
    expect(el.isOpen).toBe(true);
    expect(getOverlay(el)).toBeTruthy();
    expect(el.consent).toBeNull();
  });

  it("does not render anything when isOpen = false", async () => {
    el.isOpen = false;
    await el.updateComplete;

    expect(getOverlay(el)).toBeNull();
  });

  it('clicking accept: closes, writes localStorage=true, and emits "agree"', async () => {
    const agreeSpy = vi.fn();
    el.addEventListener("agree", agreeSpy);
    el.isOpen = true;
    await el.updateComplete;

    const btn = getAcceptButton(el);
    expect(btn).toBeTruthy();

    btn!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;

    expect(agreeSpy).toHaveBeenCalledOnce();
    expect(el.isOpen).toBe(false);
    expect(getOverlay(el)).toBeNull();
    expect(localStorage.getItem("-consent-agree")).toBe("true");
  });

  it('clicking decline: closes, writes localStorage=false, and emits "disagree"', async () => {
    const disagreeSpy = vi.fn();
    el.addEventListener("disagree", disagreeSpy);
    el.isOpen = true;
    await el.updateComplete;

    const btn = getDeclineButton(el);
    expect(btn).toBeTruthy();

    btn!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;

    expect(disagreeSpy).toHaveBeenCalledOnce();
    expect(el.isOpen).toBe(false);
    expect(getOverlay(el)).toBeNull();
    expect(localStorage.getItem("-consent-agree")).toBe("false");
  });

  it("reads previous consent=true on connect and starts closed", async () => {
    localStorage.setItem("-consent-agree", "true");

    const returning = document.createElement("hot-consent") as Consent;
    document.body.appendChild(returning);
    await returning.updateComplete;

    expect(returning.isOpen).toBe(false);
    expect(getOverlay(returning)).toBeNull();

    returning.remove();
  });

  it("reads previous consent=false on connect and starts closed", async () => {
    localStorage.setItem("-consent-agree", "false");

    const returning = document.createElement("hot-consent") as Consent;
    document.body.appendChild(returning);
    await returning.updateComplete;

    expect(returning.isOpen).toBe(false);
    expect(getOverlay(returning)).toBeNull();

    returning.remove();
  });

  it("renders custom title and button labels", async () => {
    el.isOpen = true;
    el.title = "We value your privacy";
    el.agreeLabel = "Totally Agree";
    el.notAgreeLabel = "No way";
    await el.updateComplete;

    const header = el.shadowRoot?.querySelector(".consent-header");
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("We value your privacy");

    expect(getAcceptButton(el)).toHaveTextContent("Totally Agree");
    expect(getDeclineButton(el)).toHaveTextContent("No way");
  });

  it("uses consentId as the localStorage key prefix", async () => {
    el.isOpen = true;
    el.consentId = "map-app";
    await el.updateComplete;

    const btn = getAcceptButton(el);
    expect(btn).toBeTruthy();

    btn!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;
    expect(localStorage.getItem("map-app-consent-agree")).toBe("true");
  });

  it("exposes the stored choice via consent", async () => {
    getAcceptButton(el)!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    expect(el.consent).toBe("granted");

    el.show();
    await el.updateComplete;
    getDeclineButton(el)!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    expect(el.consent).toBe("denied");
  });

  it.each(["true", "false"])("uses a saved %s choice when consentId changes", async (choice) => {
    localStorage.setItem("map-app-consent-agree", choice);
    el.consentId = "map-app";
    await el.updateComplete;

    expect(getOverlay(el)).toBeNull();
    expect(el.consent).toBe(choice === "true" ? "granted" : "denied");

    el.consentId = "";
    await el.updateComplete;
    expect(getOverlay(el)).toBeTruthy();
    expect(el.consent).toBeNull();
  });

  it("asks again for unrecognised stored values", async () => {
    localStorage.setItem("map-app-consent-agree", "invalid");
    el.consentId = "map-app";
    await el.updateComplete;

    expect(el.consent).toBeNull();
    expect(getOverlay(el)).toBeTruthy();
  });

  it.each(["agree", "disagree"])("still emits %s when storage is blocked", async (event) => {
    el.remove();
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("Storage blocked", "SecurityError");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("Storage blocked", "SecurityError");
    });
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.consent).toBeNull();
    expect(getOverlay(el)).toBeTruthy();

    const listener = vi.fn();
    el.addEventListener(event, listener);
    const button = event === "agree" ? getAcceptButton(el) : getDeclineButton(el);
    button!.click();
    await el.updateComplete;

    expect(listener).toHaveBeenCalledOnce();
    expect(el.consent).toBe(event === "agree" ? "granted" : "denied");
    expect(getOverlay(el)).toBeNull();
    if (event === "agree") await expect(el.whenGranted()).resolves.toBeUndefined();

    el.remove();
    document.body.appendChild(el);
    await el.updateComplete;
    expect(getOverlay(el)).toBeNull();

    el.consentId = "map-app";
    await el.updateComplete;
    expect(el.consent).toBeNull();
    expect(getOverlay(el)).toBeTruthy();
  });

  it("keeps a declined choice when writes fail but reads still work", async () => {
    localStorage.setItem("-consent-agree", "true");
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("Storage full", "QuotaExceededError");
    });
    getDeclineButton(el)!.click();
    await el.updateComplete;

    expect(el.consent).toBe("denied");
    expect(getOverlay(el)).toBeNull();
  });

  it("show() reopens the banner after a choice was made", async () => {
    getDeclineButton(el)!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await el.updateComplete;
    expect(getOverlay(el)).toBeNull();

    el.show();
    await el.updateComplete;
    expect(getOverlay(el)).toBeTruthy();
  });

  it("whenGranted() resolves immediately for returning visitors", async () => {
    localStorage.setItem("-consent-agree", "true");
    await expect(el.whenGranted()).resolves.toBeUndefined();
  });

  it("whenGranted() resolves on Accept and not on Decline", async () => {
    const granted = vi.fn();
    el.whenGranted().then(granted);

    getDeclineButton(el)!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await Promise.resolve();
    expect(granted).not.toHaveBeenCalled();

    el.show();
    await el.updateComplete;
    getAcceptButton(el)!.dispatchEvent(new MouseEvent("click", { bubbles: true, composed: true }));
    await vi.waitFor(() => expect(granted).toHaveBeenCalledOnce());
  });

  it("renders slotted content instead of the message", async () => {
    const custom = document.createElement("hot-consent") as Consent;
    custom.innerHTML = 'Read our <a href="/privacy">privacy policy</a>.';
    document.body.appendChild(custom);
    await custom.updateComplete;

    const slot = custom.shadowRoot?.querySelector(
      ".consent-message slot:not([name])",
    ) as HTMLSlotElement;
    expect(
      slot
        .assignedNodes()
        .map((n) => n.textContent)
        .join(""),
    ).toContain("privacy policy");

    custom.remove();
  });

  it("is labelled as a dialog by its title", async () => {
    const dialog = el.shadowRoot?.querySelector('[role="dialog"]');
    expect(dialog).toHaveAttribute("aria-labelledby", "consent-header");
  });
});
