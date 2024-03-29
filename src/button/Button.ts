import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import reset from "../tailwind-reset";
import { cva } from "class-variance-authority";

const buttonStyle = cva(
  "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  {
    variants: {
      intent: {
        primary: "bg-primary border-2 border-primary text-white",
        secondary: `
          bg-white border-2 border-primary text-primary! hover:bg-lightGray 
          focus:bg-transparent focus:border-primary
        `
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
  },
);

@customElement("hot-button")
export class button extends LitElement {
  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean;

  @property({ type: String }) intent: "primary" | "secondary";

  constructor() {
    super();
    this.disabled = false;
    this.intent = "primary";
  }

  static styles = [
    css`
      @unocss-placeholder;
    `,
    unsafeCSS(reset),
  ];

  protected render() {
    return html`<button
      class=${buttonStyle({
        intent: this.intent,
        disabled: this.disabled,
      })}
      ?disabled=${this.disabled}
      @click=${(e: MouseEvent) => {this._handleClick(e)}}
    >
      <slot></slot>
    </button>`;
  }

  private _handleClick(e: MouseEvent) {
    // As the original event is also named 'click'
    // stop propagation of the original event
    e.stopPropagation();
    this.dispatchEvent(new Event("click"));
  }
}
