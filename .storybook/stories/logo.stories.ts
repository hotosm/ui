// The HOT logo

import type { Meta, StoryObj } from "@storybook/web-components";
import "../../components/index";
import { html } from "lit";

const meta: Meta = {
  title: "Logo",
  component: "hot-logo",
};
export default meta;

export const Template: StoryObj = {
  render: (args, { parameters }) => {
    return html`
      <hot-logo></hot-logo>
    `;
  },
};
