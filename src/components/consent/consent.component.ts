// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import("@awesome.me/webawesome/dist/components/callout/callout.js"),
  import("@awesome.me/webawesome/dist/components/icon/icon.js"),
  import("@awesome.me/webawesome/dist/components/button/button.js"),
]);

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from "./consent.styles.js";
import type { CSSResultGroup, PropertyValues } from "lit";

import registerBundledIcons from "../icons.js";

registerBundledIcons();

export type ConsentState = "granted" | "denied" | null;

/** Stores cookie consent and emits choices. Apps manage tracker loading. */
export class Consent extends LitElement {
  static styles: CSSResultGroup = [styles];

  name = "hot-consent";

  /** Key prefix for the stored choice (`<consent-id>-consent-agree`). */
  @property({ type: String, attribute: "consent-id" })
  accessor consentId: string = "";

  /** Opens automatically when the visitor has not chosen yet. */
  @property({ type: Boolean, attribute: "is-open" })
  accessor isOpen: boolean = false;

  @property({ type: String })
  accessor title: string = "About the information we collect";

  /** Fallback text when no content is slotted. */
  @property({ type: String })
  accessor message: string =
    "We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.";

  @property({ type: String, attribute: "agree-label" })
  accessor agreeLabel: string = "I Agree";

  @property({ type: String, attribute: "not-agree-label" })
  accessor notAgreeLabel: string = "I Do Not Agree";

  private unsavedChoices = new Map<string, ConsentState>();

  private get storageKey(): string {
    return `${this.consentId}-consent-agree`;
  }

  /** The stored choice, or null if the visitor has not chosen yet. */
  get consent(): ConsentState {
    if (this.unsavedChoices.has(this.storageKey)) {
      return this.unsavedChoices.get(this.storageKey)!;
    }
    try {
      const value = localStorage.getItem(this.storageKey);
      if (value === "true") return "granted";
      if (value === "false") return "denied";
    } catch {
      // Storage may be blocked by browser policy.
    }
    return null;
  }

  /** Reopens the banner, e.g. from a "Cookie settings" link. */
  show() {
    this.isOpen = true;
  }

  /** Resolves for saved consent or the next Accept click. */
  whenGranted(): Promise<void> {
    if (this.consent === "granted") return Promise.resolve();
    return new Promise((resolve) => {
      this.addEventListener("agree", () => resolve(), { once: true });
    });
  }

  protected render() {
    if (!this.isOpen) return null;
    return html`
      <div class="consent-overlay">
        <div class="consent-container" role="dialog" aria-labelledby="consent-header">
          <wa-callout variant="brand" appearance="outlined filled" size="l" class="consent-callout">
            <wa-icon slot="icon" family="classic" variant="solid" name="shield-check" class="consent-icon"></wa-icon>
            <div class="consent-content">
              <h2 id="consent-header" class="consent-header">
                ${this.title}
              </h2>
              <div class="consent-message">
                <p><slot>${this.message}</slot></p>
                <slot name="additional-info"></slot>
              </div>
              <div class="consent-actions">
                <wa-button
                  size="m"
                  variant="neutral"
                  class="consent-button decline-button"
                  @click=${(e: MouseEvent) => this._setDisagree(e)}
                >
                  ${this.notAgreeLabel}
                </wa-button>
                <wa-button
                  size="m"
                  variant="brand"
                  class="consent-button accept-button"
                  @click=${(e: MouseEvent) => this._setAgree(e)}
                >
                  ${this.agreeLabel}
                </wa-button>
              </div>
            </div>
          </wa-callout>
        </div>
      </div>
    `;
  }

  private _setAgree(_e: MouseEvent) {
    this.isOpen = false;
    this.saveChoice("granted");
    this.dispatchEvent(new Event("agree", { bubbles: true, composed: true }));
  }

  private _setDisagree(_e: MouseEvent) {
    this.isOpen = false;
    this.saveChoice("denied");
    this.dispatchEvent(new Event("disagree", { bubbles: true, composed: true }));
  }

  private saveChoice(choice: Exclude<ConsentState, null>) {
    try {
      localStorage.setItem(this.storageKey, String(choice === "granted"));
      this.unsavedChoices.delete(this.storageKey);
    } catch {
      // Keep the choice for this instance if storage is unavailable.
      this.unsavedChoices.set(this.storageKey, choice);
    }
  }

  protected willUpdate(changed: PropertyValues<this>) {
    if (changed.has("consentId")) this.isOpen = this.consent === null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.isOpen = this.consent === null;
  }
}

export default Consent;
