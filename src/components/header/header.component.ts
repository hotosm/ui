import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/drawer/drawer.js';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import type { CSSResultGroup } from 'lit';
// @ts-ignore (hanko doesn't like being wrapped...)
import { register as registerHanko } from '@teamhanko/hanko-elements';

import { headerVariants, type sizes, styles } from './header.styles.js';
import registerBundledIcons from "../icons.js"
import osmLogoRaw from '../../assets/logo/osm-logo.svg?raw';
import { setupAutoInjection, injectHOTThemeIntoAllComponents } from '../../utils/shadow-dom-css.js';
const osmLogoDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(osmLogoRaw)}`;

registerBundledIcons();

interface MenuItem {
  label: string;
  clickEvent: () => void;
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

  /** Array of links to include in the drawer. */
  @property({ type: Array })
  accessor drawerLinks: Array<{ label: string; href: string }> = [];

  /** Size of toolbar vertically. */
  @property({ type: String })
  accessor size: sizes = "small";

  /** Border bottom. */
  @property({ type: Boolean })
  accessor borderBottom: boolean = true;
  
  /** Index of the selected tab. */
  @property({ type: Number })
  accessor selectedTab: number = 0;
  /** Index of the active tab (0-based). Use this to control which tab is active for any number of tabs. */
  @property({ type: Number })
  accessor activeTabIndex: number = 0;

  /** Show/hide login functionality. */
  @property({ type: Boolean })
  accessor showLogin: boolean = false;

  /** Control the login modal state. */
  @property({ type: Boolean })
  accessor loginModalOpen: boolean = false;

  /** Default fallback icon for providers without custom icons. */
  @property({ type: String, attribute: "default-login-icon" })
  accessor defaultLoginIcon: string = "user";

  async connectedCallback() {
    super.connectedCallback();

    // Set up CSS injection for wa-button shadow DOM
    setupAutoInjection();

    await registerHanko('https://dev.login.hotosm.org', {
      shadow: false, // We can't use shadow dom, as the OSM custom element part is not exposed
      // injectStyles: false, // Set to false if you do not want to inject any default styles.
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
    }).catch((_error: Error) => {
      // handle error
    });
  }

  protected firstUpdated() {
    // Ensure CSS injection happens after the component is fully rendered
    setTimeout(() => {
      injectHOTThemeIntoAllComponents();
    }, 100);
  }

  protected updated() {
    // Re-inject CSS after any update to catch new WebAwesome elements
    requestAnimationFrame(() => {
      injectHOTThemeIntoAllComponents();
    });
  }

  selectTab(index: number) {
    console.log('Selecting tab:', index);
    if (index !== this.selectedTab && index >= 0 && index < this.tabs.length) {
      const previousTab = this.selectedTab;
      this.selectedTab = index;
      // Update the active tab index
      this.activeTabIndex = index;
      
      // Dispatch a custom event for tab change
      this.dispatchEvent(new CustomEvent('tab-change', {
        detail: { 
          selectedIndex: index, 
          previousIndex: previousTab,
          tab: this.tabs[index]
        },
        bubbles: true
      }));
      
      // Trigger a re-render to update the active state
      this.requestUpdate();
    }
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
          <wa-tab-group 
            class="header--tab-group"
            @wa-tab-show=${(e: CustomEvent) => this._handleTabShow(e)}
          >
            ${this.tabs.map((item, index) => {
              const isActive = this.activeTabIndex === index;
              return html`
                <wa-tab
                  panel="${item.label}-${index}"
                  class="header--tab"
                  slot="nav"
                  ?active=${isActive}
                  data-index="${index}"
                  @click=${(e: MouseEvent) => this._tabClick(e, item.clickEvent, index)}
                >
                  ${item.label}
                </wa-tab>
              `;
            })}
          </wa-tab-group>
          ` : null}
        </nav>

        

        <div id="right-section" class="header--right-section">
           ${this.showLogin
            ? html`
                <wa-button
                  variant="brand"
                  class="login-button"
                  @click=${() => this._handleLogin()}
                >
                  Login
                </wa-button>
              `
            : null}
          ${this.drawer
            ? html`
                <wa-drawer label=" " id="drawer-overview">
                  <ul style="list-style: none; padding: 0; margin: 0;">
                    ${this.drawerLinks.map(
                      (link) => html`
                        <li style="margin: 1.5rem 0;">
                          <a href="${link.href}" style="color: inherit; text-decoration: none; font-size: 1.2rem;">${link.label}</a>
                        </li>
                      `
                    )}
                  </ul>
                </wa-drawer>
                <wa-button appearance="outlined" @click=${() => this._handleDrawerOpen()}>
                    <wa-icon name="bars"></wa-icon>
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
                <wa-button appearance="outlined" @click=${() => this._handleModalClose()}>
                    <wa-icon  name="xmark"></wa-icon>
                </wa-button>

                <hanko-auth redirect-to="${location.origin}"></hanko-auth>
              </wa-dialog>
            `
          : null}
      </header>

      <!-- Here we must directly include the hanko style overrides, as it includes a SVG -->
      <!-- Note we can't remove the existing svg, so need to hide and override it -->
      <!-- THIS ISN'T WORKING WELL. We can either try and fix the styling or perhaps manipulate the DOM via Javascript instead?? -->
      <style>
        .hanko_form #icon-custom-provider {
          display: none;
        }
      
        .hanko_form .hanko_loadingSpinnerWrapperIcon:has(#icon-custom-provider) {
          background: url("${osmLogoDataUrl}") no-repeat center center;
          background-size: contain;
          display: inline-flex;
          align-items: center;
          height: 100%;
          margin: 0 5px;
          justify-content: inherit;
          flex-wrap: inherit;
          width: 100%;
          column-gap: 10px;
          margin-left: 10px;
        }
      </style>
    `;
  }

  private async _tabClick(e: MouseEvent, clickAction: () => void, index: number) {
    // Prevent default behavior to avoid potential conflicts
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Update the selected tab state first
      this.selectTab(index);
      
      // Use setTimeout to ensure DOM updates are complete before navigation
      // This is more reliable than requestAnimationFrame for navigation
      setTimeout(async () => {
        try {
          if (typeof clickAction === 'function') {
            await clickAction();
          }
        } catch (navigationError) {
          console.error('Error during navigation:', navigationError);
          // Try synchronous fallback
          if (typeof clickAction === 'function') {
            clickAction();
          }
        }
      }, 0);
      
    } catch (error) {
      console.error('Error handling tab click:', error);
      // Fallback: try the action synchronously
      try {
        if (typeof clickAction === 'function') {
          clickAction();
        }
      } catch (fallbackError) {
        console.error('Fallback navigation also failed:', fallbackError);
      }
    }
  }

  private _handleTabShow(e: CustomEvent) {
    // Alternative handler for WebAwesome tab-show events
    try {
      const tab = e.target as HTMLElement;
      const index = parseInt(tab.getAttribute('data-index') || '0', 10);
      if (!isNaN(index) && index < this.tabs.length) {
        const clickEvent = this.tabs[index].clickEvent;
        if (typeof clickEvent === 'function') {
          clickEvent();
        }
      }
    } catch (error) {
      console.error('Error handling tab show event:', error);
    }
  }

  private _handleLogin() {
    this.loginModalOpen = true;
    this.dispatchEvent(new Event("login"));
  }

  private _handleModalClose() {
    this.loginModalOpen = false;
  }

  private _handleDrawerOpen() {
    const drawer = this.renderRoot?.querySelector('#drawer-overview');
    if (drawer) (drawer as any).open = true;
  }

}

export default Header;