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
    let buttonRendered = false;
    const handleClick = () => {
      // Function required as the click event is triggered once on render
      if (buttonRendered) {
        alert("Button Clicked");
        return;
      }
      buttonRendered = true;
    };

    return html`
      <hot-button
        intent=${args.intent}
        ?disabled=${args.disabled}
        @click=${handleClick}
      >
        Button
      </hot-button>
    `;
  },
};
