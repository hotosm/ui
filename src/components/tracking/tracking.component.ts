// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import("@awesome.me/webawesome/dist/components/callout/callout.js"),
  import("@awesome.me/webawesome/dist/components/icon/icon.js"),
  import("@awesome.me/webawesome/dist/components/button/button.js"),
  import("@awesome.me/webawesome/dist/components/dialog/dialog.js"),
]);

import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

declare global {
  interface Window {
    _paq: any[];
  }
}

export class MatomoTracking extends LitElement {
  name = "hot-tracking";

  /** The Matomo site id for tracking. */
  @property({ type: String, attribute: "site-id" })
  accessor siteId: string = "";

  /** The domains to apply tracking. */
  @property({ type: String })
  accessor domain: string = "";

  /** The Matomo URL */
  @property({ type: String })
  accessor matomoURL: string = "https://matomo.hotosm.org";

  /** Whether to show the consent banner */
  @property({ type: Boolean, attribute: "show-consent" })
  accessor showConsent: boolean = true;

  /** The consent message to display */
  @property({ type: String, attribute: "consent-message" })
  accessor consentMessage: string =
    "We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking 'Accept', you consent to our use of cookies and tracking technologies.";

  @state()
  private consentGiven: boolean = false;

  @state()
  private consentShown: boolean = false;

  @state()
  private errorMessage: string = "";

  @state()
  private showError: boolean = false;

  @state()
  private successMessage: string = "";

  @state()
  private showSuccess: boolean = false;

  @state()
  private infoMessage: string = "";

  @state()
  private showInfo: boolean = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--hot-font-sans);
    }

    wa-dialog {
      --width: 100vw;
    }

    wa-dialog::part(dialog) {
      position: fixed;
      inset: auto 0 0 0;
      margin: 0;
      max-width: 100vw;
      max-height: none;
      border-radius: var(--hot-border-radius-large) var(--hot-border-radius-large) 0 0;
    }

    wa-dialog::part(title) {
      font-weight: var(--hot-font-weight-semibold);
    }

    wa-dialog::part(body) {
      padding: var(--hot-spacing-medium) var(--hot-spacing-large);
    }

    wa-dialog::part(footer) {
      padding: var(--hot-spacing-medium) var(--hot-spacing-large);
    }

    .error-banner {
      position: fixed;
      top: var(--hot-spacing-medium);
      left: var(--hot-spacing-medium);
      right: var(--hot-spacing-medium);
      z-index: 1001;
      max-width: 600px;
      margin: 0 auto;
    }

    .toast-banner {
      position: fixed;
      top: var(--hot-spacing-medium);
      right: var(--hot-spacing-medium);
      z-index: 1002;
      max-width: 450px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .consent-actions {
      display: flex;
      gap: var(--hot-spacing-small);
      justify-content: flex-end;
    }

    wa-callout {
      --wa-callout-spacing: var(--hot-spacing-x-large);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      border-radius: var(--hot-border-radius-large);
      border: 1px solid var(--wa-color-surface-border);
      backdrop-filter: blur(8px);
    }

    wa-button {
      min-width: 80px;
      font-weight: var(--hot-font-weight-semibold);
      transition: all 0.2s ease;
    }

    wa-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .error-banner wa-callout {
      border-radius: var(--hot-border-radius-x-large);
      box-shadow: 0 16px 48px color-mix(in oklab, var(--hot-color-primary-500) 20%, transparent);
      border: 1px solid color-mix(in oklab, var(--hot-color-primary-500) 20%, transparent);
      background: linear-gradient(
        135deg,
        color-mix(in oklab, var(--hot-color-primary-50) 95%, transparent),
        color-mix(in oklab, var(--hot-color-primary-100) 95%, transparent)
      );
    }

    .error-banner wa-callout::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(
        90deg,
        var(--hot-color-primary-500),
        var(--hot-color-primary-600),
        var(--hot-color-primary-700)
      );
      border-radius: var(--hot-border-radius-x-large) var(--hot-border-radius-x-large) 0 0;
    }

    .toast-banner wa-callout {
      border-radius: var(--hot-border-radius-x-large);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.06);
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
    }

    .toast-banner wa-callout[variant="success"] {
      box-shadow: 0 12px 40px color-mix(in oklab, var(--hot-color-success-500) 15%, transparent);
      border: 1px solid color-mix(in oklab, var(--hot-color-success-500) 20%, transparent);
      background: linear-gradient(
        135deg,
        color-mix(in oklab, var(--hot-color-success-50) 95%, transparent),
        color-mix(in oklab, var(--hot-color-success-100) 95%, transparent)
      );
    }

    .toast-banner wa-callout[variant="success"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--hot-color-success-500), var(--hot-color-success-600));
      border-radius: var(--hot-border-radius-x-large) var(--hot-border-radius-x-large) 0 0;
    }

    .toast-banner wa-callout[variant="brand"] {
      box-shadow: 0 12px 40px color-mix(in oklab, var(--hot-color-primary-500) 15%, transparent);
      border: 1px solid color-mix(in oklab, var(--hot-color-primary-500) 20%, transparent);
      background: linear-gradient(
        135deg,
        color-mix(in oklab, var(--hot-color-primary-50) 95%, transparent),
        color-mix(in oklab, var(--hot-color-primary-100) 95%, transparent)
      );
    }

    .toast-banner wa-callout[variant="brand"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--hot-color-primary-500), var(--hot-color-primary-600));
      border-radius: var(--hot-border-radius-x-large) var(--hot-border-radius-x-large) 0 0;
    }

    wa-icon {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    @media (max-width: 768px) {
      .error-banner {
        left: var(--hot-spacing-x-small);
        right: var(--hot-spacing-x-small);
        max-width: none;
      }

      .toast-banner {
        right: var(--hot-spacing-x-small);
        max-width: calc(100vw - var(--hot-spacing-medium));
      }
    }
  `;

  private get consentKey(): string {
    return `hot-matomo-consent-${this.siteId}`;
  }

  private getStoredConsent(): boolean | null {
    const value = localStorage.getItem(this.consentKey);
    if (value === null) return null;
    return value === "true";
  }

  private setStoredConsent(granted: boolean) {
    localStorage.setItem(this.consentKey, String(granted));
  }

  agree() {
    this.consentGiven = true;
    this.consentShown = false;
    this.setStoredConsent(true);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    _paq.push(["rememberConsentGiven"]);
    _paq.push(["trackPageView"]);

    this.showSuccessCallout("Tracking consent granted. Thank you!");
  }

  disagree() {
    this.consentGiven = false;
    this.consentShown = false;
    this.setStoredConsent(false);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    _paq.push(["forgetConsentGiven"]);

    this.showInfoCallout("Tracking disabled. You can change this preference later.");
  }

  private showConsentBanner() {
    if (this.showConsent && !this.consentGiven && !this.consentShown) {
      this.consentShown = true;
    }
  }

  private showErrorCallout(message: string) {
    this.errorMessage = message;
    this.showError = true;

    // Auto-hide error after 10 seconds
    setTimeout(() => {
      this.showError = false;
    }, 10000);
  }

  private showSuccessCallout(message: string) {
    this.successMessage = message;
    this.showSuccess = true;

    // Auto-hide success after 5 seconds
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }

  private showInfoCallout(message: string) {
    this.infoMessage = message;
    this.showInfo = true;

    // Auto-hide info after 5 seconds
    setTimeout(() => {
      this.showInfo = false;
    }, 5000);
  }

  protected render() {
    return html`
      ${
        this.showError
          ? html`
        <div class="error-banner">
          <wa-callout style="padding: 1rem;" variant="danger" appearance="outlined filled" size="large">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-exclamation"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Tracking Configuration Error</strong><br />
              ${this.errorMessage}
            </div>
          </wa-callout>
        </div>
      `
          : ""
      }
      
      ${
        this.showSuccess
          ? html`
        <div class="toast-banner">
          <wa-callout style="padding: 1rem;" variant="success" appearance="outlined accent" size="medium">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-check"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Success!</strong><br />
              ${this.successMessage}
            </div>
          </wa-callout>
        </div>
      `
          : ""
      }
      
      ${
        this.showInfo
          ? html`
        <div class="toast-banner">
          <wa-callout style="padding: 1rem;" variant="brand" appearance="outlined filled" size="medium">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-info"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Information</strong><br />
              ${this.infoMessage}
            </div>
          </wa-callout>
        </div>
      `
          : ""
      }
      
      <wa-dialog
        label="Privacy & Tracking"
        ?open=${this.consentShown}
        @wa-hide=${(e: Event) => {
          // Prevent closing the dialog without making a choice (X button, escape, overlay click)
          // Only allow close when agree/disagree has set consentShown to false
          if (this.consentShown) {
            e.preventDefault();
          }
        }}
      >
        ${this.consentMessage}
        <div slot="footer" class="consent-actions">
          <wa-button size="small" variant="neutral" @click=${() => this.disagree()}>
            Decline
          </wa-button>
          <wa-button size="small" variant="brand" @click=${() => this.agree()}>
            Accept
          </wa-button>
        </div>
      </wa-dialog>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    // Abort if current domain does not match
    if (window.location.hostname !== this.domain) {
      console.warn(
        `[hot-tracking] Domain mismatch: expected "${this.domain}", got "${window.location.hostname}". Tracking disabled.`,
      );
      return;
    }

    const matomoTrackingId = this.siteId;

    // Close and halt execution if siteId or domain not set
    if (matomoTrackingId.length === 0 || this.domain.length === 0) {
      this.showErrorCallout(
        "Matomo tracking is not properly configured. Please provide both site-id and domain attributes.",
      );
      return;
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);

    _paq.push(["setDomains", [this.domain]]);
    _paq.push(["enableLinkTracking"]);
    _paq.push(["trackVisibleContentImpressions"]);

    (function (matomoURL) {
      _paq.push(["setTrackerUrl", `${matomoURL}/matomo.php`]);
      _paq.push(["setSiteId", matomoTrackingId]);

      const d = document;
      const g = d.createElement("script");
      const s = d.getElementsByTagName("script")[0];

      if (s?.parentNode != null) {
        g.async = true;
        g.src = `${matomoURL}/matomo.js`;
        s.parentNode.insertBefore(g, s);
      } else {
        console.warn("Script insertion failed. Parent node is null.");
      }
    })(this.matomoURL);

    if (this.showConsent) {
      // Consent mode: require consent before tracking
      _paq.push(["requireConsent"]);

      const storedConsent = this.getStoredConsent();

      if (storedConsent === true) {
        // Previously granted - re-apply consent and track
        this.consentGiven = true;
        _paq.push(["rememberConsentGiven"]);
        _paq.push(["trackPageView"]);
      } else if (storedConsent === false) {
        // Previously declined - don't track, don't show banner
        this.consentGiven = false;
      } else {
        // No stored preference - show consent dialog
        this.showConsentBanner();
      }
    } else {
      // No consent required - track immediately
      _paq.push(["trackPageView"]);
    }
  }
}

export default MatomoTracking;
