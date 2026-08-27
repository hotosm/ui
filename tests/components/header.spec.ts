import { describe, it, expect, afterEach, vi } from "vitest";
import { page } from "vitest/browser";

import "../../src/components/header/header.ts";
import { Header } from "../../src/components/header/header.component.ts";

/** wa-tab-group reacts asynchronously (MutationObserver + wa-tab-show). */
const settle = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

/** Indexes of the tabs currently rendering the active underline. */
const activeTabIndexes = (el: Header) =>
  Array.from(el.shadowRoot!.querySelectorAll("wa-tab"))
    .map((tab, index) => (tab.hasAttribute("active") ? index : -1))
    .filter((index) => index >= 0);

async function mountWithTabs(tabs: Header["tabs"]): Promise<Header> {
  const el = document.createElement("hot-header") as Header;
  el.tabs = tabs;
  document.body.appendChild(el);
  await (el as any).updateComplete;
  await settle();
  return el;
}

describe("<hot-header>", () => {
  // Clean up the DOM after each test to prevent state bleeding between tests
  afterEach(() => {
    document.body.innerHTML = "";
  });

  // ── Registration & basic rendering ──

  it("is registered as a custom element with the correct constructor", () => {
    const ctor = customElements.get("hot-header");
    expect(ctor).toBe(Header);
  });

  it("can be created and attached to the DOM", async () => {
    const el = document.createElement("hot-header") as Header;
    el.title = "Test title";

    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.isConnected).toBe(true);
    expect(el.shadowRoot).not.toBeNull();
  });

  it("wraps the header in a header-container div", async () => {
    const el = document.createElement("hot-header") as Header;
    el.title = "Wrapper test";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const container = el.shadowRoot!.querySelector(".header-container");
    expect(container).not.toBeNull();
    expect(container!.querySelector("header")).not.toBeNull();
  });

  // ── Size variants ──

  it("applies the correct size class for each variant", async () => {
    for (const size of ["small", "medium", "large"] as const) {
      const el = document.createElement("hot-header") as Header;
      el.size = size;
      el.title = "Size test";
      document.body.appendChild(el);
      await (el as any).updateComplete;

      const header = el.shadowRoot!.querySelector("header");
      expect(header).not.toBeNull();
      expect(header!.classList.contains(`header--size-${size}`)).toBe(true);

      el.remove();
    }
  });

  // ── Top bar ──

  it("renders the top bar for medium and large sizes but not small", async () => {
    const elSmall = document.createElement("hot-header") as Header;
    elSmall.size = "small";
    document.body.appendChild(elSmall);
    await (elSmall as any).updateComplete;
    expect(elSmall.shadowRoot!.querySelector(".header--top")).toBeNull();
    elSmall.remove();

    const elMedium = document.createElement("hot-header") as Header;
    elMedium.size = "medium";
    document.body.appendChild(elMedium);
    await (elMedium as any).updateComplete;
    expect(elMedium.shadowRoot!.querySelector(".header--top")).not.toBeNull();
    elMedium.remove();

    const elLarge = document.createElement("hot-header") as Header;
    elLarge.size = "large";
    document.body.appendChild(elLarge);
    await (elLarge as any).updateComplete;
    expect(elLarge.shadowRoot!.querySelector(".header--top")).not.toBeNull();
    elLarge.remove();
  });

  it("renders tagline and link in the top bar", async () => {
    const el = document.createElement("hot-header") as Header;
    el.size = "medium";
    el.topTagline = "My Tagline";
    el.topLinkLabel = "Go to site";
    el.topLinkHref = "https://example.com";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    const tagline = sr.querySelector(".header--top-tagline");
    expect(tagline).not.toBeNull();
    expect(tagline!.textContent!.trim()).toBe("My Tagline");

    const link = sr.querySelector(".header--top-link") as HTMLAnchorElement;
    expect(link).not.toBeNull();
    expect(link.href).toBe("https://example.com/");

    // External icon SVG should be present inside the link
    const icon = link.querySelector(".header--external-icon");
    expect(icon).not.toBeNull();
  });

  it("renders both full and short link text spans for responsive display", async () => {
    const el = document.createElement("hot-header") as Header;
    el.size = "medium";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    const full = sr.querySelector(".header--top-link-full");
    const short = sr.querySelector(".header--top-link-short");
    expect(full).not.toBeNull();
    expect(short).not.toBeNull();
    expect(full!.textContent).toContain("Humanitarian OpenStreetMap Team Website");
    expect(short!.textContent).toContain("HOT Website");
  });

  it("uses correct default tagline and link text", async () => {
    const el = document.createElement("hot-header") as Header;
    el.size = "medium";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector(".header--top-tagline")!.textContent!.trim()).toBe(
      "Mapping our world together",
    );
    expect(sr.querySelector(".header--top-link")!.textContent!.trim()).toContain(
      "Humanitarian OpenStreetMap Team Website",
    );
  });

  // ── Title ──

  it("renders the title when provided", async () => {
    const el = document.createElement("hot-header") as Header;
    el.title = "My App";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const title = el.shadowRoot!.querySelector(".header--title");
    expect(title).not.toBeNull();
    expect(title!.textContent!.trim()).toBe("My App");
  });

  it("does not render the title when empty", async () => {
    const el = document.createElement("hot-header") as Header;
    el.title = "";
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector(".header--title")).toBeNull();
  });

  // ── Centre-align tabs ──

  it("applies centre-align class to nav when tabsCenterAlign is true", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabsCenterAlign = true;
    el.tabs = [{ label: "A" }, { label: "B" }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const nav = el.shadowRoot!.querySelector(".header--nav");
    expect(nav).not.toBeNull();
    expect(nav!.classList.contains("header--nav-center")).toBe(true);
  });

  it("does not apply centre-align class by default", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [{ label: "A" }, { label: "B" }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const nav = el.shadowRoot!.querySelector(".header--nav");
    expect(nav).not.toBeNull();
    expect(nav!.classList.contains("header--nav-center")).toBe(false);
  });

  // ── Auth slot ──

  it("renders an auth slot in the right section", async () => {
    const el = document.createElement("hot-header") as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const slot = el.shadowRoot!.querySelector('slot[name="auth"]');
    expect(slot).not.toBeNull();
  });

  it("projects slotted auth content into the right section", async () => {
    const el = document.createElement("hot-header") as Header;
    const authEl = document.createElement("button");
    authEl.slot = "auth";
    authEl.textContent = "Login";
    el.appendChild(authEl);
    document.body.appendChild(el);
    await (el as any).updateComplete;

    // The slotted element should be assigned to the auth slot
    const slot = el.shadowRoot!.querySelector('slot[name="auth"]') as HTMLSlotElement;
    expect(slot).not.toBeNull();
    expect(slot.assignedElements()).toContain(authEl);
  });

  // ── Lang slot ──

  it("renders a lang slot in the right section", async () => {
    const el = document.createElement("hot-header") as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const slot = el.shadowRoot!.querySelector('slot[name="lang"]');
    expect(slot).not.toBeNull();
  });

  it("projects slotted lang content into the right section", async () => {
    const el = document.createElement("hot-header") as Header;
    const langEl = document.createElement("button");
    langEl.slot = "lang";
    langEl.textContent = "English";
    el.appendChild(langEl);
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const slot = el.shadowRoot!.querySelector('slot[name="lang"]') as HTMLSlotElement;
    expect(slot).not.toBeNull();
    expect(slot.assignedElements()).toContain(langEl);
  });

  it("places the lang slot before the auth slot in the right section", async () => {
    const el = document.createElement("hot-header") as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const right = el.shadowRoot!.querySelector(".header--right-section")!;
    const slots = Array.from(right.querySelectorAll("slot")).map((s) => s.getAttribute("name"));
    const langIdx = slots.indexOf("lang");
    const authIdx = slots.indexOf("auth");
    expect(langIdx).toBeGreaterThanOrEqual(0);
    expect(authIdx).toBeGreaterThanOrEqual(0);
    expect(langIdx).toBeLessThan(authIdx);
  });

  // ── Drawer-lang / drawer-auth slots ──

  it("renders drawer-lang and drawer-auth slots inside the drawer", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const drawer = el.shadowRoot!.querySelector("#drawer-overview")!;
    expect(drawer.querySelector('slot[name="drawer-lang"]')).not.toBeNull();
    expect(drawer.querySelector('slot[name="drawer-auth"]')).not.toBeNull();
  });

  it("projects slotted drawer-lang and drawer-auth content into the drawer", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;

    const drawerLang = document.createElement("div");
    drawerLang.slot = "drawer-lang";
    drawerLang.textContent = "Language picker (mobile)";
    el.appendChild(drawerLang);

    const drawerAuth = document.createElement("button");
    drawerAuth.slot = "drawer-auth";
    drawerAuth.textContent = "Login (mobile)";
    el.appendChild(drawerAuth);

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const drawer = el.shadowRoot!.querySelector("#drawer-overview")!;
    const langSlot = drawer.querySelector('slot[name="drawer-lang"]') as HTMLSlotElement;
    const authSlot = drawer.querySelector('slot[name="drawer-auth"]') as HTMLSlotElement;
    expect(langSlot.assignedElements()).toContain(drawerLang);
    expect(authSlot.assignedElements()).toContain(drawerAuth);
  });

  // ── Navigation tabs ──

  it("renders navigation tabs based on the tabs prop", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "Map", clickEvent: () => {} },
      { label: "Docs", clickEvent: () => {} },
    ];

    document.body.appendChild(el);
    await (el as any).updateComplete;

    const tabGroup = el.shadowRoot?.querySelector("wa-tab-group");
    expect(tabGroup).not.toBeNull();

    const tabs = tabGroup?.querySelectorAll("wa-tab");
    expect(tabs?.length).toBe(2);

    const labels = Array.from(tabs!).map((t) => t.textContent?.trim());
    expect(labels).toEqual(["Map", "Docs"]);
  });

  it("leaves overflow scrolling to wa-tab-group instead of running its own", async () => {
    // Use the desktop layout where tabs can overflow.
    await page.viewport(1280, 800);

    try {
      const el = document.createElement("hot-header") as Header;
      el.tabs = Array.from({ length: 8 }, (_, index) => ({
        label: `A Fairly Long Tab Label ${index + 1}`,
        clickEvent: () => {},
      }));
      el.style.maxWidth = "600px";
      el.style.display = "block";
      document.body.appendChild(el);
      await (el as any).updateComplete;

      expect(el.shadowRoot!.querySelectorAll(".header--nav-arrow").length).toBe(0);

      // WebAwesome creates controls asynchronously through ResizeObserver.
      const group = el.shadowRoot!.querySelector("wa-tab-group")!;
      await expect
        .poll(() => group.shadowRoot!.querySelectorAll('[part~="scroll-button"]').length, {
          timeout: 5000,
        })
        .toBe(2);

      const scrollButtons = group.shadowRoot!.querySelectorAll('[part~="scroll-button"]');
      expect((scrollButtons[0] as HTMLElement).offsetWidth).toBeGreaterThan(0);
    } finally {
      await page.viewport(414, 896);
    }
  });

  it("shows no scroll controls when the tabs fit", async () => {
    await page.viewport(1280, 800);

    try {
      const el = await mountWithTabs([
        { label: "A", clickEvent: () => {} },
        { label: "B", clickEvent: () => {} },
      ]);

      const group = el.shadowRoot!.querySelector("wa-tab-group")!;
      expect(group.shadowRoot!.querySelectorAll('[part~="scroll-button"]').length).toBe(0);
    } finally {
      await page.viewport(414, 896);
    }
  });

  it("emits tab-change event with detail when a tab is selected", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "Tab A", clickEvent: () => {} },
      { label: "Tab B", clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const handler = vi.fn();
    el.addEventListener("tab-change", handler);

    el.selectTab(1);
    await (el as any).updateComplete;

    expect(handler).toHaveBeenCalledTimes(1);
    const detail = handler.mock.calls[0][0].detail;
    expect(detail.selectedIndex).toBe(1);
    expect(detail.previousIndex).toBe(0);
    expect(detail.tab.label).toBe("Tab B");
  });

  it("syncs activeTabIndex when selectedTab changes", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    el.selectedTab = 2;
    await (el as any).updateComplete;

    expect(el.activeTabIndex).toBe(2);
  });

  it("honours activeTabIndex set before the element is connected", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ];
    el.activeTabIndex = 2;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(activeTabIndexes(el)).toEqual([2]);

    await settle();
    expect(el.activeTabIndex).toBe(2);
    expect(el.selectedTab).toBe(2);
    expect(activeTabIndexes(el)).toEqual([2]);
  });

  it("leaves every tab unhighlighted when activeTabIndex is -1 at first render", async () => {
    // WebAwesome initializes only visible tabs, so exercise the desktop layout.
    await page.viewport(1280, 800);

    try {
      const el = document.createElement("hot-header") as Header;
      el.tabs = [
        { label: "One", clickEvent: () => {} },
        { label: "Two", clickEvent: () => {} },
      ];
      el.activeTabIndex = -1;
      document.body.appendChild(el);
      await (el as any).updateComplete;
      await settle();

      expect(el.activeTabIndex).toBe(-1);
      expect(activeTabIndexes(el)).toEqual([]);
      const waActive = Array.from(el.shadowRoot!.querySelectorAll("wa-tab")).map(
        (tab) => (tab as unknown as { active: boolean }).active,
      );
      expect(waActive).toEqual([false, false]);
    } finally {
      await page.viewport(414, 896);
    }
  });

  it("honours selectedTab set before the element is connected", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ];
    el.selectedTab = 1;
    document.body.appendChild(el);
    await (el as any).updateComplete;
    await settle();

    expect(el.activeTabIndex).toBe(1);
    expect(el.selectedTab).toBe(1);
    expect(activeTabIndexes(el)).toEqual([1]);
  });

  it("mirrors activeTabIndex onto selectedTab after mount", async () => {
    const el = await mountWithTabs([
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ]);

    el.activeTabIndex = 2;
    await (el as any).updateComplete;
    await settle();

    expect(el.selectedTab).toBe(2);
    expect(activeTabIndexes(el)).toEqual([2]);
  });

  it("clears the active tab when activeTabIndex has no matching tab", async () => {
    const el = await mountWithTabs([
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
    ]);

    // Host routers use -1 for "no nav item matches this route"
    el.activeTabIndex = -1;
    await (el as any).updateComplete;
    await settle();

    expect(el.selectedTab).toBe(-1);
    expect(activeTabIndexes(el)).toEqual([]);
  });

  it("keeps the active tab after the tab group settles (no reset to the first tab)", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Host apps drive this from their router
    el.selectedTab = 2;
    el.activeTabIndex = 2;
    await (el as any).updateComplete;
    // wa-tab-group reacts asynchronously (MutationObserver + wa-tab-show)
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(el.activeTabIndex).toBe(2);
    const activeTabs = Array.from(el.shadowRoot!.querySelectorAll("wa-tab")).filter((tab) =>
      tab.hasAttribute("active"),
    );
    expect(activeTabs.map((tab) => tab.getAttribute("data-index"))).toEqual(["2"]);
  });

  it("keeps the active tab on the clicked tab once the tab group settles", async () => {
    const el = document.createElement("hot-header") as Header;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 200));

    const tabs = Array.from(el.shadowRoot!.querySelectorAll("wa-tab")) as HTMLElement[];
    tabs[2].click();
    await (el as any).updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(el.activeTabIndex).toBe(2);
  });

  // ── Drawer ──

  it("renders drawer button when drawer prop is true", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    expect(sr.querySelector("#drawer-overview")).not.toBeNull();
    expect(sr.querySelector('wa-button[appearance="outlined"]')).not.toBeNull();
  });

  it("does not render drawer when drawer is false and no tabs exist", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = false;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(el.shadowRoot!.querySelector("#drawer-overview")).toBeNull();
  });

  it("auto-renders drawer when drawer is false but tabs exist (for mobile nav)", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = false;
    el.tabs = [{ label: "Map" }, { label: "Docs" }];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const sr = el.shadowRoot!;
    // Drawer markup should be present for mobile users
    expect(sr.querySelector("#drawer-overview")).not.toBeNull();
    // The hamburger button should have the mobile-only class
    const btn = sr.querySelector(".header--drawer-mobile-only");
    expect(btn).not.toBeNull();
  });

  it("includes tab labels in the drawer nav when tabs and drawer are both set", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    el.tabs = [
      { label: "Home", clickEvent: () => {} },
      { label: "About", clickEvent: () => {} },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const drawerNavButtons = el.shadowRoot!.querySelectorAll(".drawer-nav-button");
    expect(drawerNavButtons.length).toBe(2);

    const labels = Array.from(drawerNavButtons).map((b) => b.textContent?.trim());
    expect(labels).toEqual(["Home", "About"]);
  });

  it("renders drawer links", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    el.drawerLinks = [
      { label: "Support", href: "/support" },
      { label: "Docs", href: "/docs" },
    ];
    document.body.appendChild(el);
    await (el as any).updateComplete;

    const links = el.shadowRoot!.querySelectorAll(".drawer-link");
    expect(links.length).toBe(2);
    expect((links[0] as HTMLAnchorElement).textContent?.trim()).toBe("Support");
    expect((links[1] as HTMLAnchorElement).getAttribute("href")).toBe("/docs");
  });

  it("runs a rejected clickEvent only once", async () => {
    const clickEvent = vi.fn(() => Promise.reject(new Error("navigation failed")));
    const el = await mountWithTabs([
      { label: "One", clickEvent },
      { label: "Two", clickEvent: () => {} },
    ]);

    (el.shadowRoot!.querySelectorAll("wa-tab")[0] as HTMLElement).click();
    await settle();

    // Retrying would duplicate whatever side effect the action already had
    expect(clickEvent).toHaveBeenCalledTimes(1);
  });

  it("closes the drawer when a drawer nav tab is used", async () => {
    const el = await mountWithTabs([
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
    ]);
    el.drawer = true;
    await (el as any).updateComplete;

    const drawer = el.shadowRoot!.querySelector("#drawer-overview") as HTMLElement & {
      open: boolean;
    };
    drawer.open = true;
    await settle();

    (el.shadowRoot!.querySelector(".drawer-nav-button") as HTMLElement).click();
    await settle();

    expect(drawer.open).toBe(false);
  });

  it("closes the drawer when a drawer link is used", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    el.drawerLinks = [{ label: "Learn", href: "#learn" }];
    document.body.appendChild(el);
    await (el as any).updateComplete;
    await settle();

    const drawer = el.shadowRoot!.querySelector("#drawer-overview") as HTMLElement & {
      open: boolean;
    };
    drawer.open = true;
    await settle();

    (el.shadowRoot!.querySelector("a.drawer-link") as HTMLElement).click();
    await settle();

    expect(drawer.open).toBe(false);
  });

  it("does not overflow a 320px viewport, even with an unwrappable title", async () => {
    await page.viewport(320, 700);

    try {
      for (const size of ["small", "medium", "large"] as const) {
        document.body.innerHTML = "";
        const el = document.createElement("hot-header") as Header;
        el.title = "OpenAerialMapImageryPortalDashboard";
        el.size = size;
        el.drawer = true;
        el.tabs = [
          { label: "Projects", clickEvent: () => {} },
          { label: "Create Project", clickEvent: () => {} },
        ];
        document.body.appendChild(el);
        await (el as any).updateComplete;

        await expect
          .poll(() => document.documentElement.scrollWidth, { timeout: 5000 })
          .toBeLessThanOrEqual(document.documentElement.clientWidth);
      }
    } finally {
      await page.viewport(414, 896);
    }
  });

  it("closes the drawer when the layout crosses into desktop", async () => {
    await page.viewport(768, 800);

    try {
      const el = await mountWithTabs([
        { label: "One", clickEvent: () => {} },
        { label: "Two", clickEvent: () => {} },
      ]);
      const drawer = el.shadowRoot!.querySelector("#drawer-overview") as HTMLElement & {
        open: boolean;
      };
      drawer.open = true;
      await settle();
      expect(drawer.open).toBe(true);

      await page.viewport(1100, 800);
      await settle();

      expect(drawer.open).toBe(false);
    } finally {
      await page.viewport(414, 896);
    }
  });

  it("marks the active item in the drawer nav", async () => {
    const el = document.createElement("hot-header") as Header;
    el.drawer = true;
    el.tabs = [
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
    ];
    el.activeTabIndex = 1;
    document.body.appendChild(el);
    await (el as any).updateComplete;
    await settle();

    const buttons = Array.from(el.shadowRoot!.querySelectorAll(".drawer-nav-button"));
    expect(buttons.map((b) => b.getAttribute("aria-current"))).toEqual([null, "page"]);
    expect(buttons[1].classList.contains("drawer-nav-button--active")).toBe(true);
    expect(buttons[0].classList.contains("drawer-nav-button--active")).toBe(false);
  });

  // ── Active tab URL sync ──

  it("exposes a public syncActiveTab method", async () => {
    const el = document.createElement("hot-header") as Header;
    document.body.appendChild(el);
    await (el as any).updateComplete;

    expect(typeof el.syncActiveTab).toBe("function");
  });

  it("syncs active tab based on current URL path", async () => {
    // Simulate being on /manage
    history.replaceState(null, "", "/manage");

    const el = await mountWithTabs([
      { label: "Explore", href: "/explore" },
      { label: "Manage", href: "/manage" },
      { label: "About", href: "/about" },
    ]);

    expect(el.activeTabIndex).toBe(1);
    expect(activeTabIndexes(el)).toEqual([1]);

    // Clean up URL
    history.replaceState(null, "", "/");
  });

  it("matches a root href even when it is not the first tab", async () => {
    history.replaceState(null, "", "/");

    const el = await mountWithTabs([
      { label: "Home", clickEvent: () => {} },
      { label: "Browse", clickEvent: () => {} },
      { label: "Upload", href: "/" },
      { label: "Profile", href: "/profile" },
    ]);

    expect(el.activeTabIndex).toBe(2);
    expect(activeTabIndexes(el)).toEqual([2]);
  });

  it("only matches prefixes on a path segment boundary", async () => {
    history.replaceState(null, "", "/newsletter");

    const el = await mountWithTabs([
      { label: "Projects", href: "/projects" },
      { label: "New", href: "/new" },
    ]);

    // /newsletter must not activate the /new tab, and matches nothing else
    expect(el.activeTabIndex).toBe(-1);
    expect(activeTabIndexes(el)).toEqual([]);

    history.replaceState(null, "", "/");
  });

  it("matches a nested path against its parent tab", async () => {
    history.replaceState(null, "", "/projects/123/tasks");

    const el = await mountWithTabs([
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
    ]);

    expect(el.activeTabIndex).toBe(1);

    history.replaceState(null, "", "/");
  });

  it("ignores tabs linking to another origin", async () => {
    history.replaceState(null, "", "/");

    const el = await mountWithTabs([
      { label: "Home", href: "/" },
      { label: "API", href: "https://api.example.com" },
    ]);

    // The external tab resolves to "/" too, but must never match
    expect(el.activeTabIndex).toBe(0);
  });

  it("re-syncs the active tab after SPA pushState navigation", async () => {
    history.replaceState(null, "", "/projects");

    const el = await mountWithTabs([
      { label: "Projects", href: "/projects" },
      { label: "Admin", href: "/admin" },
    ]);
    expect(el.activeTabIndex).toBe(0);

    history.pushState(null, "", "/admin");
    await (el as any).updateComplete;
    await settle();

    expect(el.activeTabIndex).toBe(1);
    expect(activeTabIndexes(el)).toEqual([1]);

    history.replaceState(null, "", "/");
  });

  it("clears the active tab when the URL matches no tab", async () => {
    history.replaceState(null, "", "/projects");

    const el = await mountWithTabs([
      { label: "Projects", href: "/projects" },
      { label: "New", href: "/new" },
    ]);
    expect(activeTabIndexes(el)).toEqual([0]);

    history.pushState(null, "", "/somewhere-else");
    await settle();

    // Leaving the old tab lit would point at a page the user has left
    expect(el.activeTabIndex).toBe(-1);
    expect(activeTabIndexes(el)).toEqual([]);

    history.replaceState(null, "", "/");
  });

  it("never overrides the active tab when no tab has an href", async () => {
    history.replaceState(null, "", "/");

    const el = await mountWithTabs([
      { label: "One", clickEvent: () => {} },
      { label: "Two", clickEvent: () => {} },
      { label: "Three", clickEvent: () => {} },
    ]);

    // Hash / client-side routers own the active tab themselves
    el.activeTabIndex = 2;
    await settle();

    history.pushState(null, "", "/");
    await settle();

    expect(el.activeTabIndex).toBe(2);
    expect(activeTabIndexes(el)).toEqual([2]);
  });

  it("moves the active tab with keyboard arrow navigation", async () => {
    // Nav tabs are hidden below the desktop breakpoint, and hidden elements
    // cannot take focus, so widen the viewport for this test.
    await page.viewport(1280, 800);

    try {
      const el = await mountWithTabs([
        { label: "One", clickEvent: () => {} },
        { label: "Two", clickEvent: () => {} },
        { label: "Three", clickEvent: () => {} },
      ]);

      const tabs = Array.from(el.shadowRoot!.querySelectorAll("wa-tab")) as HTMLElement[];
      tabs[0].focus();
      tabs[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }),
      );
      await settle();

      expect(el.activeTabIndex).toBe(1);
      expect(activeTabIndexes(el)).toEqual([1]);
    } finally {
      await page.viewport(414, 896);
    }
  });
});
