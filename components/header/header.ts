import "../../theme/hot.css";

import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";

import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { headerVariants, type sizes, styles} from "./styles";

import registerBundledIcons from "../../components/icons";

registerBundledIcons();

interface MenuItem {
  label: string;
  clickEvent: () => void;
}

export class Header extends LitElement {

  @property() name = "hot-header";

  /** Use a text-based title in the header. */
  @property({ type: String }) title: string = "";

  /** Display a logo on the left of the header. */
  @property({ type: String }) logo: string | URL = "";

  /** Add a drawer icon with a click event to e.g. open a sidebar. */
  @property({ type: Boolean }) drawer: boolean = true;

  /** Array of menu items to include as navigation tabs. */
  @property({ type: Array }) tabs: MenuItem[] = [];

  /** Size of toolbar vertically. */
  @property({ type: String }) size: sizes = "large";

  @state() private selectedTab: number = 0;

  static styles = styles;

  protected render() {
    const logoSrc =
      typeof this.logo === "string" || this.logo instanceof URL
        ? typeof this.logo === "string"
          ? this.logo
          : this.logo.href
        : "";

    return html`
      <header class=${headerVariants({ size: this.size })}>
        <a href="/" class="logo-link header-logo hot-flex hot-flex-row">
          ${logoSrc.length > 0
            ? html`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="hot-h-10 hot-px-10 hot-hover:opacity-90"
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
                <h1 class="hot-text-2xl hot-color-primary hot-font-sans hot-font-bold hot-pl-3 hot-m-0">
                  ${this.title}
                </h1>
              `
            : null}
        </a>

        ${/* Navigation bar for desktop, hide on mobile */ ""}
        <nav
          className="hot-hidden hot-sm:flex hot-justify-between hot-items-center hot-gap-4 hot-font-semibold"
        >
          <sl-tab-group className="hot-flex-col">
            ${this.tabs.map(
              (item, index) => html`
                <sl-tab
                  slot="nav"
                  panel="general"
                  @click=${(e: MouseEvent) => {
                    this._selectTab(e, item.clickEvent, index);
                  }}
                  ?selected=${this.selectedTab === index}
                  >${item.label}</sl-tab
                >
              `
            )}
          </sl-tab-group>
        </nav>

        ${/* Stacked navigation drawer for mobile */ ""}
        ${/* NOTE this should probably be in a drawer instead */ ""}
        <nav
          className="hot-sm:hidden hot-flex hot-flex-col hot-items-end hot-gap-1 hot-font-semibold"
        ></nav>

        <div id="right-section" class="hot-flex hot-flex-center">
          <sl-icon-button
            library="bundled"
            name="person-circle"
            style="font-size: var(--sl-font-size-x-large)"
            label="login"
            @click=${(e: MouseEvent) => {
              this._handleLogin(e);
            }}
          ></sl-icon-button>
            ${this.drawer
              ? html`
                  <sl-icon-button
                    library="bundled"
                    style="font-size: var(--sl-font-size-x-large)"
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
