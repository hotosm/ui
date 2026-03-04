// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import('@awesome.me/webawesome/dist/components/tab-group/tab-group.js'),
  import('@awesome.me/webawesome/dist/components/dialog/dialog.js'),
  import('@awesome.me/webawesome/dist/components/icon/icon.js'),
  import('@awesome.me/webawesome/dist/components/drawer/drawer.js'),
  import('@awesome.me/webawesome/dist/components/dropdown/dropdown.js'),
  import('@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js'),
]);

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import type { CSSResultGroup, PropertyValues } from 'lit';
// @ts-ignore (hanko doesn't like being wrapped...)
import { register as registerHanko } from '@teamhanko/hanko-elements';

import { headerVariants, type sizes, styles } from './header.styles.js';
import registerBundledIcons from "../icons.js"
import osmLogoRaw from '../../assets/logo/osm-logo.svg?raw';
const osmLogoDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(osmLogoRaw)}`;

registerBundledIcons();

interface MenuItem {
  label: string;
  /** Optional click handler for the tab */
  clickEvent?: () => void;
  /** Optional href used to auto-detect the active tab from the current URL */
  href?: string;
}

export class Header extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = "hot-header";

  /** Use a text-based title in the header. */
  @property({ type: String })
  accessor title: string = "";

  /** Optional tagline text shown in the top header bar. */
  @property({ type: String, attribute: 'top-tagline' })
  accessor topTagline: string = "Mapping our world together";

  /** Optional label for the website link in the top header bar. */
  @property({ type: String, attribute: 'top-link-label' })
  accessor topLinkLabel: string = "Humanitarian OpenStreetMap Team Website";

  /** Optional href for the website link in the top header bar. */
  @property({ type: String, attribute: 'top-link-href' })
  accessor topLinkHref: string = "https://www.hotosm.org";

  /** Display a logo on the left of the header. */
  @property({ type: String })
  accessor logo: string | URL = "";

  /** Add a drawer icon with a click event to e.g. open a sidebar. */
  @property({ type: Boolean })
  accessor drawer: boolean = false;

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
  @property({ type: Boolean, attribute: 'border-bottom' })
  accessor borderBottom: boolean = false;
  
  /** Index of the selected tab. */
  @property({ type: Number })
  accessor selectedTab: number = 0;
  /** Index of the active tab (0-based). Use this to control which tab is active for any number of tabs. */
  @property({ type: Number })
  accessor activeTabIndex: number = 0;

  /** Show/hide login functionality. */
  @property({ type: Boolean, attribute: 'show-login' })
  accessor showLogin: boolean = false;

  /** Control the login modal state. */
  @property({ type: Boolean, attribute: 'login-modal-open' })
  accessor loginModalOpen: boolean = false;

  /** Default fallback icon for providers without custom icons. */
  @property({ type: String, attribute: "default-login-icon" })
  accessor defaultLoginIcon: string = "user";

  /** Whether the user is currently logged in. When true, an avatar is shown instead of the Login button. */
  @property({ type: Boolean, attribute: 'logged-in' })
  accessor loggedIn: boolean = false;

  /** Display name of the logged-in user. The first letter is used for the avatar initial. */
  @property({ type: String, attribute: 'user-name' })
  accessor userName: string = "";
 
  /** Internal state for desktop nav scrolling */
  private _navScrollAtStart = true;
  private _navScrollAtEnd = false;

  /** Ensure we only auto-sync from URL once unless tabs change */
  private _urlMatchInitialized = false;

  async connectedCallback() {
    super.connectedCallback();

    // Only initialise Hanko when the login UI is actually enabled
    if (!this.showLogin) return;

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

  protected firstUpdated(_changed: PropertyValues) {
    this._updateNavScrollState();
    this._syncActiveTabWithLocation();
  }

  protected updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);

    // Keep the active tab in sync when host apps control the selected tab
    if (changedProps.has('selectedTab')) {
      const newIndex = this.selectedTab;
      if (
        typeof newIndex === 'number' &&
        newIndex >= 0 &&
        newIndex < this.tabs.length &&
        newIndex !== this.activeTabIndex
      ) {
        this.activeTabIndex = newIndex;
      }
    }

    if (changedProps.has('tabs') || changedProps.has('size')) {
      this.updateComplete.then(() => this._updateNavScrollState());

      // When tabs change (e.g. first assignment), try to pick the active tab from URL
      if (changedProps.has('tabs')) {
        this._urlMatchInitialized = false;
        this._syncActiveTabWithLocation();
      }
    }
  }


  selectTab(index: number) {
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

  /** Update which nav arrows should be visible/enabled based on scroll position. */
  private _updateNavScrollState() {
    const container = this.renderRoot?.querySelector(
      '.header--nav-scroll',
    ) as HTMLElement | null;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const atStart = scrollLeft <= 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    if (atStart !== this._navScrollAtStart || atEnd !== this._navScrollAtEnd) {
      this._navScrollAtStart = atStart;
      this._navScrollAtEnd = atEnd;
      this.requestUpdate();
    }
  }

  /** Scroll the desktop nav horizontally to reveal hidden items. */
  private _scrollNav(direction: 'left' | 'right') {
    const container = this.renderRoot?.querySelector(
      '.header--nav-scroll',
    ) as HTMLElement | null;
    if (!container) return;

    // Two main states: fully left, or fully right (mirrors Tasking Manager)
    const maxScroll = Math.max(container.scrollWidth - container.clientWidth, 0);
    const target =
      direction === 'right'
        ? maxScroll
        : 0;

    container.scrollTo({ left: target, behavior: 'smooth' });

    // Recalculate arrow state shortly after scroll
    window.setTimeout(() => this._updateNavScrollState(), 250);
  }

  /** Try to infer the active tab from the current browser URL and tab hrefs. */
  private _syncActiveTabWithLocation() {
    if (this._urlMatchInitialized) return;
    if (typeof window === 'undefined' || !this.tabs?.length) return;

    const currentPath = window.location.pathname.replace(/\/+$/, '');
    if (!currentPath) return;

    let bestIndex = -1;
    let bestScore = -1;

    this.tabs.forEach((tab, index) => {
      if (!tab?.href) return;
      try {
        const url = new URL(tab.href, window.location.origin);
        const path = url.pathname.replace(/\/+$/, '');
        if (!path) return;

        if (currentPath === path) {
          // Exact match wins immediately
          bestIndex = index;
          bestScore = Number.MAX_SAFE_INTEGER;
        } else if (
          bestScore < Number.MAX_SAFE_INTEGER &&
          currentPath.startsWith(path) &&
          path.length > bestScore
        ) {
          // Longest matching prefix (e.g. /projects vs /projects/123)
          bestIndex = index;
          bestScore = path.length;
        }
      } catch {
        // Ignore invalid URLs in tab config
      }
    });

    if (bestIndex >= 0) {
      this.selectedTab = bestIndex;
      this.activeTabIndex = bestIndex;
      this._urlMatchInitialized = true;
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
      <div class="header-container">
        ${this.size !== 'small'
          ? html`
              <div class="header--top">
                <div class="header--top-left">
                  ${this.topTagline
                    ? html`
                        <span class="header--top-tagline">
                          ${this.topTagline}
                        </span>
                      `
                    : null}
                </div>
                <div class="header--top-right">
                  ${this.topLinkHref && this.topLinkLabel
                    ? html`
                        <a
                          href="${this.topLinkHref}"
                          class="header--top-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${this.topLinkLabel}
                          <svg width="11" height="11" viewBox="0 0 11 11" class="header--external-icon" aria-hidden="true"><path fill="currentColor" d="M9.778 9.778H1.222V1.222H5.5V0H1.222C.544 0 0 .55 0 1.222v8.556C0 10.45.544 11 1.222 11h8.556C10.45 11 11 10.45 11 9.778V5.5H9.778v4.278zM6.722 0v1.222h2.194L2.91 7.23l.862.862 6.007-6.007v2.194H11V0H6.722z"></path></svg>
                        </a>
                      `
                    : null}
                </div>
              </div>
            `
          : null}

        <header
          class=${headerVariants({
            size: this.size,
            borderBottom: this.borderBottom,
          })}
        >
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
              ?icon-only=${this.title.length > 0}
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
        <nav class="header--nav">
          ${this.tabs.length > 0
            ? html`
                <div class="header--nav-wrapper">
                  <button
                    class="header--nav-arrow header--nav-arrow-left"
                    ?disabled=${this._navScrollAtStart}
                    @click=${() => this._scrollNav('left')}
                    aria-hidden=${this._navScrollAtStart}
                    tabindex=${this._navScrollAtStart ? -1 : 0}
                  >
                    &#8249;
                  </button>

                  <div
                    class="header--nav-scroll"
                    @scroll=${() => this._updateNavScrollState()}
                  >
                    <wa-tab-group
                      class="header--tab-group"
                      @wa-tab-show=${(e: CustomEvent) =>
                        this._handleTabShow(e)}
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
                            @click=${(e: MouseEvent) =>
                              this._tabClick(e, item.clickEvent, index)}
                          >
                            ${item.label}
                          </wa-tab>
                        `;
                      })}
                    </wa-tab-group>
                  </div>

                  <button
                    class="header--nav-arrow header--nav-arrow-right"
                    ?disabled=${this._navScrollAtEnd}
                    @click=${() => this._scrollNav('right')}
                    aria-hidden=${this._navScrollAtEnd}
                    tabindex=${this._navScrollAtEnd ? -1 : 0}
                  >
                    &#8250;
                  </button>
                </div>
              `
            : null}
        </nav>

        

        <div id="right-section" class="header--right-section">
           ${this.showLogin
            ? this.loggedIn
              ? html`
                  <wa-dropdown placement="bottom-end" class="header--user-dropdown" @wa-select=${(e: CustomEvent) => this._handleUserMenuSelect(e)}>
                    <button slot="trigger" class="header--avatar-trigger" aria-label="User menu">
                      <span class="header--avatar-initial">${this._avatarInitial}</span>
                    </button>
                    <wa-dropdown-item value="logout">
                      <wa-icon slot="prefix" name="right-from-bracket"></wa-icon>
                      Logout
                    </wa-dropdown-item>
                  </wa-dropdown>
                `
              : html`
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
                  <div class="drawer-content">
                    ${this.tabs.length
                      ? html`
                          <div class="drawer-nav">
                            <ul class="drawer-nav-list">
                              ${this.tabs.map(
                                (item, index) => html`
                                  <li class="drawer-nav-item">
                                    <button
                                      class="drawer-nav-button"
                                      data-index="${index}"
                                      @click=${(e: MouseEvent) =>
                                        this._tabClick(e, item.clickEvent, index)}
                                    >
                                      ${item.label}
                                    </button>
                                  </li>
                                `,
                              )}
                            </ul>
                            <hr class="drawer-separator" />
                          </div>
                        `
                      : null}

                    <ul class="drawer-link-list">
                      ${this.drawerLinks.map(
                        (link) => html`
                          <li class="drawer-link-item">
                            <a
                              href="${link.href}"
                              data-drawer-close
                              class="drawer-link"
                            >
                              ${link.label}
                            </a>
                          </li>
                        `,
                      )}
                    </ul>
                  </div>
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
      </div>

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

  private async _tabClick(e: MouseEvent, clickAction: (() => void) | undefined, index: number) {
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
        this.selectTab(index);
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

  /** Derive a single uppercase letter from the user's name (fallback: "U"). */
  private get _avatarInitial(): string {
    const letter = this.userName?.trim()?.[0];
    return letter ? letter.toUpperCase() : 'U';
  }

  private _handleUserMenuSelect(e: CustomEvent) {
    const item = e.detail?.item;
    const value = item?.value ?? item?.getAttribute?.('value');
    if (value === 'logout') {
      this.dispatchEvent(new Event('logout', { bubbles: true }));
    }
  }

  private _handleDrawerOpen() {
    const drawer = this.renderRoot?.querySelector('#drawer-overview');
    if (drawer) (drawer as any).open = true;
  }

}

export default Header;
