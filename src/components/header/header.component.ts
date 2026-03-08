// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import('@awesome.me/webawesome/dist/components/tab-group/tab-group.js'),
  import('@awesome.me/webawesome/dist/components/icon/icon.js'),
  import('@awesome.me/webawesome/dist/components/drawer/drawer.js'),
  import('@awesome.me/webawesome/dist/components/dropdown/dropdown.js'),
  import('@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js'),
]);

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import type { CSSResultGroup, PropertyValues } from 'lit';

import { headerVariants, type sizes, styles } from './header.styles.js';
import registerBundledIcons from "../icons.js"

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

  /** Centre-align navigation tabs instead of the default left alignment. */
  @property({ type: Boolean, attribute: 'tabs-center-align' })
  accessor tabsCenterAlign: boolean = false;

  /** Index of the selected tab. */
  @property({ type: Number })
  accessor selectedTab: number = 0;
  /** Index of the active tab (0-based). Use this to control which tab is active for any number of tabs. */
  @property({ type: Number })
  accessor activeTabIndex: number = 0;

  /** Internal state for desktop nav scrolling */
  private _navScrollAtStart = true;
  private _navScrollAtEnd = false;

  /** Bound handler references for cleanup in disconnectedCallback */
  private _boundLocationSync: (() => void) | null = null;

  async connectedCallback() {
    super.connectedCallback();

    // Listen for URL changes so the active tab stays in sync
    // Works for SPA (pushState/replaceState) and htmx navigation
    this._boundLocationSync = () => this.syncActiveTab();
    window.addEventListener('popstate', this._boundLocationSync);
    window.addEventListener('hot-locationchange', this._boundLocationSync);
    // htmx fires this after pushState-based navigation
    window.addEventListener('htmx:pushedIntoHistory', this._boundLocationSync);

    // Patch history.pushState / replaceState once so every SPA router
    // automatically triggers our listener (no framework coupling needed).
    Header._patchHistory();

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._boundLocationSync) {
      window.removeEventListener('popstate', this._boundLocationSync);
      window.removeEventListener('hot-locationchange', this._boundLocationSync);
      window.removeEventListener('htmx:pushedIntoHistory', this._boundLocationSync);
      this._boundLocationSync = null;
    }
  }

  protected firstUpdated(_changed: PropertyValues) {
    this._updateNavScrollState();
    this.syncActiveTab();
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

      // When tabs change (e.g. first assignment), re-sync from URL
      if (changedProps.has('tabs')) {
        this.syncActiveTab();
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

  /**
   * Match the active tab to the current browser URL.
   *
   * Works automatically for:
   *  - htmx navigation (listens for `htmx:pushedIntoHistory` and `popstate`)
   *  - SPA routers (intercepts `history.pushState` / `replaceState`)
   *  - Traditional page loads (runs on `firstUpdated`)
   *
   * Host apps can also call this manually after programmatic navigation:
   *   `document.querySelector('hot-header').syncActiveTab();`
   */
  syncActiveTab() {
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
          bestIndex = index;
          bestScore = Number.MAX_SAFE_INTEGER;
        } else if (
          bestScore < Number.MAX_SAFE_INTEGER &&
          currentPath.startsWith(path) &&
          path.length > bestScore
        ) {
          bestIndex = index;
          bestScore = path.length;
        }
      } catch {
        // Ignore invalid URLs in tab config
      }
    });

    if (bestIndex >= 0 && bestIndex !== this.activeTabIndex) {
      this.selectedTab = bestIndex;
      this.activeTabIndex = bestIndex;
      this.requestUpdate();
    }
  }

  /**
   * Patch `history.pushState` and `history.replaceState` once globally
   * so that every call dispatches a `hot-locationchange` event.
   * Safe to call multiple times - the patch is applied only once.
   */
  private static _historyPatched = false;
  private static _patchHistory() {
    if (Header._historyPatched || typeof window === 'undefined') return;
    Header._historyPatched = true;

    const origPush = history.pushState.bind(history);
    const origReplace = history.replaceState.bind(history);

    history.pushState = function (data: unknown, unused: string, url?: string | URL | null) {
      origPush(data, unused, url);
      window.dispatchEvent(new Event('hot-locationchange'));
    };

    history.replaceState = function (data: unknown, unused: string, url?: string | URL | null) {
      origReplace(data, unused, url);
      window.dispatchEvent(new Event('hot-locationchange'));
    };
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
                          <span class="header--top-link-full">${this.topLinkLabel}</span>
                          <span class="header--top-link-short">HOT Website</span>
                          <svg width="11" height="11" viewBox="0 0 11 11" class="header--external-icon" aria-hidden="true"><path fill="currentColor" d="M9.778 9.778H1.222V1.222H5.5V0H1.222C.544 0 0 .55 0 1.222v8.556C0 10.45.544 11 1.222 11h8.556C10.45 11 11 10.45 11 9.778V5.5H9.778v4.278zM6.722 0v1.222h2.194L2.91 7.23l.862.862 6.007-6.007v2.194H11V0H6.722z"></path></svg>
                        </a>
                      `
                    : null}
                </div>
              </div>
            `
          : null}

        <header
          class=${headerVariants({ size: this.size })}
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
        <nav class="header--nav ${this.tabsCenterAlign ? 'header--nav-center' : ''}">
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
          <slot name="auth"></slot>
          ${this._showDrawer
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
                <wa-button
                  appearance="outlined"
                  class="${this.drawer ? '' : 'header--drawer-mobile-only'}"
                  @click=${() => this._handleDrawerOpen()}
                  aria-label="Open Sidebar"
                >
                    <wa-icon name="bars"></wa-icon>
                </wa-button>
              `
            : null}
        </div>

      </header>
      </div>
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

  /**
   * Should the drawer markup be rendered?
   * True when `drawer` is explicitly set, or when there are nav tabs
   * (so mobile users can still navigate via the sidebar).
   */
  private get _showDrawer(): boolean {
    return this.drawer || this.tabs.length > 0;
  }

  private _handleDrawerOpen() {
    const drawer = this.renderRoot?.querySelector('#drawer-overview');
    if (drawer) (drawer as any).open = true;
  }

}

export default Header;
