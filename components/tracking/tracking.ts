import "../../theme/sl-custom.css";

import "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { LitElement, css, html, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";

import registerBundledIcons from "../../components/icons";

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

  /** Force display the banner. */
  @property({ type: Boolean }) force: boolean = false;

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
        text-align: center;
      }
      sl-alert::part(base) {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        width: 80vw;
        text-align: center;
      }
    `,
  ];

  protected render() {
    return html`<sl-alert variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <p id="tracking-header">About the information we collect</p>

      <p>
        We use cookies and similar technologies to recognize and analyze your
        visits, and measure traffic usage and activity. You can learn about how
        we use the data about your visit or information you provide reading our
        <a
          style="color: #d63f3f;"
          href="https://www.hotosm.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >privacy policy</a
        >. By clicking "I Agree", you consent to the use of cookies.
      </p>

      <sl-button
        @click=${(e: MouseEvent) => {
          this._setAgree(e);
        }}
        >I Agree</sl-button
      >
      <sl-button
        @click=${(e: MouseEvent) => {
          this._setDisagree(e);
        }}
        >I Do Not Agree</sl-button
      >
    </sl-alert>`;
  }

  private _setAgree(_e: MouseEvent) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) return;

    _paq.push(["rememberConsentGiven"]);
    this.isOpen = false;
    localStorage.setItem(`${this.siteId}-matomo-agree`, "true");
    this.dispatchEvent(new Event("agree", { bubbles: true, composed: true }));
  }

  private _setDisagree(_e: MouseEvent) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) return;

    _paq.push(["forgetConsentGiven"]);
    this.isOpen = false;
    localStorage.setItem(`${this.siteId}-matomo-agree`, "false");
    this.dispatchEvent(
      new Event("disagree", { bubbles: true, composed: true })
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Close and halt execution if wrong domain
    if (!this.force && window.location.hostname !== this.domain) {
      console.warn(
        `Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`
      );
      this.isOpen = false;
      return;
    }

    const matomoTrackingId = this.siteId;

    // Close and halt execution if siteId or domain not set
    if (
      !this.force &&
      (matomoTrackingId.length === 0 || this.domain.length === 0)
    ) {
      console.warn("Matomo init failed. No site id or domains provided.");
      this.isOpen = false;
      return;
    }

    // Close and halt execution if already disagreed
    const consent = localStorage.getItem(`${this.siteId}-matomo-agree`);
    if (consent === "false") {
      this.isOpen = false;
      return;
    }

    // Close prompt only if already agreed, continue
    if (consent === "true") {
      this.isOpen = false;
    }

    console.log(
      `Setting Matomo tracking for site=${matomoTrackingId} domain=${this.domain}`
    );

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);

    // tracker methods like "setCustomDimension" should be called before "trackPageView"
    _paq.push(["requireConsent"]);
    _paq.push(["setDomains", [this.domain]]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]); // Tracks downloads
    _paq.push(["trackVisibleContentImpressions"]); // Tracks content

    (function () {
      const u = "//matomo.hotosm.org/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", matomoTrackingId]);

      const d = document;
      const g = d.createElement("script");
      const s = d.getElementsByTagName("script")[0];

      if (s?.parentNode != null) {
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      } else {
        console.warn("Script insertion failed. Parent node is null.");
      }
    })();
  }
}

export default Tracking;

// Define web component
// customElements.define("hot-tracking", Tracking);
