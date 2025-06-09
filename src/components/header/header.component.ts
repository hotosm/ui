import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/tab-group/tab-group.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/dialog/dialog.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js';
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { headerVariants, type sizes, styles } from './header.styles.js';
import type { CSSResultGroup } from 'lit';
import osmLogo from '../../assets/logo/osm-logo.png'

import registerBundledIcons from "../icons.js"
registerBundledIcons();

interface MenuItem {
  label: string;
  clickEvent: () => void;
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

  /** OSM OAuth Base URL. */
  @property({ type: String, attribute: "osm-oauth-url" })
  accessor osmOauthUrl: string = "https://www.openstreetmap.org/oauth2/authorize";

  /** OAuth Client ID. */
  @property({ type: String, attribute: "oauth-client-id" })
  accessor oauthClientId: string = "";

  /** OAuth Redirect URI. */
  @property({ type: String, attribute: "oauth-redirect-uri" })
  accessor oauthRedirectUri: string = "";

  private loginOptions: LoginOption[] = [
    {
      id: 'osm_account',
      name: 'Personal OSM Account',
      image: osmLogo
    }
  ];

  selectTab(index: number) {
    console.log(index);
    this.tabs = [...this.tabs];
    this.selectedTab = index;
  }

  private osmLoginRedirect() {
    if (!this.oauthClientId || !this.oauthRedirectUri) {
      console.error('OAuth client ID and redirect URI must be provided');
      return;
    }

    const currentPath = window.location.pathname + window.location.search;
    sessionStorage.setItem('requestedPath', currentPath);

    const params = new URLSearchParams({
      client_id: this.oauthClientId,
      redirect_uri: this.oauthRedirectUri,
      response_type: 'code',
      scope: 'read_prefs'
    });

    const oauthUrl = `${this.osmOauthUrl}?${params.toString()}`;

    // // Check if running in Storybook iframe to prevent CSP violations
    // const isStorybook = window !== window.top || window.location.href.includes('storybook');
    
    // if (isStorybook) {
    //   console.log('OAuth redirect prevented in Storybook environment. URL would be:', oauthUrl);
    //   alert('Login functionality demonstrated. In a real application, this would redirect to OpenStreetMap OAuth.');
    //   return;
    // }

    // Always use redirect method to avoid popup blocker issues
    window.location.href = oauthUrl;
  }

  private handleSignIn(selectedOption: string) {
    if (selectedOption === 'osm_account') {
      this.osmLoginRedirect();
    }
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
        </nav>

        ${/* Stacked navigation drawer for mobile */ ""}
        ${/* NOTE this should probably be in a drawer instead */ ""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          ${this.showLogin
            ? html`
                <wa-button
                  variant="brand"
                  class="header--login-button"
                  @click=${() => this._handleLogin()}
                >
                  Login
                </wa-button>
              `
            : null}
          ${this.drawer
            ? html`
                <wa-icon-button
                  library="hot-icons"
                  class="header--drawer"
                  name="list"
                  label="drawer-open"
                ></wa-icon-button>
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
                label="Sign In"
              >
                <div class="login-content">
                  <div class="login-options">
                    ${this.loginOptions.map((option) => html`
                      <div
                        class="login-option"
                        @click=${() => this.handleSignIn(option.id)}
                      >
                        <div class="login-option-icon">
                          ${option.image 
                            ? html`<img src="${option.image}" alt="${option.name}" />` 
                            : option.icon 
                              ? html`<wa-icon name="${option.icon}"></wa-icon>`
                              : null
                          }
                        </div>
                        <div class="login-option-text">${option.name}</div>
                      </div>
                    `)}
                  </div>
                </div>
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

// Define web component
customElements.define("hot-header", Header);
