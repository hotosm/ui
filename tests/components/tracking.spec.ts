import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import "../../src/components/tracking/tracking";
import type MatomoTracking from "../../src/components/tracking/tracking.component";

const TEST_HOSTNAME = window.location.hostname;

// The local script intentionally 404s; tests assert queued commands without contacting Matomo.
const TEST_MATOMO_URL = `${window.location.origin}/__matomo-test`;

function createElement(attrs: Partial<Record<string, string>> = {}): MatomoTracking {
  const el = document.createElement("hot-tracking") as MatomoTracking;
  el.setAttribute("domain", attrs.domain ?? TEST_HOSTNAME);
  el.setAttribute("site-id", attrs["site-id"] ?? "42");
  el.matomoURL = TEST_MATOMO_URL;
  return el;
}

function commands(): string[] {
  return window._paq.map((cmd: any[]) => cmd[0]);
}

function pageViews(): number {
  return commands().filter((c) => c === "trackPageView").length;
}

function trackerScripts(): NodeListOf<HTMLScriptElement> {
  return document.querySelectorAll("script[data-hot-tracking]");
}

describe("<hot-tracking>", () => {
  const elements: MatomoTracking[] = [];

  function mount(el: MatomoTracking): MatomoTracking {
    elements.push(el);
    document.body.appendChild(el);
    return el;
  }

  beforeEach(() => {
    window._paq = [];
    trackerScripts().forEach((s) => s.remove());
  });

  afterEach(() => {
    elements.splice(0).forEach((el) => el.remove());
    window._paq = [];
    trackerScripts().forEach((s) => s.remove());
    vi.restoreAllMocks();
  });

  it("tracks one page view without cookies", async () => {
    const el = mount(createElement());
    await el.updateComplete;

    expect(pageViews()).toBe(1);
    expect(commands()).toContain("disableCookies");
    expect(commands()).not.toContain("requireConsent");
    expect(commands()).not.toContain("requireCookieConsent");
    expect(commands()).not.toContain("rememberConsentGiven");

    expect(commands().indexOf("disableCookies")).toBeLessThan(commands().indexOf("trackPageView"));
  });

  it("respects Do Not Track", async () => {
    const el = mount(createElement());
    await el.updateComplete;

    expect(window._paq).toContainEqual(["setDoNotTrack", true]);
    expect(commands().indexOf("setDoNotTrack")).toBeLessThan(commands().indexOf("trackPageView"));
  });

  it("configures the tracker with site id and Matomo URL", async () => {
    const el = mount(createElement({ "site-id": "99" }));
    await el.updateComplete;

    expect(window._paq).toContainEqual(["setSiteId", "99"]);
    expect(window._paq).toContainEqual(["setTrackerUrl", `${TEST_MATOMO_URL}/matomo.php`]);
    expect(trackerScripts()).toHaveLength(1);
    expect(trackerScripts()[0].src).toBe(`${TEST_MATOMO_URL}/matomo.js`);
  });

  it("defaults to the HOT Matomo instance", () => {
    const el = document.createElement("hot-tracking") as MatomoTracking;
    expect(el.matomoURL).toBe("https://matomo.hotosm.org");
  });

  it("renders no UI", async () => {
    const el = mount(createElement());
    await el.updateComplete;

    expect(el.shadowRoot?.children.length ?? 0).toBe(0);
    expect(getComputedStyle(el).display).toBe("none");
  });

  it("does not track again when the element is reconnected", async () => {
    const el = mount(createElement());
    await el.updateComplete;

    el.remove();
    document.body.appendChild(el);
    await el.updateComplete;

    expect(pageViews()).toBe(1);
    expect(trackerScripts()).toHaveLength(1);
  });

  it("does not track again when a second instance is added", async () => {
    const first = mount(createElement());
    const second = mount(createElement());
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(pageViews()).toBe(1);
    expect(trackerScripts()).toHaveLength(1);
  });

  it("does nothing when domain does not match", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const el = mount(createElement({ domain: "other.example.com" }));
    await el.updateComplete;

    expect(window._paq).toEqual([]);
    expect(trackerScripts()).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("Domain mismatch"));
  });

  it("does nothing and logs an error when site-id is missing", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const el = mount(createElement({ "site-id": "" }));
    await el.updateComplete;

    expect(window._paq).toEqual([]);
    expect(trackerScripts()).toHaveLength(0);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("site-id and domain"));
  });
});
