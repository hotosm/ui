import { css, html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import reset from "../tailwind-reset";
import decorateCva, { hotcva } from "@/utils/cva";

const buttonStyle = hotcva({
  base: "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  variants: {
    intent: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
});

@customElement("hot-button")
export class button extends LitElement {
  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean;
  @decorateCva(buttonStyle.variants) static cva: any;

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
