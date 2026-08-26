import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import "../../src/components/tool-menu/tool-menu.ts";
import { HotToolMenu } from "../../src/components/tool-menu/tool-menu.component.ts";

const TOOL_IDS = [
  "drone",
  "oam",
  "tasking-manager",
  "fair",
  "field",
  "chat-map",
  "export-tool",
  "umap",
  "portal",
];

/** Mount the component and wait for its first render. */
async function mount(): Promise<HotToolMenu> {
  const el = document.createElement("hotosm-tool-menu") as HotToolMenu;
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

/** Simulate a WebAwesome dropdown selection for the given tool id. */
function selectTool(el: HotToolMenu, toolId: string) {
  const dropdown = el.shadowRoot!.querySelector("wa-dropdown")!;
  dropdown.dispatchEvent(
    new CustomEvent("wa-select", {
      detail: { item: { value: toolId } },
      bubbles: true,
      composed: true,
    }),
  );
}

describe("<hotosm-tool-menu>", () => {
  let openSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    openSpy.mockRestore();
  });

  it("is registered as a custom element with the correct constructor", () => {
    expect(customElements.get("hotosm-tool-menu")).toBe(HotToolMenu);
  });

  it("renders every tool as a flat list, with no section grouping", async () => {
    const el = await mount();

    const items = Array.from(el.shadowRoot!.querySelectorAll("wa-dropdown-item"));
    expect(items.map((item) => item.getAttribute("value"))).toEqual(TOOL_IDS);

    expect(el.shadowRoot!.querySelectorAll("wa-dropdown-label")).toHaveLength(0);
    expect(el.shadowRoot!.querySelectorAll(".section-group")).toHaveLength(0);
    expect(el.shadowRoot!.querySelectorAll(".section-divider")).toHaveLength(0);

    // Items are direct children of the dropdown, not nested in group wrappers.
    const dropdown = el.shadowRoot!.querySelector("wa-dropdown")!;
    for (const item of items) {
      expect(item.parentElement).toBe(dropdown);
    }
  });

  it("always renders a logo for every tool", async () => {
    const el = await mount();

    const logos = Array.from(el.shadowRoot!.querySelectorAll("img.tool-logo"));
    expect(logos).toHaveLength(TOOL_IDS.length);
    expect(logos.every((logo) => logo.getAttribute("slot") === "icon")).toBe(true);
    expect(logos.every((logo) => !!logo.getAttribute("src"))).toBe(true);
    expect(logos.every((logo) => logo.getAttribute("alt") === "")).toBe(true);
  });

  it("keeps rendering logos when the removed show-logos attribute is passed", async () => {
    document.body.innerHTML = `<hotosm-tool-menu show-logos></hotosm-tool-menu>`;
    const el = document.querySelector("hotosm-tool-menu") as HotToolMenu;
    await el.updateComplete;

    expect(el.shadowRoot!.querySelectorAll("img.tool-logo")).toHaveLength(TOOL_IDS.length);
  });

  it("renders the tool titles", async () => {
    const el = await mount();

    const titles = Array.from(el.shadowRoot!.querySelectorAll(".tool-title")).map((node) =>
      node.textContent!.trim(),
    );

    expect(titles).toEqual([
      "Drone Tasking Manager",
      "OpenAerialMap",
      "Tasking Manager",
      "fAIr",
      "Field Tasking Manager",
      "ChatMap",
      "Export Tool",
      "uMap",
      "Portal",
    ]);
  });

  it("emits tool-selected with the selected tool and opens its page", async () => {
    const el = await mount();

    const onSelected = vi.fn();
    el.addEventListener("tool-selected", onSelected as EventListener);

    selectTool(el, "fair");

    expect(onSelected).toHaveBeenCalledTimes(1);
    const { tool } = (onSelected.mock.calls[0][0] as CustomEvent).detail;
    expect(tool).toEqual({
      id: "fair",
      title: "fAIr",
      href: "https://fair.hotosm.org/",
      icon: expect.any(String),
    });

    expect(openSpy).toHaveBeenCalledWith(
      "https://fair.hotosm.org/",
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("ignores selections that do not match a known tool", async () => {
    const el = await mount();

    const onSelected = vi.fn();
    el.addEventListener("tool-selected", onSelected as EventListener);

    selectTool(el, "not-a-tool");

    expect(onSelected).not.toHaveBeenCalled();
    expect(openSpy).not.toHaveBeenCalled();
  });
});
