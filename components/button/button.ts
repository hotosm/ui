import "../../theme/sl-custom.css";

import '@shoelace-style/shoelace/dist/components/button/button.js';

import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import { cva } from "class-variance-authority";

const buttonStyle = cva(
  "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  {
    variants: {
      classGroup: {
        classGroup1: "bg-primary border-2 border-primary text-white",
        classGroup2: `
          bg-white border-2 border-primary text-primary! hover:bg-lightGray
          focus:bg-transparent focus:border-primary
        `,
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
  },
);
type variants = "classGroup1" | "classGroup2";

export class Button extends LitElement {
  @property() name = "hot-button";

  // Type of button. */
  @property({ type: String }) variant: string = "default";

  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean = false;

  /** CVA button class group. */
  @property({ type: String, attribute: 'class-group' }) classGroup: variants = "classGroup1";

  static styles = [
    css`
      @unocss-placeholder;
    `,
  ];

  protected render() {
    return html`<sl-button
      class=${buttonStyle({
        classGroup: this.classGroup,
      })}
      variant=${this.variant}
      ?disabled=${this.disabled}
      @click=${(e: MouseEvent) => {
        this._handleClick(e);
      }}
    >
      <slot></slot>
    </sl-button>`;
  }

  private _handleClick(e: MouseEvent) {
    // As the original event is also named 'click'
    // stop propagation of the original event
    e.stopPropagation();
    this.dispatchEvent(new Event("click"));
  }
}

export default Button;

// Define web component
customElements.define("hot-button", Button);
