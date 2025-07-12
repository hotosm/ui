import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import type { CSSResultGroup } from 'lit';
import { register as registerHanko } from '@teamhanko/hanko-elements';

import { headerVariants, type sizes, styles } from './header.styles.js';
import osmLogo from '../../assets/logo/osm-logo.png'
import registerBundledIcons from "../icons.js"

registerBundledIcons();
await registerHanko('https://login.hotosm.org', {
  // shadow: true, // Set to false if you do not want the web component to be attached to the shadow DOM.
  // injectStyles: true, // Set to false if you do not want to inject any default styles.
  // enablePasskeys: false, // Set to false if you do not want to display passkey-related content.
  // hidePasskeyButtonOnLogin: true, // Hides the button to sign in with a passkey on the login page.
  // // translations: undefined, // Additional translations can be added here. English is used when the option is not
  // // // present or set to `null`, whereas setting an empty object `{}` prevents the elements
  // // // from displaying any translations.
  // // translationsLocation: '/i18n', // The URL or path where the translation files are located.
  // // fallbackLanguage: 'en', // The fallback language to be used if a translation is not available.
  // storageKey: 'hanko', // The name of the cookie the session token is stored in and the prefix / name of local storage keys
  // cookieDomain: undefined, // The domain where the cookie set from the SDK is available. When undefined,
  // // defaults to the domain of the page where the cookie was created.
  // cookieSameSite: 'lax', // Specify whether/when cookies are sent with cross-site requests.
  sessionCheckInterval: 30000, // Interval for session validity checks in milliseconds. Must be greater than 3000 (3s).
  // sessionTokenLocation: 'cookie' // Specify where the session token should be stored. Either `cookie` or `sessionStorage`.
}).catch((_error) => {
  // handle error
});

interface MenuItem {
  label: string;
  clickEvent: () => void;
}

interface LoginProvider {
  icon?: string;
  loginUrl: string;
  redirectUrl: string;
  clientId?: string;
  name?: string; // Optional display name, defaults to provider key
  scope?: string; // Optional OAuth scope
}

interface LoginProviders {
  [key: string]: LoginProvider;
}

interface LoginOption {
  id: string;
  name: string;
  icon?: string;
  image?: string;
}

export class Header extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = "hot-header";

  /** Use a text-based title in the header. */
  @property({ type: String })
  accessor title: string = "";

  /** Display a logo on the left of the header. */
  @property({ type: String })
  accessor logo: string | URL = "";

  /** Add a drawer icon with a click event to e.g. open a sidebar. */
  @property({ type: Boolean })
  accessor drawer: boolean = true;

  /** Array of menu items to include as navigation tabs. */
  @property({ type: Array })
  accessor tabs: MenuItem[] = [];

  /** Size of toolbar vertically. */
  @property({ type: String })
  accessor size: sizes = "small";

  /** Border bottom. */
  @property({ type: Boolean })
  accessor borderBottom: boolean = true;
  
  /** Index of the selected tab. */
  @property({ type: Number })
  accessor selectedTab: number = 0;

  /** Show/hide login functionality. */
  @property({ type: Boolean })
  accessor showLogin: boolean = false;

  /** Control the login modal state. */
  @property({ type: Boolean })
  accessor loginModalOpen: boolean = false;

  /** Configuration object for login providers. */
  @property({ type: Object, attribute: "login-providers" })
  accessor loginProviders: LoginProviders = {};

  /** Default fallback icon for providers without custom icons. */
  @property({ type: String, attribute: "default-login-icon" })
  accessor defaultLoginIcon: string = "user";

  // Legacy support - these will be used to create a default OSM provider if loginProviders is empty
  @property({ type: String, attribute: "osm-oauth-url" })
  accessor osmOauthUrl: string = "https://www.openstreetmap.org/oauth2/authorize";

  @property({ type: String, attribute: "osm-oauth-client-id" })
  accessor OsmOauthClientId: string = "";

  @property({ type: String, attribute: "osm-oauth-redirect-uri" })
  accessor OsmOauthRedirectUri: string = "";

  private get loginOptions(): LoginOption[] {
    // If no loginProviders configured, fall back to OSM configuration
    if (Object.keys(this.loginProviders).length === 0 && this.OsmOauthClientId && this.OsmOauthRedirectUri) {
      return [
        {
          id: 'osm',
          name: 'Personal OSM Account',
          image: osmLogo
        }
      ];
    }

    // Convert loginProviders config to loginOptions
    return Object.entries(this.loginProviders).map(([key, provider]) => ({
      id: key,
      name: provider.name || this.formatProviderName(key),
      icon: provider.icon ? undefined : this.defaultLoginIcon,
      image: provider.icon
    }));
  }

  private formatProviderName(key: string): string {
    // Convert provider key to display name (e.g., "osm" -> "OSM", "google" -> "Google")
    return key.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }

  selectTab(index: number) {
    console.log(index);
    this.tabs = [...this.tabs];
    this.selectedTab = index;
  }

  private performLogin(providerId: string) {
    const provider = this.loginProviders[providerId];
    
    if (!provider) {
      // OSM OAuth support
      if (providerId === 'osm') {
        this.legacyOsmLoginRedirect();
        return;
      }
      console.error(`Login provider '${providerId}' not found`);
      return;
    }

    if (!provider.clientId) {
      // If no clientId, assume backend handles OAuth and just redirect to loginUrl
      window.location.href = provider.loginUrl;
      return;
    }

    // Client-side OAuth flow
    const currentPath = window.location.pathname + window.location.search;
    sessionStorage.setItem('requestedPath', currentPath);

    const params = new URLSearchParams({
      client_id: provider.clientId,
      redirect_uri: provider.redirectUrl,
      response_type: 'code',
      ...(provider.scope && { scope: provider.scope })
    });

    const authUrl = `${provider.loginUrl}?${params.toString()}`;
    window.location.href = authUrl;
  }

  private legacyOsmLoginRedirect() {
    if (!this.OsmOauthClientId || !this.OsmOauthRedirectUri) {
      console.error('OSM OAuth client ID and redirect URI must be provided');
      return;
    }

    const currentPath = window.location.pathname + window.location.search;
    sessionStorage.setItem('requestedPath', currentPath);

    const params = new URLSearchParams({
      client_id: this.OsmOauthClientId,
      redirect_uri: this.OsmOauthRedirectUri,
      response_type: 'code',
      scope: 'read_prefs'
    });

    const OsmOauthUrl = `${this.osmOauthUrl}?${params.toString()}`;
    window.location.href = OsmOauthUrl;
  }

  private handleSignIn(selectedOption: string) {
    this.performLogin(selectedOption);
    this.loginModalOpen = false;
  }

  protected render() {
    const logoSrc =
      typeof this.logo === "string" || this.logo instanceof URL
        ? typeof this.logo === "string"
          ? this.logo
          : this.logo.href
        : "";

    return html`
      <header class=${headerVariants({ 
          size: this.size,
          borderBottom: this.borderBottom
        })}>
        <a href="/" class="header--link">
          ${logoSrc.length > 0
            ? html`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `
            : html`
            <hot-logo
              ?iconOnly="${this.title.length > 0}"
            >
            </hot-logo>
            `}
          ${this.title.length > 0
            ? html`
                <h1 class="header--title">
                  ${this.title}
                </h1>
              `
            : null}
        </a>

        ${/* Navigation bar for desktop, hide on mobile */ ""}
        <nav
          class="header--nav"
        >
        ${this.tabs.length > 0 ? html`
          <wa-tab-group class="header--tab-group">
            ${this.tabs.map((item, index) => {
              const isActive = this.selectedTab === index;
              const tabClass = isActive ? "header--tab header--tab-active" : "header--tab";
              return html`
                <wa-tab
                  panel="${item.label}"
                  class="${tabClass}"
                  slot="nav"
                  @click=${(e: MouseEvent) => this._tabClick(e, item.clickEvent, index)}
                >
                  ${item.label}
                </wa-tab>
              `;
            })}
          </wa-tab-group>
          ` : null}
        </nav>

        ${/* Stacked navigation drawer for mobile */ ""}
        ${/* NOTE this should probably be in a drawer instead */ ""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          <slot name="right-section"></slot>
          ${this.showLogin
            ? html`
                <hot-button
                  variant="primary"
                  hot-color="red"
                  size="small"
                  @click=${() => this._handleLogin()}
                >
                  Login
                </hot-button>
              `
            : null}
          ${this.drawer
            ? html`
                <wa-button>
                  <wa-icon library="hot-icons" name="list" label="drawer-open" class="header--drawer">
                  </wa-icon>
                </wa-button>
              `
            : null}
        </div>

        <!-- Login Modal -->
        ${this.showLogin
          ? html`
              <wa-dialog 
                class="login-modal"
                ?open=${this.loginModalOpen}
                @wa-hide=${() => this._handleModalClose()}
              >
                <wa-button @click=${() => this._handleModalClose()}>
                  <wa-icon library="hot-icons" name="close" label="cross">
                    Close
                  </wa-icon>
                </wa-button>

                <hanko-auth></hanko-auth>
              </wa-dialog>
            `
          : null}
      </header>
    `;
  }

  private _tabClick(_e: MouseEvent, clickAction: () => void, index: number) {
    this.selectTab(index);
    clickAction();
  }

  private _handleLogin() {
    this.loginModalOpen = true;
    this.dispatchEvent(new Event("login"));
  }

  private _handleModalClose() {
    this.loginModalOpen = false;
  }

}

export default Header;
