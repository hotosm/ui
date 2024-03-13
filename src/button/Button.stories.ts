import type { Meta, StoryObj } from "@storybook/web-components";
import "./Button";
import { html } from "lit";

const meta: Meta = {
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    intent: "primary",
    disabled: false,
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
    return html`
      <hot-button
        intent=${args.intent}
        ?disabled=${args.disabled}
        @click=${() => {alert("Button Clicked")}}
      >
        Button
      </hot-button>
    `;
  },
};
