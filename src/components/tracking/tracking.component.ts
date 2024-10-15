import { LitElement } from "lit";
import { property } from "lit/decorators.js";

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

  agree() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) return;
  }

  disagree() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);
    if (_paq.length === 0) return;
    _paq.push(["forgetConsentGiven"]);
  }

  connectedCallback() {
    super.connectedCallback();

    // Close and halt execution if wrong domain
    if (window.location.hostname !== this.domain) {
      console.warn(
        `Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`
      );
      return;
    }

    const matomoTrackingId = this.siteId;

    // Close and halt execution if siteId or domain not set
    if (
      (matomoTrackingId.length === 0 || this.domain.length === 0)
    ) {
      console.warn("Matomo init failed. No site id or domains provided.");
      return;
    }

    // Close and halt execution if already disagreed
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
  }
}

export default MatomoTracking;

// Define web component
customElements.define("hot-tracking", MatomoTracking);
