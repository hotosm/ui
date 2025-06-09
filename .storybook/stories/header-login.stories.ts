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
    osmOauthUrl: { control: 'text' },
    OsmOauthClientId: { control: 'text' },
    OsmOauthRedirectUri: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj;

export const WithLogin: Story = {
  args: {
    title: "HOT OSM Tools",
    size: "small",
    borderBottom: true,
    drawer: true,
    showLogin: true,
    loginModalOpen: false,
    osmOauthUrl: "https://www.openstreetmap.org/oauth2/authorize",
    OsmOauthClientId: "",
    OsmOauthRedirectUri: ""
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
        <h2>Header with OSM OAuth Login</h2>
        <p>This header component includes OSM OAuth login functionality.</p>
        <p>Click the "Login" button on the right side of the header to open the login modal.</p>
        
        <h3>Features:</h3>
        <ul>
          <li>OSM OAuth 2.0 integration</li>
          <li>Modal-based login UI</li>
          <li>Configurable OSM OAuth parameters</li>
          <li>Session storage for redirect paths</li>
          <li>Uses page redirect to avoid popup blocker issues</li>
        </ul>
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
