import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const oneTab = [
  { label: 'ONE TAB ONLY', clickEvent: () => {} }
];
const twoTab = [
  {
    label: 'Projects',
    clickEvent: async () => {alert('Going to projects page')}
  },
  {
    label: 'Organisations',
    clickEvent: async () => {alert('Going to organisations page')}
  },
  {
    label: 'Test',
    clickEvent: async () => {alert('Going to test page')}
  }
];
const threeTab = Array.from({ length: 3 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));
const fourTab = Array.from({ length: 4 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));
const fiveTab = Array.from({ length: 5 }, (_, index) => ({
  label: `TAB Number ${index + 1}`,
  clickEvent: () => {}
}));

// Tasking Manager-style nav items (many tabs to test overflow/scroll)
const tmTabs = [
  { label: 'Explore projects', clickEvent: () => alert('Explore projects'), href: '/explore' },
  { label: 'My contributions', clickEvent: () => alert('My contributions'), href: '/contributions' },
  { label: 'Manage', clickEvent: () => alert('Manage'), href: '/manage' },
  { label: 'Learn', clickEvent: () => alert('Learn'), href: '/learn/map' },
  { label: 'About', clickEvent: () => alert('About'), href: '/about' },
  { label: 'Support', clickEvent: () => alert('Support'), href: '/support' },
];

const meta: Meta = {
  title: "Header",
  component: "hot-header",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    drawer: { control: 'boolean' },
    tabsCenterAlign: { control: 'boolean' },
    showLogin: { control: 'boolean' },
    loggedIn: { control: 'boolean' },
    userName: { control: 'text' },
    loginModalOpen: { control: 'boolean' },
    defaultLoginIcon: { control: 'text' },
    selectedTab: {
      options: [0,1,2,3,4,5],
      control: {
        type: "select",
      },
    },
    tabs: {
      options: ['1 Tab', '2 Tabs', '3 Tabs', '4 Tabs', '5 Tabs', '6 Tabs (TM-style)'],
      mapping: {
        '1 Tab': oneTab,
        '2 Tabs': twoTab,
        '3 Tabs': threeTab,
        '4 Tabs': fourTab,
        '5 Tabs': fiveTab,
        '6 Tabs (TM-style)': tmTabs,
      },
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const WithConfigurableProviders: Story = {
  args: {
    title: "HOTOSM Tools",
    size: "small",
    drawer: true,
    showLogin: true,
    loggedIn: false,
    loginModalOpen: false,
    loginProviders: {
      "osm": {
        "icon": "https://www.openstreetmap.org/assets/osm_logo-4b074077c29e100f40ee64f5177886e36b570d4cc3ab10c7b263003d09642e3f.svg",
        "loginUrl": "https://www.openstreetmap.org/oauth2/authorize",
        "redirectUrl": "https://ui.hotosm.com/auth/callback",
        "name": "OpenStreetMap"
      },
      "google": {
        "icon": "https://developers.google.com/identity/images/g-logo.png",
        "loginUrl": "https://accounts.google.com/o/oauth2/auth",
        "redirectUrl": "https://ui.hotosm.com/auth/callback", 
        "name": "Google"
      }
    },
    defaultLoginIcon: "user"
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        ?logged-in=${args.loggedIn}
        .loginProviders="${args.loginProviders}"
        default-login-icon="${args.defaultLoginIcon}"
        @login=${() => console.log('Login event dispatched')}
        @logout=${() => console.log('Logout event dispatched')}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
          { label: "Download Custom ODK Collect", href: "/download" }
        ]}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header with Configurable Login Providers</h2>
        <p>Toggle <code>loggedIn</code> in the controls to switch between Login button and user avatar.</p>
      </div>
    `;
  }
};

export const WithoutLogin: Story = {
  args: {
    title: "HOTOSM Tools",
    size: "small",

    drawer: true,
    showLogin: false,
  },
  render: (args) => {
    return html`
      <hot-header
        id="hot-header-component"
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header without Login</h2>
        <p>Login functionality is hidden when <code>showLogin</code> is <code>false</code>.</p>
      </div>
    `;
  }
};

export const WithNav: Story = {
  args: {
    title: "OpenAerialMap",
    size: "medium",

    drawer: true,
    showLogin: false,
    tabs: "5 Tabs",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        style="max-width: 900px; margin-inline: auto; display: block;"
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header with navigation tabs</h2>
        <p>Resize the canvas width to see navigation arrows appear when tabs overflow.</p>
      </div>
    `;
  }
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
    showLogin: true,
    loggedIn: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        ?logged-in=${args.loggedIn}
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
        <p>Toggle <code>loggedIn</code> to see the avatar replace the Login button.</p>
      </div>
    `;
  }
};

export const MediumWithNav: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",

    drawer: true,
    showLogin: true,
    loggedIn: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        ?logged-in=${args.loggedIn}
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
  }
};

export const LargeWithNav: Story = {
  args: {
    title: "Tasking Manager",
    size: "large",

    drawer: true,
    showLogin: true,
    loggedIn: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        ?logged-in=${args.loggedIn}
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
  }
};

/**
 * Constrained width to force nav overflow and test arrow scrolling.
 */
export const NavOverflowTest: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",

    drawer: true,
    showLogin: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
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
  }
};

/**
 * Demonstrates the logged-in state with a text-initial avatar and Logout dropdown.
 */
export const LoggedIn: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",

    drawer: true,
    showLogin: true,
    loggedIn: true,
    userName: "Jane Doe",
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"

        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
        ?logged-in=${args.loggedIn}
        user-name="${args.userName}"
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
        @logout=${() => alert('Logout clicked!')}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
        ]}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Logged-in header with text avatar</h2>
        <p>A circular avatar showing the first letter of the user's name replaces the Login button.
           Click the avatar to open a dropdown with a <strong>Logout</strong> option.</p>
        <p>Change the <code>userName</code> control to see the initial update.</p>
      </div>
    `;
  }
};

/**
 * Centre-aligned navigation tabs (opt-in via tabs-center-align).
 */
export const CenteredTabs: Story = {
  args: {
    title: "Tasking Manager",
    size: "medium",
    drawer: true,
    showLogin: false,
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
        ?show-login=${args.showLogin}
        ?tabs-center-align=${args.tabsCenterAlign}
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>
      <div style="padding: 20px;">
        <h2>Centre-aligned tabs</h2>
        <p>Toggle <code>tabsCenterAlign</code> to switch between left and centre alignment.</p>
      </div>
    `;
  }
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
    showLogin: true,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
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
  }
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
    showLogin: false,
    tabs: "6 Tabs (TM-style)",
    selectedTab: 0,
  },
  render: (args) => {
    const routes = [
      { path: '/explore', label: 'Go to /explore' },
      { path: '/contributions', label: 'Go to /contributions' },
      { path: '/manage', label: 'Go to /manage' },
      { path: '/learn/map', label: 'Go to /learn/map' },
      { path: '/about', label: 'Go to /about' },
      { path: '/support', label: 'Go to /support' },
    ];

    function navigate(path: string) {
      // Simulate SPA navigation - this triggers the hot-locationchange
      // event that the header is already listening for.
      history.pushState(null, '', path);
    }

    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?drawer=${args.drawer}
        ?show-login=${args.showLogin}
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
          Current path: <code id="current-path">${typeof window !== 'undefined' ? window.location.pathname : '/'}</code>
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
  }
};
