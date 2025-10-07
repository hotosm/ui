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
    borderBottom: { control: 'boolean' },
    drawer: { control: 'boolean' },
    showLogin: { control: 'boolean' },
    loginModalOpen: { control: 'boolean' },
    loginProviders: { control: 'object' },
    defaultLoginIcon: { control: 'text' },
    selectedTab: {
      options: [0,1,2,3,4,5],
      control: {
        type: "select",
      },
    },
    tabs: {
      options: ['1 Tab', '2 Tabs', '3 Tabs', '4 Tabs', '5 Tabs'],
      mapping: {
        '1 Tab': oneTab,
        '2 Tabs': twoTab,
        '3 Tabs': threeTab,
        '4 Tabs': fourTab,
        '5 Tabs': fiveTab,
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
    borderBottom: true,
    drawer: true,
    showLogin: true,
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
        ?borderBottom="${args.borderBottom}"
        ?drawer="${args.drawer}"
        ?showLogin="${args.showLogin}"
        .loginProviders="${args.loginProviders}"
        default-login-icon="${args.defaultLoginIcon}"
        @login=${() => {
          console.log('Login event dispatched');
        }}
        .drawerLinks=${[
          { label: "Learn", href: "/learn" },
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
          { label: "Download Custom ODK Collect", href: "/download" }
        ]}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header with Configurable Login Providers</h2>
        <p>This example demonstrates the new configurable login providers functionality.</p>
        <p>Click the "Login" button to see multiple login options configured via the <code>loginProviders</code> property.</p>
        
        <h3>Configuration:</h3>
        <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;"><code>{
  "loginProviders": {
    "osm": {
      "icon": "https://www.openstreetmap.org/assets/osm_logo.svg",
      "loginUrl": "https://openstreetmap.org/auth/osm",
      "redirectUrl": "https://app.example.com/auth/callback",
      "name": "OpenStreetMap"
    },
    "google": {
      "icon": "https://developers.google.com/identity/images/g-logo.png",
      "loginUrl": "https://accounts.google.com/o/oauth2/auth",
      "redirectUrl": "https://app.example.com/auth/callback", 
      "name": "Google"
    }
  }
}</code></pre>

        <h3>Features:</h3>
        <ul>
          <li>Configurable multiple login providers</li>
          <li>Custom icons for each provider</li>
          <li>Fallback to default icon when none specified</li>
          <li>Backend-handled OAuth (no clientId needed)</li>
          <li>Support for client-side OAuth (with clientId)</li>
          <li>Backward compatibility with OSM properties</li>
        </ul>
      </div>

      <h1>Test on a separate page</h1>
      Test on a separate page <a href="/osm-auth-test/index.html" target="_blank">here</a>
    `;
  }
};

export const WithoutLogin: Story = {
  args: {
    title: "HOTOSM Tools",
    size: "small",
    borderBottom: true,
    drawer: true,
    showLogin: false,
  },
  render: (args) => {
    return html`
      <hot-header
        id="hot-header-component"
        title="${args.title}"
        size="${args.size}"
        ?borderBottom="${args.borderBottom}"
        ?drawer="${args.drawer}"
        ?showLogin="${args.showLogin}"
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header without Login</h2>
        <p>This header component is displayed without login functionality.</p>
        <p>Notice that the login button is not visible when <code>showLogin</code> is set to <code>false</code>.</p>
        
        <h3>Use Cases:</h3>
        <ul>
          <li>Public information pages</li>
          <li>Landing pages</li>
          <li>Documentation sites</li>
          <li>Any context where authentication is not required</li>
        </ul>
      </div>
    `;
  }
};

export const WithNav: Story = {
  args: {
    title: "OpenAerialMap",
    size: "small",
    borderBottom: true,
    drawer: true,
    showLogin: false,
    tabs: twoTab,
    selectedTab: 0,
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?borderBottom="${args.borderBottom}"
        ?drawer="${args.drawer}"
        ?showLogin="${args.showLogin}"
        .tabs=${args.tabs}
        selectedTab=${args.selectedTab}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>Header with navigation tabs</h2>
        <p>Navigation tabs link to different pages on the site.</p>
      </div>
    `;
  }
};
