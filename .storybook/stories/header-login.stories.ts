import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Header/With Login",
  component: "hot-header",
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
    // OSM OAuth only support
    osmOauthUrl: { control: 'text' },
    OsmOauthClientId: { control: 'text' },
    OsmOauthRedirectUri: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj;

export const WithConfigurableProviders: Story = {
  args: {
    title: "HOT OSM Tools",
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

export const OsmOauthSupport: Story = {
  args: {
    title: "HOT OSM Tools",
    size: "small",
    borderBottom: true,
    drawer: true,
    showLogin: true,
    loginModalOpen: false,
    osmOauthUrl: "https://www.openstreetmap.org/oauth2/authorize",
    OsmOauthClientId: "your_osm_client_id",
    OsmOauthRedirectUri: "https://app.example.com/auth/callback"
  },
  render: (args) => {
    return html`
      <hot-header
        title="${args.title}"
        size="${args.size}"
        ?borderBottom="${args.borderBottom}"
        ?drawer="${args.drawer}"
        ?showLogin="${args.showLogin}"
        osm-oauth-url="${args.osmOauthUrl}"
        osm-oauth-client-id="${args.OsmOauthClientId}"
        osm-oauth-redirect-uri="${args.OsmOauthRedirectUri}"
        @login=${() => {
          console.log('Login event dispatched');
        }}
      ></hot-header>

      <div style="padding: 20px;">
        <h2>OSM OAuth Support</h2>
        <p>This example demonstrates compatibility with the OSM-specific properties.</p>
        <p>When no <code>loginProviders</code> is configured, the component falls back to using the OSM properties.</p>
        
        <h3>OSM OAuth Properties:</h3>
        <ul>
          <li><code>osm-oauth-url</code>: OSM OAuth authorization URL</li>
          <li><code>osm-oauth-client-id</code>: OSM OAuth client ID</li>
          <li><code>osm-oauth-redirect-uri</code>: OSM OAuth redirect URI</li>
        </ul>

        <p><strong>Note:</strong> These properties are deprecated. Use the new <code>loginProviders</code> configuration for new implementations.</p>
      </div>
    `;
  }
};

export const WithoutLogin: Story = {
  args: {
    title: "HOT OSM Tools",
    size: "small",
    borderBottom: true,
    drawer: true,
    showLogin: false,
  },
  render: (args) => {
    return html`
      <hot-header
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
