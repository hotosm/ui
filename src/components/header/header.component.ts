import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { headerVariants, type sizes, styles } from './header.styles.js';
import type { CSSResultGroup } from 'lit';

import registerBundledIcons from "../icons.js"
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

  /** Size of toolbar vertically. */
  @property({ type: String })
  accessor size: sizes = "small";

  /** Border bottom. */
  @property({ type: Boolean })
  accessor borderBottom: boolean = true;
  
  @property({ type: Number })
  accessor selectedTab: number = 0;

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
          <sl-tab-group class="header--tab-group">
            ${this.tabs.map(
              (item, index) => html`
                <sl-tab
                  class="header--tab"
                  slot="nav"
                  panel="general"
                  @click=${(e: MouseEvent) => {
                    this._selectTab(e, item.clickEvent, index);
                  }}
                  ?active=${this.selectedTab === index}
                >
                  ${item.label}
                  <span class="header--hidden">${this.selectedTab}</span>
                </sl-tab>
              `
            )}
          </sl-tab-group>
        </nav>

        ${/* Stacked navigation drawer for mobile */ ""}
        ${/* NOTE this should probably be in a drawer instead */ ""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          <sl-icon-button
            name="person-fill"
            library="hot-icons"
            class="header--person-circle"
            label="login"
            @click=${(e: MouseEvent) => {
              this._handleLogin(e);
            }}
          ></sl-icon-button>
            ${this.drawer
              ? html`
                  <sl-icon-button
                    library="hot-icons"
                    class="header--drawer"
                    name="list"
                    label="drawer-open"
                  ></sl-icon-button>
                `
              : null}
          </div>
        </div>
      </header>
    `;
  }

  private _selectTab(_e: MouseEvent, clickAction: () => void, index: number) {
    this.selectedTab = index;
    clickAction();
  }

  private _handleLogin(_e: MouseEvent) {
    this.dispatchEvent(new Event("login"));
  }
}

export default Header;

// Define web component
customElements.define("hot-header", Header);
