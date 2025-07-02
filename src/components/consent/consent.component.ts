import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/button/button.js';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from './consent.styles.js';
import type { CSSResultGroup } from 'lit';

import registerBundledIcons from "../icons.js";

registerBundledIcons();

export class Consent extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = "hot-consent";

  /** The site id for consent. */
  @property({ type: String, attribute: "consent-id" })
  accessor consentId: string = "";

  /** Force display the banner. */
  @property({ type: Boolean })
  accessor force: boolean = false;

  @property({ type: Boolean })
  accessor isOpen: boolean = true;

  @property({ type: String })
  accessor title: string = "About the information we collect";

  @property({ type: String })
  accessor message: string = "We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.";

  @property({ type: String, attribute: "agree-label" })
  accessor agreeLabel: string = "I Agree";

  @property({ type: String, attribute: "not-agree-label" })
  accessor notAgreeLabel: string = "I Do Not Agree";

  protected render() {
    if (!this.isOpen) return null;
    return html`
      <div class="consent-overlay">
        <div class="consent-container">
          <wa-callout variant="brand" appearance="outlined filled" size="large" class="consent-callout">
            <wa-icon slot="icon" family="classic" variant="solid" name="shield-check" class="consent-icon"></wa-icon>
            <div class="consent-content">
              <h2 id="consent-header" class="consent-header">
                ${this.title}
              </h2>
              <div class="consent-message">
                <p>${this.message}</p>
                <slot name="additional-info"></slot>
              </div>
              <div class="consent-actions">
                <wa-button 
                  size="medium" 
                  variant="neutral" 
                  class="consent-button decline-button"
                  @click=${(e: MouseEvent) => this._setDisagree(e)}
                >
                  ${this.notAgreeLabel}
                </wa-button>
                <wa-button 
                  size="medium" 
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
    localStorage.setItem(`${this.consentId}-consent-agree`, "true");
    this.dispatchEvent(new Event("agree", { bubbles: true, composed: true }));
  }

  private _setDisagree(_e: MouseEvent) {
    this.isOpen = false;
    localStorage.setItem(`${this.consentId}-consent-agree`, "false");
    this.dispatchEvent(
      new Event("disagree", { bubbles: true, composed: true })
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Close and halt execution if already disagreed
    const consent = localStorage.getItem(`${this.consentId}-consent-agree`);
    if (consent === "false") {
      this.isOpen = false;
      return;
    }

    // Close prompt only if already agreed, continue
    if (consent === "true") {
      this.isOpen = false;
    }
  }
}

export default Consent;

// Define web component
customElements.define("hot-consent", Consent);
