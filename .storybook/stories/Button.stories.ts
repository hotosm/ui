import type { Meta, StoryObj } from "@storybook/web-components";
import "../../components/Button.js";
import { html } from "lit";

const meta: Meta = {
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    text: "Click Me",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
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
      console.log(alert)
      if (alert) {
        alert.show();
      }
    },
  },
  render: (args, { parameters }) => {
    return html`
      <h1>Button</h1>
      <br>
      <br>
      <hot-button
        variant="${args.variant}"
        @click=${() => {parameters.showToast()}}
        ?disabled=${args.disabled}
      >${args.text}</hot-button>

      <sl-alert id="click-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked the button.
      </sl-alert>
    `;
  },
};
