import { cva, VariantProps } from "class-variance-authority";
import {css, html, LitElement, unsafeCSS} from "lit";
import {property, customElement} from "lit/decorators.js"
import React from "react";
import reset from "../tailwind-reset"
import decorateCva, {hotcva} from "@/utils/cva";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  /** Disable the button, greyed out, not clickable. */
  disabled?: boolean;
}

type buttonType = typeof buttonStyle;
type buttonTypeConfigProps = Parameters<buttonType>[0];

// how to convert buttonStyle type to an object containing all the variants?

// get the config from buttStyle with js, not ts
const buttonStyleConfig: buttonTypeConfigProps = buttonStyle

const foostyle = hotcva({
  base: "",
  variants: {
    intent: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  }
})

const foo = foostyle.string({
  disabled: true,
  intent: "primary"
})

const variants = foostyle.cvaParams.variants

const buttonStyle = cva(
  "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  {
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
  },
);

buttonStyle({

})
//
// /**
//  * Button component.
//  */
// export const Button = (props: ButtonProps) => {
//   const { className, intent, ...rest } = props;
//
//   return (
//     <button
//       className={cn(
//         buttonStyle({
//           disabled: props.disabled,
//           intent: intent,
//           className: className,
//         }),
//         className,
//       )}
//       {...rest}
//     >
//       {props.children}
//     </button>
//   );
// };

buttonStyle({

})

@customElement("hot-button")
export class button extends LitElement {
  /** Disable the button, greyed out, not clickable. */
  @property({ type: Boolean }) disabled: boolean;
  @decorateCva(buttonStyle) static cva: any;


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
