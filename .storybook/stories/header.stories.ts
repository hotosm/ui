import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const oneTab = [{ label: "ONE TAB ONLY", clickEvent: () => {} }];
const twoTab = [
  {
    label: "Projects",
    clickEvent: async () => {
      alert("Going to projects page");
    },
  },
  {
    label: "Organisations",
    clickEvent: async () => {
      alert("Going to organisations page");
    },
  },
  {
    label: "Test",
    clickEvent: async () => {
      alert("Going to test page");
    },
  },
];
const threeTab = Array.from({ length: 3 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {},
}));
const fourTab = Array.from({ length: 4 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {},
}));
const fiveTab = Array.from({ length: 5 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {},
}));

// Tasking Manager-style nav items (many tabs to test overflow/scroll)
const tmTabs = [
  { label: "Explore projects", clickEvent: () => alert("Explore projects"), href: "/explore" },
  {
    label: "My contributions",
    clickEvent: () => alert("My contributions"),
    href: "/contributions",
  },
  { label: "Manage", clickEvent: () => alert("Manage"), href: "/manage" },
  { label: "Learn", clickEvent: () => alert("Learn"), href: "/learn/map" },
  { label: "About", clickEvent: () => alert("About"), href: "/about" },
  { label: "Support", clickEvent: () => alert("Support"), href: "/support" },
];

const meta: Meta = {
  title: "Header",
  component: "hot-header",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    drawer: { control: "boolean" },
    tabsCenterAlign: { control: "boolean" },
    selectedTab: {
      options: [0, 1, 2, 3, 4, 5],
      control: {
        type: "select",
      },
    },
    tabs: {
      options: ["1 Tab", "2 Tabs", "3 Tabs", "4 Tabs", "5 Tabs", "6 Tabs (TM-style)"],
      mapping: {
        "1 Tab": oneTab,
        "2 Tabs": twoTab,
        "3 Tabs": threeTab,
        "4 Tabs": fourTab,
        "5 Tabs": fiveTab,
        "6 Tabs (TM-style)": tmTabs,
      },
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * The header exposes an `auth` slot in the top-right corner.
 * Drop any auth web component (e.g. <hotosm-auth>) into that slot and it
 * will appear alongside the drawer button without any coupling to the header.
 *
 * This story uses a plain button as a stand-in to show placement.
 */
export const WithAuthSlot: Story = {
  args: {
    title: "HOTOSM Tools",
    size: "small",
    drawer: true,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
          { label: "Download Custom ODK Collect", href: "/download" },
        ]}
      >
        <!-- Slot in your auth component here, e.g.: <hotosm-auth slot="auth" api-url="https://dev.login.hotosm.org"></hotosm-auth> -->
        <button slot="auth" style="padding: 6px 14px; border-radius: 4px; background: #d73f3f; color: white; border: none; cursor: pointer; font-size: 0.875rem;">
          Login (placeholder)
        </button>
      </hot-header>

      <div style="padding: 20px;">
        <h2>Header with auth slot</h2>
        <p>
          The header provides an <code>auth</code> slot in the top-right corner.
          Replace the placeholder button with <code>&lt;hotosm-auth slot="auth" ...&gt;</code>
          (or any other auth component) - the header has no opinion on the implementation.
        </p>
      </div>
    `;
  },
};

export const WithoutAuth: Story = {
  args: {
    title: "HOTOSM Tools",
    size: "small",
    drawer: true,
  },
  render: (args) => {
    return html`
      <hot-header
        id="hot-header-component"
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header without auth component</h2>
        <p>When nothing is placed in the <code>auth</code> slot, the top-right corner is empty.</p>
      </div>
    `;
  },
};

export const WithNav: Story = {
  args: {
    title: "OpenAerialMap",
    size: "medium",

    drawer: true,
    tabs: "5 Tabs",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        style="max-width: 900px; margin-inline: auto; display: block;"
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header with navigation tabs</h2>
        <p>Resize the canvas width to see navigation arrows appear when tabs overflow.</p>
      </div>
    `;
  },
};

/**
 * Mimics the Tasking Manager header at various sizes.
 * Resize the viewport to test responsive behaviour.
 */
export const SmallWithNav: Story = {
  args: {
    title: "Tasking Manager",
    size: "small",

    drawer: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Small header - Tasking Manager style</h2>
      </div>
    `;
  },
};

export const MediumWithNav: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",

    drawer: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Medium header</h2>
        <p>Logo should be visibly larger than the small variant.</p>
      </div>
    `;
  },
};

export const LargeWithNav: Story = {
  args: {
    title: "Tasking Manager",
    size: "large",

    drawer: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Large header</h2>
        <p>Logo should be the largest of the three size variants.</p>
      </div>
    `;
  },
};

/**
 * Constrained width to force nav overflow and test arrow scrolling.
 */
export const NavOverflowTest: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",

    drawer: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        style="max-width: 700px; margin-inline: auto; display: block;"
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>
      <div style="max-width: 700px; margin-inline: auto; padding: 20px;">
        <h2>Nav overflow / scroll arrows test</h2>
        <p>
          The header is constrained to 700px to force tab overflow.
          A right arrow should appear; clicking it reveals hidden tabs and shows a left arrow.
        </p>
      </div>
    `;
  },
};

/**
 * Centre-aligned navigation tabs (opt-in via tabs-center-align).
 */
export const CenteredTabs: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",
    drawer: true,
    tabsCenterAlign: true,
    tabs: "3 Tabs",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        ?tabs-center-align=${args.tabsCenterAlign}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Centre-aligned tabs</h2>
        <p>Toggle <code>tabsCenterAlign</code> to switch between left and centre alignment.</p>
      </div>
    `;
  },
};

/**
 * No explicit drawer prop, but tabs exist - the hamburger auto-appears on mobile.
 * Resize the viewport below 769 px to see the drawer button.
 */
export const AutoMobileDrawer: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",
    drawer: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Auto mobile drawer</h2>
        <p>
          <code>drawer</code> is <strong>false</strong>, but tabs are present.
          Resize below 769 px - a hamburger button auto-appears so mobile users
          can still navigate.
        </p>
      </div>
    `;
  },
};

/**
 * Interactive demo of the active-tab URL sync.
 *
 * Click the route buttons below the header to simulate SPA / htmx navigation
 * via history.pushState. The header listens for the resulting
 * "hot-locationchange" event and moves the active tab indicator automatically.
 */
export const ActiveTabUrlSync: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",
    drawer: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    const routes = [
      { path: "/explore", label: "Go to /explore" },
      { path: "/contributions", label: "Go to /contributions" },
      { path: "/manage", label: "Go to /manage" },
      { path: "/learn/map", label: "Go to /learn/map" },
      { path: "/about", label: "Go to /about" },
      { path: "/support", label: "Go to /support" },
    ];

    function navigate(path: string) {
      // Simulate SPA navigation - this triggers the hot-locationchange
      // event that the header is already listening for.
      history.pushState(null, "", path);
    }

    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Active tab ↔ URL sync</h2>
        <p>
          Click a button to simulate <code>history.pushState</code>.
          The header picks up the <code>hot-locationchange</code> event and
          moves the active tab indicator to the matching route.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
          ${routes.map(
            (r) => html`
              <button
                style="padding: 6px 14px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; background: #f9f9f9;"
                @click=${() => navigate(r.path)}
              >
                ${r.label}
              </button>
            `,
          )}
        </div>
        <p style="margin-top: 12px; font-size: 0.85rem; color: #666;">
          Current path: <code id="current-path">${typeof window !== "undefined" ? window.location.pathname : "/"}</code>
          <br/>
          <em>Note: the path shown above updates on click but the display only reflects
          the last pushState - refresh the page to reset.</em>
        </p>
      </div>

      <script type="module">
        // Keep the "current path" label up to date after each pushState
        window.addEventListener('hot-locationchange', () => {
          const el = document.getElementById('current-path');
          if (el) el.textContent = window.location.pathname;
        });
      </script>
    `;
  },
};
