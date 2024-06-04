import "../../theme/sl-custom.css";

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';

import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { cva } from "class-variance-authority";

import registerBundledIcons from '../../components/icons';

registerBundledIcons();


const headerVariants = cva(
  // Defaults to include in all variants
  `
    flex flex-row bg-[var(--hot-white)] items-center justify-between
    sm:justify-around p-2 border-b-2 border-b-gray-100 border-b-solid 
  `,
  {
    variants: {
      size: {
        small: "h-8",
        large: "h-14",
      },
    },
  },
);
type sizes = "small" | "large";

interface MenuItem {
  label: string,
  clickEvent: () => void;
}

export class Header extends LitElement {
  @property() name = "hot-header";

  /** Use a text-based title in the header. */
  @property({ type: String }) title: string = '';

  /** Display a logo on the left of the header. */
  @property({ type: String }) logo: string | URL = `
    data:image/png;base64,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
  `;

  /** Add a drawer icon with a click event to e.g. open a sidebar. */
  @property({ type: Boolean }) drawer: boolean = true;

  /** Array of menu items to include as navigation tabs. */
  @property({ type: Array }) tabs: MenuItem[] = [];

  /** Size of toolbar vertically. */
  @property({ type: String }) size: sizes = "large";

  @state() private selectedTab: number = 0;

  static styles = [
    css`@unocss-placeholder;`,
    css`
      #right-section {
        display: flex;
        align-items: center;
      }
      
      sl-tab-group {
        display: flex;
      }

      sl-tab::part(base) {
        font-size: 1rem;
        border-bottom: 2px solid transparent;
      }

      sl-tab[selected]::part(base) {
        border-bottom: 2px solid white;
      }

      #drawer-block {
        display: flex;
        align-items: center;
        padding-right: 30px;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }
        #break {
          background-color: black;
        }
      }
    `
  ];

  protected render() {
    const logoSrc = typeof this.logo === 'string' || this.logo instanceof URL ? (typeof this.logo === 'string' ? this.logo : this.logo.href) : '';

    return html`
    <header class=${headerVariants({size: this.size})}>
      <a href="/" class="flex flex-row">
        ${(logoSrc.length > 0) ? html`
          <img
            id="logo"
            src="${this.logo}"
            alt="Logo"
            class="h-10 px-10 hover:opacity-90"
          >
        ` : null}

        ${(this.title.length > 0) ? html`
          <h1 class="text-2xl color-primary font-sans font-bold pl-3 m-0">${this.title}</h1>
        ` : null}
      </a>

      ${ /* Navigation bar for desktop, hide on mobile */'' }
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <sl-tab-group>
          ${this.tabs.map(
            (item, index) => html`
              <sl-tab 
                slot="nav" 
                panel="general"
                @click=${(e: MouseEvent) => { this._selectTab(e, item.clickEvent, index); }}
                ?selected=${this.selectedTab === index}
              >${item.label}</sl-tab>
            `
          )}
        </sl-tab-group>
      </nav>

      ${ /* Stacked navigation drawer for mobile */'' }
      ${ /* NOTE this should probably be in a drawer instead */'' }
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
      </nav>

      <div id="right-section" style="display: flex; align-items: center;">
        <sl-icon-button
          library="bundled"
          name="person-circle"
          style="font-size: 1.8rem;"
          label="login"
          @click=${(e: MouseEvent) => { this._handleLogin(e)}}
        ></sl-icon-button>
        
        <div id="drawer-block" style="font-size: 2rem;">
          ${this.drawer ? html`
            <sl-icon-button library="bundled" name="list" label="drawer-open"></sl-icon-button>
          ` : null}
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
