import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import "../../src/components/announcement/announcement.ts";
import { Announcement } from "../../src/components/announcement/announcement.component.ts";

describe("<hot-announcement>", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    localStorage.clear();
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.innerHTML = "";
    warnSpy.mockRestore();
  });

  it("is registered as a custom element with the correct constructor", () => {
    const ctor = customElements.get("hot-announcement");
    expect(ctor).toBe(Announcement);
  });

  it("renders nothing when version is empty and warns", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".announcement-banner")).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("`version` is required"));
  });

  it("renders the banner when version is set and there is no stored dismissal", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    el.title = "What's new";
    el.message = "First release";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const banner = el.shadowRoot!.querySelector(".announcement-banner");
    expect(banner).not.toBeNull();
    expect(banner!.textContent).toContain("What's new");
    expect(banner!.textContent).toContain("First release");
  });

  it("stays hidden when the dismissal flag is already set for this version", async () => {
    localStorage.setItem("hot-announcement-v1.0.0-dismissed", "true");

    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".announcement-banner")).toBeNull();
  });

  it("renders a visible dismiss button inside the banner", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const dismissBtn = el.shadowRoot!.querySelector(".announcement-dismiss") as HTMLButtonElement;
    expect(dismissBtn).not.toBeNull();
    // The button must live inside the rendered banner so users can actually click it
    const banner = el.shadowRoot!.querySelector(".announcement-banner");
    expect(banner!.contains(dismissBtn)).toBe(true);
    expect(dismissBtn.getAttribute("aria-label")).toBe("Dismiss");
  });

  it("clicking the dismiss button hides the banner and persists the flag", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const dismissBtn = el.shadowRoot!.querySelector(".announcement-dismiss") as HTMLButtonElement;
    dismissBtn.click();
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".announcement-banner")).toBeNull();
    expect(localStorage.getItem("hot-announcement-v1.0.0-dismissed")).toBe("true");
  });

  it("dismiss() persists the flag, hides the banner, and dispatches a dismiss event", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener("dismiss", handler);

    el.dismiss();
    await (el as any).updateComplete;

    expect(localStorage.getItem("hot-announcement-v1.0.0-dismissed")).toBe("true");
    expect(el.shadowRoot!.querySelector(".announcement-banner")).toBeNull();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.version).toBe("v1.0.0");
  });

  it("re-shows when the version changes after a dismissal of the previous version", async () => {
    localStorage.setItem("hot-announcement-v1.0.0-dismissed", "true");

    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".announcement-banner")).toBeNull();

    el.version = "v1.1.0";
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".announcement-banner")).not.toBeNull();
  });

  it("uses a custom storage-key prefix when provided", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";
    el.storageKey = "drone-tm-announce";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    el.dismiss();

    expect(localStorage.getItem("drone-tm-announce-v1.0.0-dismissed")).toBe("true");
    expect(localStorage.getItem("hot-announcement-v1.0.0-dismissed")).toBeNull();
  });

  it("renders slotted body content when provided", async () => {
    const el = document.createElement("hot-announcement") as Announcement;
    el.version = "v1.0.0";

    const link = document.createElement("a");
    link.href = "https://example.com/changelog";
    link.textContent = "View changelog";
    el.appendChild(link);

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const slot = el.shadowRoot!.querySelector("slot") as HTMLSlotElement;
    expect(slot).not.toBeNull();
    expect(slot.assignedElements()).toContain(link);
  });
});
