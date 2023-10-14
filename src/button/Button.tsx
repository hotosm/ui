import React from "react";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode
}

export const Button = (props: ButtonProps) => (
  <button
    className={"bg-primary text-white py-3 px-6 rounded leading-[1.15] px-1/3"}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)
