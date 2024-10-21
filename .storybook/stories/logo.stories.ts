// The HOT logo

import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Logo",
  component: "hot-logo",
};
export default meta;

export const Logo: StoryObj = {
  render: (args, { parameters }) => {
    return html`
      <hot-logo></hot-logo>
    `;
  },
};
