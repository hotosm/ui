import { css, html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import reset from "../tailwind-reset";

/**
 * A button web component.
 */
@customElement("hot-button")
export class button extends LitElement {
  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean;

  constructor() {
    super();
    this.disabled = false;
  }

  static styles = [
    css`
      @unocss-placeholder;
    `,
    unsafeCSS(reset),
  ];

  protected render() {
    return html`<button
      class="bg-primary text-white py-3 px-6 rounded leading-[1.15]"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
