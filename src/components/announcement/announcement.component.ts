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

type AnnouncementVariant = "brand" | "success" | "neutral" | "warning";

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

  @state()
  private visible: boolean = false;

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

  // Run before render so visibility flips in the same update cycle as the
  // property change - otherwise a host bumping `version` would need two ticks
  // before the banner reappears.
  protected willUpdate(changedProps: PropertyValues) {
    if (changedProps.has("version") || changedProps.has("storageKey")) {
      this._evaluateVisibility();
    }
  }

  private _evaluateVisibility() {
    if (this.version.length === 0) {
      console.warn(
        "[hot-announcement] `version` is required so dismissal can be keyed per release. Banner hidden.",
      );
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
