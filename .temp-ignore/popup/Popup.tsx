import { Card } from "@/card/Card.js";

export interface PopupProps {
  /** Nest child elements. */
  children?: React.ReactNode;
  /** Title in the card header. */
  title?: string;
  /** Actions available in footer (buttons etc). */
  actions?: React.ReactNode;
  /** Position of popup, attached to side of viewport. */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const positionToClassName = (position: PopupProps["position"]) => {
  switch (position) {
    case "top-left":
      return "absolute top-0 left-0";
    case "top-right":
      return "absolute top-0 right-0";
    case "bottom-left":
      return "absolute bottom-0 left-0";
    case "bottom-right":
      return "absolute bottom-0 right-0";
    default:
      return "absolute top-0 left-0";
  }
};

/**
 * Popup component, attached to side of the viewport.
 */
export const Popup = (props: PopupProps) => {
  const positionClassName = positionToClassName(props.position);

  return (
    <Card className={`w-max ${positionClassName}`}>
      <Card.CardTitle>{props.title}</Card.CardTitle>
      <Card.CardBody>{props.children}</Card.CardBody>
      <Card.CardFooter>{props.actions}</Card.CardFooter>
    </Card>
  );
};
