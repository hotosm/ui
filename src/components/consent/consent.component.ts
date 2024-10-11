import "@shoelace-style/shoelace/dist/components/alert/alert.js";

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
  @property({ type: String, attribute: "site-id" })
  accessor siteId: string = "";

  /** Force display the banner. */
  @property({ type: Boolean })
  accessor force: boolean = false;

  @property({ type: Boolean })
  accessor isOpen: boolean = true;

  @property({ type: String })
  accessor title: string = "About the information we collect";

  @property({ type: String })
  accessor message = html`<p>We use cookies and similar technologies to \
  recognize and analyze your visits, and measure traffic usage and activity.</p>`

  @property({ type: String, attribute: "agree-label" })
  accessor agreeLabel: string = "I Agree";

  @property({ type: String, attribute: "not-agree-label" })
  accessor notAgreeLabel: string = "I Do Dot Agree";

  protected render() {
    return html`<sl-alert class="consent" variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <h2 id="consent-header" class="consent--header">
        ${this.title}
      </h2>

      <p class="consent--message">
        <slot part="label"></slot>
      </p>

      <sl-button
        @click=${(e: MouseEvent) => {
          this._setAgree(e);
        }}
        >${this.agreeLabel}</sl-button
      >
      <sl-button
        @click=${(e: MouseEvent) => {
          this._setDisagree(e);
        }}
        >${this.notAgreeLabel}</sl-button
      >
    </sl-alert>`;
  }

  private _setAgree(_e: MouseEvent) {
    this.isOpen = false;
    localStorage.setItem(`${this.siteId}-consent-agree`, "true");
    this.dispatchEvent(new Event("agree", { bubbles: true, composed: true }));
  }

  private _setDisagree(_e: MouseEvent) {
    this.isOpen = false;
    localStorage.setItem(`${this.siteId}-consent-agree`, "false");
    this.dispatchEvent(
      new Event("disagree", { bubbles: true, composed: true })
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Close and halt execution if already disagreed
    const consent = localStorage.getItem(`${this.siteId}-consent-agree`);
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
