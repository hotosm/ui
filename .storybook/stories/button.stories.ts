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
  parameters: {
    showToast: () => {
      const alert = document.getElementById("click-toast");
      if (alert) {
        alert.show();
      }
    },
  },
  render: (args, { parameters }) => {
    return html`
      <h1>Button</h1>
      <hot-button
        variant="${args.variant}"
        @click=${() => {parameters.showToast()}}
        ?disabled=${args.disabled}
      >${args.text}</hot-button>

      <br>
      <br>
      <sl-alert id="click-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked the button.
      </sl-alert>
    `;
  },
};
