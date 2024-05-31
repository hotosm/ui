import "../theme/hot.css";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';

import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import registerBundledIcons from '../components/icons';

registerBundledIcons();

const hotLogo = new URL('../theme/logo.png', import.meta.url);

// import { cva } from "class-variance-authority";

// const headerStyle = cva(
//   "some-css-var",
//   {
//     variants: {
//       someProperty: {
//         true: "some-css-var",
//         false: "some-css-var",
//       },
//     },
//   },
// );

export class Header extends LitElement {
  @property() name = "hot-header";

  @property({ type: String }) title: string = '';

  @property({ type: String }) logo: string | URL = hotLogo;

  @property({ type: Boolean }) drawer: boolean = true;

  static styles = [
    css`
      @unocss-placeholder;
    `,
    // unsafeCSS(reset),
    css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        padding: 12px;
        padding-top: 4px;

        position: fixed;
        left: 0;
        top: 0;
        height: 50px;
        width: 100%;
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 12px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #logo-block {
        height: 40px;
        max-width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      }

      #logo {
        height: 100%;
        width: 100%
      }

      #drawer-block {
        display: flex;
        justify-content: space-between;
        align-items: right;
        gap: 8px;
        padding-right: 30px;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `
  ];

  // class=${headerStyle({
  //   someProperty: this.someProperty,
  // })}
  protected render() {
    const logoSrc = typeof this.logo === 'string' || this.logo instanceof URL ? (typeof this.logo === 'string' ? this.logo : this.logo.href) : '';
  
    return html`
    <header>

      ${(logoSrc.length > 0) ? html`
        <div id="logo-block">
          <img id="logo" src="${this.logo}" alt="Logo">
        </div>
      ` : null}

      ${(this.title.length > 0) ? html`
        <h1>${this.title}</h1>
      ` : null}

      <sl-tab-group>
        <sl-tab slot="nav" panel="projects">Explore Projects</sl-tab>
        <sl-tab slot="nav" panel="organisations">Manage Organizations</sl-tab>
      </sl-tab-group>

      ${this.drawer ? html`
        <div id="drawer-block" style="font-size: 32px;">
          <sl-icon-button library="bundled" name="list" label="drawer-open"></sl-icon-button>
        </div>
      ` : null}

    </header>
    `;
  }
}

export default Header;

// Define web component
customElements.define("hot-header", Header);
