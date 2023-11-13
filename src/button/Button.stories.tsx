import { Button, ButtonProps } from "./Button.js";
import { Story } from "@ladle/react";

export const ButtonStory: Story<ButtonProps> = (props) => <Button {...props} />;
ButtonStory.argTypes = {
  children: {
    control: {
      type: "text",
    },
    defaultValue: "Button",
  },
};
