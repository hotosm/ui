import { LitElement, css } from "lit";
import { property } from "lit/decorators.js";

declare global {
  interface Window {
    _paq: any[];
  }
}

/**
 * Registers cookieless Matomo tracking once per page, with no UI.
 *
 * Banner-free use also requires IP anonymisation and no personal data in
 * URLs, page titles or referrers. See https://github.com/hotosm/ui/issues/197.
 */
export class MatomoTracking extends LitElement {
  name = "hot-tracking";

  @property({ type: String, attribute: "site-id" })
  accessor siteId: string = "";

  /** Tracking runs only on this exact hostname. */
  @property({ type: String })
  accessor domain: string = "";

  @property({ type: String })
  accessor matomoURL: string = "https://matomo.hotosm.org";

  static styles = css`
    :host {
      display: none;
    }
  `;

  /** Global Privacy Control counts as an objection to tracking. */
  private hasOptedOut(): boolean {
    return (
      (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Share initialisation across reconnects and duplicate elements.
    if (document.querySelector("script[data-hot-tracking]") !== null) return;

    if (this.siteId.length === 0 || this.domain.length === 0) {
      console.error(
        "[hot-tracking] Both site-id and domain attributes are required. Tracking disabled.",
      );
      return;
    }

    if (window.location.hostname !== this.domain) {
      console.warn(
        `[hot-tracking] Domain mismatch: expected "${this.domain}", got "${window.location.hostname}". Tracking disabled.`,
      );
      return;
    }

    if (this.hasOptedOut()) return;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const _paq = (window._paq = window._paq || []);

    // Also clears legacy tracking cookies on the next page view.
    _paq.push(["disableCookies"]);
    _paq.push(["setDoNotTrack", true]);
    _paq.push(["disableBrowserFeatureDetection"]);
    _paq.push(["setDomains", [this.domain]]);
    _paq.push(["enableLinkTracking"]);
    _paq.push(["trackVisibleContentImpressions"]);
    _paq.push(["setTrackerUrl", `${this.matomoURL}/matomo.php`]);
    _paq.push(["setSiteId", this.siteId]);
    _paq.push(["trackPageView"]);

    const script = document.createElement("script");
    script.async = true;
    script.src = `${this.matomoURL}/matomo.js`;
    script.dataset.hotTracking = "";
    document.head.appendChild(script);
  }
}

export default MatomoTracking;
