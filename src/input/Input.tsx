import { cn } from "@/utils/merge.js";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return <input className={cn("px-4 py-2", className)} {...rest} />;
};
