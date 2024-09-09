// Uses the default exported Shoelace button component

import type { Meta, StoryObj } from "@storybook/web-components";
import "../../components/index";
import { html } from "lit";

const meta: Meta = {
  title: "Button",
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    text: "Click Me",
    variant: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["default", "primary", "success", "neutral", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
  render: (args, { parameters }) => {
    return html`
      <hot-button
        variant="${args.variant}"
        @click=${() => {console.log("click!")}}
        ?disabled=${args.disabled}
      >${args.text}</hot-button>
    `;
  },
};
