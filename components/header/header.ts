import "../../theme/sl-custom.css";

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';

import { LitElement, css, html, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";

import registerBundledIcons from '../../components/icons';

registerBundledIcons();

const hotLogo = new URL('../../theme/logo.png', import.meta.url);

interface MenuItem {
  label: string,
  clickEvent: () => void;
}

export class Header extends LitElement {
  @property() name = "hot-header";

  @property({ type: String }) title: string = '';

  @property({ type: String }) logo: string | URL = hotLogo;

  @property({ type: Boolean }) drawer: boolean = true;

  @property({ type: Array }) tabs: MenuItem[] = [];

  @state() private selectedTab: number = 0;

  static styles = [
    css`
      @unocss-placeholder;
    `,
    css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        padding: 12px;
        padding-top: 4px;
        padding-bottom: 4px;
        border-bottom: 2px solid #e1e0e0;
        position: fixed;
        left: 0;
        top: 0;
        height: 50px;
        width: 100%;
        -webkit-app-region: drag;
      }

      #left-section {
        display: flex;
        align-items: center;
      }

      #left-section h1 {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 8px;
        font-family: var(--sl-font-sans);
        font-weight: var(--sl-font-weight-bold);
        color: var(--hot-primary);
      }

      #logo-block {
        height: 40px;
        max-width: 50%;
        display: flex;
        align-items: center;
      }

      #logo {
        height: 100%;
        width: auto;
      }

      .middle-section {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }

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
    <header>
      <div id="left-section">
        ${(logoSrc.length > 0) ? html`
          <div id="logo-block">
            <img id="logo" src="${this.logo}" alt="Logo">
          </div>
        ` : null}

        ${(this.title.length > 0) ? html`
          <h1>${this.title}</h1>
        ` : null}
      </div>

      <div class="middle-section">
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
      </div>
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
    console.log("Login button clicked");
  }
}

export default Header;

// Define web component
customElements.define("hot-header", Header);
