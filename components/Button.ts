import "../theme/hot.css";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/button/button.js';

import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import { cva } from "class-variance-authority";

const buttonStyle = cva(
  "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  {
    variants: {
      variant: {
        primary: "bg-primary border-2 border-primary text-white",
        secondary: `
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

export class Button extends LitElement {
  @property() name = "hot-button";

  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean = false;

  /** CVA button type. */
  @property({ type: String }) variant: "primary" | "secondary" = "primary";

  static styles = [
    css`
      @unocss-placeholder;
    `,
  ];

  protected render() {
    return html`<sl-button
      class=${buttonStyle({
        variant: this.variant,
        disabled: this.disabled,
      })}
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
