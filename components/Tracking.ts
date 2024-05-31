import "../theme/hot.css";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/alert/alert.js';

import { LitElement, css, html, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";

import registerBundledIcons from '../theme/icons/bundled';

registerBundledIcons();

declare global {
  interface Window {
    _paq: any[];
  }
}

export class Tracking extends LitElement {
  @property() name = "hot-tracking";

  /** The Matomo site id for tracking. */
  @property({ type: String, attribute: "site-id" }) siteId: string = "";

  /** The domains to apply tracking. */
  @property({ type: String }) domain: string = "";

  @state() isOpen: boolean = true;

  static styles = [
    css`
      @unocss-placeholder;
    `,

    // Temp styles until UnoCSS setup
    css`
      #tracking-header {
        font-weight: var(--sl-font-weight-bold);
        font-size: var(--sl-font-size-large);
        color: #d63f3f;
      }
      #hot-red-text {
        color: #d63f3f;
      }
      sl-alert::part(base) {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        width: 80vw;
      }
    `
  ];

  protected render() {
    return html`<sl-alert
      variant="danger"
      ?open=${this.isOpen}
    >
    <sl-icon id="hot-red-text" library="bundled" slot="icon" name="info-circle"></sl-icon>

    <p id="tracking-header">
    About the information we collect
    </p>

    <p>
    We use cookies and similar technologies to recognize and analyze your visits,
    and measure traffic usage and activity. You can learn about how we use the data
    about your visit or information you provide reading our
      <a
        id="hot-red-text"
        href="https://www.hotosm.org/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >privacy policy</a>.
    By clicking "I Agree", you consent to the use of cookies.
    </p>

    <sl-button @click=${(e: MouseEvent) => {
      this._setAgree(e);
    }}>I Agree</sl-button>
    <sl-button @click=${(e: MouseEvent) => {
      this._setDisagree(e);
    }}>I Do Not Agree</sl-button>
    </sl-alert>`;
  }

  private _closeAlert() {
    this.isOpen = false;
    localStorage.setItem(`${this.siteId}-optout-closed`, 'true');
  }

  private _setAgree(_e: MouseEvent) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) {
      return;
    }

    _paq.push(['rememberConsentGiven']);
    this._closeAlert()
    this.dispatchEvent(new Event('agree', {bubbles: true, composed: true}));
  }

  private _setDisagree(_e: MouseEvent) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) {
      return;
    }

    _paq.push(['forgetConsentGiven']);
    this._closeAlert()
    this.dispatchEvent(new Event('disagree', {bubbles: true, composed: true}));
  }


  connectedCallback() {
    super.connectedCallback()

    // Close automatically if already optout
    if (localStorage.getItem(`${this.siteId}-optout-closed`) === 'true') {
      this.isOpen = false;
      return;
    }

    // Close automatically if wrong domain
    if (window.location.hostname !== this.domain) {
      this.isOpen = false;
      return;
    }
  
    // Configure Matomo tracking
    const matomoTrackingId = this.siteId;

    if ((matomoTrackingId.length === 0) || this.domain.length === 0) {
      console.warn('Matomo init failed. No site id or domains provided.');
      this.isOpen = false;
      return;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
  
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['requireConsent']);
    _paq.push(['setDomains', [this.domain]]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']); // Tracks downloads
    _paq.push(['trackVisibleContentImpressions']); // Tracks content blocks
  
    (function () {
      const u = '//matomo.hotosm.org/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', matomoTrackingId]);

      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];

      if ((s?.parentNode) != null) {
        g.async = true;
        g.src = u + 'matomo.js';
        s.parentNode.insertBefore(g, s);
      } else {
        console.warn('Script insertion failed. Parent node is null.');
      }
    })();
  }
}

export default Tracking;

// Define web component
customElements.define("hot-tracking", Tracking);
