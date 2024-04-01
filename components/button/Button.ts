import { css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import reset from "../tailwind-reset";
import { cva } from "class-variance-authority";
import HotElement from "../hot-element";
import type { HotElementProps } from "../hot-element";

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

export default class button extends HotElement implements HotElementProps {
  @property() name = 'hot-button';

  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean = false;

  /** CVA button type. */
  @property({ type: String }) intent: "primary" | "secondary" = "primary";

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
