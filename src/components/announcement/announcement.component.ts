// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import("@awesome.me/webawesome/dist/components/callout/callout.js"),
  import("@awesome.me/webawesome/dist/components/icon/icon.js"),
  import("@awesome.me/webawesome/dist/components/button/button.js"),
]);

import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import type { PropertyValues } from "lit";

const VARIANTS = ["brand", "success", "neutral", "warning"] as const;
type AnnouncementVariant = (typeof VARIANTS)[number];

interface RemoteConfig {
  version?: string;
  title?: string;
  message?: string;
  variant?: AnnouncementVariant;
  startsAt?: string;
  endsAt?: string;
}

function parseDate(value: string | undefined): Date | null {
  if (typeof value !== "string" || value.length === 0) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

export class Announcement extends LitElement {
  name = "hot-announcement";

  /** Release identifier used to key dismissal state. Required. */
  @property({ type: String })
  accessor version: string = "";

  /** Optional bold headline shown before the body content. */
  @property({ type: String })
  accessor title: string = "";

  /** Plain-text body shown when no slotted content is provided. */
  @property({ type: String })
  accessor message: string = "";

  /** Visual variant mapped onto wa-callout. */
  @property({ type: String })
  accessor variant: AnnouncementVariant = "brand";

  /** Aria-label for the dismiss button. */
  @property({ type: String, attribute: "dismiss-label" })
  accessor dismissLabel: string = "Dismiss";

  /**
   * Prefix for the localStorage key. The full key is
   * `${storageKey}-${version}-dismissed`. Override to run multiple
   * independent banners on the same origin.
   */
  @property({ type: String, attribute: "storage-key" })
  accessor storageKey: string = "hot-announcement";

  /**
   * Optional URL to a JSON config file. When set, the component fetches
   * the config and uses it to drive the banner - letting ops update or
   * remove notices without redeploying. Any fetch/parse failure or empty
   * body silently hides the banner. Schema:
   *   { version, title?, message?, variant?, startsAt?, endsAt? }
   */
  @property({ type: String })
  accessor src: string = "";

  @state()
  private visible: boolean = false;

  @state()
  private startsAt: Date | null = null;

  @state()
  private endsAt: Date | null = null;

  private fetchAbort: AbortController | null = null;

  static styles = css`
    :host {
      display: block;
      font-family: var(--hot-font-sans);
    }

    .announcement-banner {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    wa-callout {
      border-radius: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    }

    .announcement-content {
      display: flex;
      align-items: center;
      gap: var(--hot-spacing-small);
      width: 100%;
    }

    .announcement-body {
      padding: 0 var(--hot-spacing-x-small);
      flex: 1;
      min-width: 0;
    }

    .announcement-body strong {
      display: block;
      margin-bottom: var(--hot-spacing-3x-small);
      font-weight: var(--hot-font-weight-semibold);
    }

    .announcement-body ::slotted(a),
    .announcement-body a {
      color: var(--hot-color-primary-600);
      text-decoration: underline;
    }

    .announcement-dismiss {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      padding: 0;
      border: none;
      border-radius: var(--hot-border-radius-medium);
      background: transparent;
      color: inherit;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1;
    }

    .announcement-dismiss:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    .announcement-dismiss:focus-visible {
      outline: 2px solid var(--hot-color-primary-500);
      outline-offset: 2px;
    }
  `;

  private storageFullKey(): string {
    return `${this.storageKey}-${this.version}-dismissed`;
  }

  /** Dismiss the banner and persist the choice for this version. */
  dismiss() {
    if (this.version.length > 0) {
      localStorage.setItem(this.storageFullKey(), "true");
    }
    this.visible = false;
    this.dispatchEvent(
      new CustomEvent("dismiss", {
        detail: { version: this.version },
        bubbles: true,
        composed: true,
      }),
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._evaluateVisibility();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.fetchAbort?.abort();
    this.fetchAbort = null;
  }

  // Run before render so visibility flips in the same update cycle as the
  // property change - otherwise a host bumping `version` would need two ticks
  // before the banner reappears.
  protected willUpdate(changedProps: PropertyValues) {
    if (changedProps.has("src") && this.src.length > 0) {
      this._loadRemoteConfig();
      return;
    }
    if (changedProps.has("version") || changedProps.has("storageKey")) {
      this._evaluateVisibility();
    }
  }

  private async _loadRemoteConfig() {
    this.fetchAbort?.abort();
    const controller = new AbortController();
    this.fetchAbort = controller;

    // Hide while we wait so a stale banner does not flash before the fetch
    // resolves.
    this.visible = false;

    try {
      const res = await fetch(this.src, { signal: controller.signal });
      if (!res.ok) return;

      const text = await res.text();
      if (text.trim().length === 0) return;

      const cfg = JSON.parse(text) as RemoteConfig;
      this._applyRemoteConfig(cfg);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      // Any other failure (network, JSON parse) silently leaves the banner
      // hidden - the component must never break the host page on a bad
      // config.
    } finally {
      if (this.fetchAbort === controller) this.fetchAbort = null;
    }
  }

  private _applyRemoteConfig(cfg: RemoteConfig) {
    if (typeof cfg.version === "string") this.version = cfg.version;
    if (typeof cfg.title === "string") this.title = cfg.title;
    if (typeof cfg.message === "string") this.message = cfg.message;
    if (typeof cfg.variant === "string" && (VARIANTS as readonly string[]).includes(cfg.variant)) {
      this.variant = cfg.variant;
    }
    this.startsAt = parseDate(cfg.startsAt);
    this.endsAt = parseDate(cfg.endsAt);
    this._evaluateVisibility();
  }

  private _evaluateVisibility() {
    if (this.version.length === 0) {
      // When src is set, an empty version means the remote config didn't
      // include one (or hasn't loaded yet) - that's a normal "no announcement"
      // state, not a misconfiguration, so don't warn.
      if (this.src.length === 0) {
        console.warn(
          "[hot-announcement] `version` is required so dismissal can be keyed per release. Banner hidden.",
        );
      }
      this.visible = false;
      return;
    }

    const now = Date.now();
    if (this.startsAt && now < this.startsAt.getTime()) {
      this.visible = false;
      return;
    }
    if (this.endsAt && now > this.endsAt.getTime()) {
      this.visible = false;
      return;
    }

    const dismissed = localStorage.getItem(this.storageFullKey()) === "true";
    this.visible = !dismissed;
  }

  protected render() {
    if (!this.visible) return null;

    return html`
      <div class="announcement-banner" role="status">
        <wa-callout variant="${this.variant}" appearance="outlined filled" size="medium">
          <wa-icon slot="icon" family="classic" variant="solid" name="circle-info"></wa-icon>
          <div class="announcement-content">
            <div class="announcement-body">
              ${this.title.length > 0 ? html`<strong>${this.title}</strong>` : null}
              <slot>${this.message}</slot>
            </div>
            <button
              type="button"
              class="announcement-dismiss"
              aria-label="${this.dismissLabel}"
              @click=${() => this.dismiss()}
            >
              <wa-icon name="xmark"></wa-icon>
            </button>
          </div>
        </wa-callout>
      </div>
    `;
  }
}

export default Announcement;
