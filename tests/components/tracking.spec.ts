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

  it("tracks immediately when show-consent is not set", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("trackPageView");
    expect(commands).not.toContain("requireConsent");
  });

  it("does not render consent banner when show-consent is not set", async () => {
    el = createElement();
    document.body.appendChild(el);
    await el.updateComplete;

    const banner = el.shadowRoot?.querySelector(".consent-banner");
    expect(banner).toBeNull();
  });

  // ── Consent mode ──

  it("pushes requireConsent and shows banner when show-consent is set and no stored preference", async () => {
    vi.useFakeTimers();

    el = createElement({ "show-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("requireConsent");
    expect(commands).not.toContain("trackPageView");

    // Advance past the 1s delay for the banner
    vi.advanceTimersByTime(1000);
    await el.updateComplete;

    const banner = el.shadowRoot?.querySelector(".consent-banner");
    expect(banner).toBeTruthy();

    vi.useRealTimers();
  });

  it("auto-tracks when stored consent is true (returning user)", async () => {
    localStorage.setItem("hot-matomo-consent-42", "true");

    el = createElement({ "show-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("requireConsent");
    expect(commands).toContain("rememberConsentGiven");
    expect(commands).toContain("trackPageView");

    // Banner should not appear
    const banner = el.shadowRoot?.querySelector(".consent-banner");
    expect(banner).toBeNull();
  });

  it("does not track when stored consent is false (returning user who declined)", async () => {
    localStorage.setItem("hot-matomo-consent-42", "false");

    el = createElement({ "show-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).not.toContain("trackPageView");

    // Banner should not appear
    const banner = el.shadowRoot?.querySelector(".consent-banner");
    expect(banner).toBeNull();
  });

  // ── agree() / disagree() ──

  it("agree() stores consent, pushes tracking commands, and hides banner", async () => {
    vi.useFakeTimers();

    el = createElement({ "show-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    vi.advanceTimersByTime(1000);
    await el.updateComplete;

    // Banner should be visible
    expect(el.shadowRoot?.querySelector(".consent-banner")).toBeTruthy();

    el.agree();
    await el.updateComplete;

    // Banner hidden
    expect(el.shadowRoot?.querySelector(".consent-banner")).toBeNull();

    // localStorage persisted
    expect(localStorage.getItem("hot-matomo-consent-42")).toBe("true");

    // Matomo commands pushed
    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("rememberConsentGiven");
    expect(commands).toContain("trackPageView");

    vi.useRealTimers();
  });

  it("disagree() stores refusal, pushes forgetConsentGiven, and hides banner", async () => {
    vi.useFakeTimers();

    el = createElement({ "show-consent": "" });
    document.body.appendChild(el);
    await el.updateComplete;

    vi.advanceTimersByTime(1000);
    await el.updateComplete;

    el.disagree();
    await el.updateComplete;

    // Banner hidden
    expect(el.shadowRoot?.querySelector(".consent-banner")).toBeNull();

    // localStorage persisted
    expect(localStorage.getItem("hot-matomo-consent-42")).toBe("false");

    // Matomo command pushed
    const commands = window._paq.map((cmd: any[]) => cmd[0]);
    expect(commands).toContain("forgetConsentGiven");
    expect(commands).not.toContain("trackPageView");

    vi.useRealTimers();
  });

  // ── localStorage key uses siteId ──

  it("uses site-id in the localStorage key", async () => {
    el = createElement({ "site-id": "99", "show-consent": "" });
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
