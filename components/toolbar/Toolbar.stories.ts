import type { Meta, StoryObj } from "@storybook/web-components";
import "./Toolbar";
import { html } from "lit";

const meta: Meta = {
  component: "hot-toolbar",
};
export default meta;

export const Template: StoryObj = {
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
        @hot-redo-click=${() => {alert("Redo Clicked")}}
      ></hot-toolbar>
    `;
  },
};