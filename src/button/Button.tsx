import { cn } from "@/utils/merge.js";
import { cva, VariantProps } from "class-variance-authority";
import {html, LitElement} from "lit";
import {property} from "lit/decorators"
import {createComponent} from "@lit/react";
import React from "react";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  /** Disable the button, greyed out, not clickable. */
  disabled?: boolean;
}

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

export class button extends LitElement {
  @property({ type: Boolean }) disabled: boolean;

  constructor() {
    super();
    this.disabled = false;
  }

  protected render() {
    return html`<button
      class="bg-primary text-white py-3 px-6 rounded leading-[1.15]"
      ?disabled=${this.disabled}
    >
      ${this.children}
    </button>`;
  }
}

export const Button = createComponent({
  elementClass: button,
  react: React,
  tagName: "Button",
})
