import { cn } from "@/utils/merge.js";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <button
      className={cn(
        `bg-primary text-white py-3 px-6 rounded leading-[1.15] ${
          props.disabled ? "opacity-50 cursor-not-allowed" : ""
        }`,
        className,
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
};
