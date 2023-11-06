import { cn } from "@/utils/merge.js";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => {
  const {className, ...rest} = props;

  return (
    <div
      className={cn("bg-white rounded shadow-md p-6 flex flex-col", className)}
      {...rest}
    >
      {props.children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const CardTitle = (props: CardTitleProps) => {
  const {className, ...rest} = props;

  return (
    <h2
      className={cn("text-2xl font-bold", className)}
      {...rest}
    >
      {props.children}
    </h2>
  )
}

Card.CardTitle = CardTitle;

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
const CardBody = (props: CardBodyProps) => {
  const {className, ...rest} = props;

  return (
    <div
      className={cn("mt-4 grow", className)}
      {...rest}
    >
      {props.children}
    </div>
  )
}

Card.CardBody = CardBody;

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
const CardFooter = (props: CardFooterProps) => {
  const {className, ...rest} = props;

  return (
    <div
      className={cn("mt-4", className)}
      {...rest}
    >
      {props.children}
    </div>
  )
}

Card.CardFooter = CardFooter;
