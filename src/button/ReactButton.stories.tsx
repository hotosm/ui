import type { Meta, StoryObj } from "@storybook/react";
import ReactButton from './ReactButton';

const meta: Meta = {
  component: ReactButton,
};
export default meta;

export const Template: StoryObj = {
  args: {
    children: "Button",
    intent: "primary",
    disabled: false,
    onClick: () => { alert("click!") }
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
  },
};
