import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/tab-group/tab-group.js';
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
  
  /** Index of the selected tab. */
  @property({ type: Number })
  accessor selectedTab: number = 0;

  selectTab(index: number) {
    console.log(index);
    this.tabs = [...this.tabs];
    this.selectedTab = index;
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
            ${this.tabs.map(
              (item, index) => html`
                <wa-tab
                panel={item.label}
                  class=${["header--tab", this.selectedTab === index ? "header--tab-active" : ""].join(" ")}
                  slot="nav"
                  @click=${(e: MouseEvent) => {
                    this._tabClick(e, item.clickEvent, index);
                  }}
                >
                  ${item.label}
                </wa-tab>
              `
            )}
          </wa-tab-group>
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

  private _tabClick(_e: MouseEvent, clickAction: () => void, index: number) {
    this.selectTab(index);
    clickAction();
  }

  private _handleLogin(_e: MouseEvent) {
    this.dispatchEvent(new Event("login"));
  }

}

export default Header;

// Define web component
customElements.define("hot-header", Header);
