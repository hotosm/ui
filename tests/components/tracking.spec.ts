import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import "../../src/components/tracking/tracking";
import type MatomoTracking from "../../src/components/tracking/tracking.component";

// The test browser runs on localhost
const TEST_HOSTNAME = window.location.hostname;

/** Helper: create a <hot-tracking> element with matching domain so connectedCallback proceeds. */
function createElement(attrs: Partial<Record<string, string>> = {}): MatomoTracking {
  const el = document.createElement("hot-tracking") as MatomoTracking;
  // Default to matching domain + a site id so the component initialises
  el.setAttribute("domain", attrs.domain ?? TEST_HOSTNAME);
  el.setAttribute("site-id", attrs["site-id"] ?? "42");
  if (attrs["show-consent"] !== undefined) {
    el.setAttribute("show-consent", attrs["show-consent"]);
  }
  // To opt out of consent (showConsent defaults to true), explicitly disable it
  if (attrs["no-consent"] !== undefined) {
    el.showConsent = false;
  }
  return el;
}

describe("<hot-tracking>", () => {
  let el: MatomoTracking;

  beforeEach(() => {
    localStorage.clear();
    window._paq = [];
  });

  afterEach(() => {
    el?.remove();
    window._paq = [];
  });

  // ── Domain gating ──

  it("does nothing when domain does not match", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    el = createElement({ domain: "other.example.com" });
    document.body.appendChild(el);
    await el.updateComplete;

    // No _paq commands should have been pushed
    expect(window._paq).toEqual([]);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("Domain mismatch"));

    warnSpy.mockRestore();
  });

  // ── Missing config ──

  it("shows error callout when site-id is missing", async () => {
    el = createElement({ "site-id": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const errorBanner = el.shadowRoot?.querySelector(".error-banner");
    expect(errorBanner).toBeTruthy();
  });

  // ── No-consent mode (showConsent=false) ──

  it("tracks immediately when show-consent is disabled", async () => {
    el = createElement({ "no-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("trackPageView");
    expect(commands).not.toContain("requireConsent");
  });

  it("does not render consent dialog when show-consent is disabled", async () => {
    el = createElement({ "no-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const dialog = el.shadowRoot?.querySelector("wa-dialog[open]");
    expect(dialog).toBeNull();
  });

  // ── Consent mode (default) ──

  it("requires consent by default without show-consent attribute", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("requireConsent");
    expect(commands).not.toContain("trackPageView");
  });

  it("pushes requireConsent and shows dialog when no stored preference", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("requireConsent");
    expect(commands).not.toContain("trackPageView");

    const dialog = el.shadowRoot?.querySelector("wa-dialog");
    expect(dialog).toBeTruthy();
    expect(dialog?.hasAttribute("open")).toBe(true);
  });

  it("dialog contains Accept and Decline buttons", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const dialog = el.shadowRoot?.querySelector("wa-dialog");
    const buttons = dialog?.querySelectorAll("wa-button");
    expect(buttons?.length).toBe(2);

    const buttonTexts = Array.from(buttons ?? []).map((b) => b.textContent?.trim());
    expect(buttonTexts).toContain("Decline");
    expect(buttonTexts).toContain("Accept");
  });

  it("dialog displays the default consent message", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const dialog = el.shadowRoot?.querySelector("wa-dialog");
    expect(dialog?.textContent).toContain("We use cookies");
  });

  it("dialog displays a custom consent-message", async () => {
    el = createElement();
    el.setAttribute("consent-message", "Custom privacy notice.");
    document.body.appendChild(el);
    await el.updateComplete;

    const dialog = el.shadowRoot?.querySelector("wa-dialog");
    expect(dialog?.textContent).toContain("Custom privacy notice.");
  });

  it("auto-tracks when stored consent is true (returning user)", async () => {
    localStorage.setItem("hot-matomo-consent-42", "true");

    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("requireConsent");
    expect(commands).toContain("rememberConsentGiven");
    expect(commands).toContain("trackPageView");

    // Dialog should not be open
    const dialog = el.shadowRoot?.querySelector("wa-dialog[open]");
    expect(dialog).toBeNull();
  });

  it("does not track when stored consent is false (returning user who declined)", async () => {
    localStorage.setItem("hot-matomo-consent-42", "false");

    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).not.toContain("trackPageView");

    // Dialog should not be open
    const dialog = el.shadowRoot?.querySelector("wa-dialog[open]");
    expect(dialog).toBeNull();
  });

  // ── agree() / disagree() ──

  it("agree() stores consent, pushes tracking commands, and closes dialog", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    // Dialog should be visible
    expect(el.shadowRoot?.querySelector("wa-dialog[open]")).toBeTruthy();

    el.agree();
    await el.updateComplete;

    // Dialog closed
    expect(el.shadowRoot?.querySelector("wa-dialog[open]")).toBeNull();

    // localStorage persisted
    expect(localStorage.getItem("hot-matomo-consent-42")).toBe("true");

    // Matomo commands pushed
    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("rememberConsentGiven");
    expect(commands).toContain("trackPageView");
  });

  it("disagree() stores refusal, pushes forgetConsentGiven, and closes dialog", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    el.disagree();
    await el.updateComplete;

    // Dialog closed
    expect(el.shadowRoot?.querySelector("wa-dialog[open]")).toBeNull();

    // localStorage persisted
    expect(localStorage.getItem("hot-matomo-consent-42")).toBe("false");

    // Matomo command pushed
    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("forgetConsentGiven");
    expect(commands).not.toContain("trackPageView");
  });

  // ── localStorage key uses siteId ──

  it("uses site-id in the localStorage key", async () => {
    el = createElement({ "site-id": "99" });
    document.body.appendChild(el);
    await el.updateComplete;

    el.agree();
    expect(localStorage.getItem("hot-matomo-consent-99")).toBe("true");
  });

  // ── Matomo script injection ──

  it("injects matomo.js script tag into the document", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const scripts = document.querySelectorAll('script[src*="matomo.js"]');
    expect(scripts.length).toBeGreaterThanOrEqual(1);
  });
});
