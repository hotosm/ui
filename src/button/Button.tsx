import { cn } from "@/utils/merge.js";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <button
      className={cn(
        "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
        className,
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
};
