import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Toolbar",
  component: "hot-toolbar",
};
export default meta;

export const Toolbar: StoryObj = {
  args: {
    tooltipPosition: "top",
  },
  argTypes: {
    tooltipPosition: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    return html`
      <hot-toolbar
        tooltip-position="${args.tooltipPosition}"
        @redo=${() => {alert("Redo Clicked")}}
      ></hot-toolbar>
    `;
  },
};
