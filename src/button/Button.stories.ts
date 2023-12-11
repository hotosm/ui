import type { Meta, StoryObj } from "@storybook/web-components";
import "./Button";

const meta: Meta = {
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    children: "Button",
  },
  render: (args) => `<hot-button>${args.children}</hot-button>`,
};
