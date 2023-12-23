import type { Meta, StoryObj } from "@storybook/web-components";
import "./Button";
import { html } from "lit";

const meta: Meta = {
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    children: "Button",
  },
  render: (args) => html`<hot-button>${args.children}</hot-button>`,
};
