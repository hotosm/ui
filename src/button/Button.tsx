import { cn } from "@/utils/merge.js";
import {cva, VariantProps} from "class-variance-authority";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyle> {
  disabled?: boolean;
}

const buttonStyle = cva("bg-primary text-white py-3 px-6 rounded leading-[1.15]", {
  variants: {
    intent: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    }
  }
})

export const Button = (props: ButtonProps) => {
  const { className, intent, ...rest } = props;

  return (
    <button
      className={cn(buttonStyle({
        disabled: props.disabled,
        intent: intent,
        className: className,
      }),
        className,
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
};
