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
    intent: "primary",
    disabled: false
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    return (html`<hot-button
        ?disabled=${args.disabled}
        onClick="alert('click!')"
      >${args.children}</hot-button>`
    )
  },
};
