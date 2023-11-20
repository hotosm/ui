import { Card, CardProps } from "./Card.js";
import { Story } from "@ladle/react";

export const CardStory: Story<
  CardProps & {
    title: string;
    body: string;
    footer: string;
  }
> = (props) => (
  <Card>
    <Card.CardTitle>{props.title}</Card.CardTitle>
    <Card.CardBody>{props.body}</Card.CardBody>
    <Card.CardFooter>{props.footer}</Card.CardFooter>
  </Card>
);

CardStory.argTypes = {
  title: {
    control: {
      type: "text",
    },
    defaultValue: "Card Title",
  },
  body: {
    control: {
      type: "text",
    },
    defaultValue:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,\n" +
      "voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing\n" +
      "elit. Quisquam, voluptatum.",
  },
  footer: {
    control: {
      type: "text",
    },
    defaultValue: "Card Footer",
  },
};
