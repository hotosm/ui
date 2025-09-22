// The HOT logo

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Dropzone",
  component: "hot-dropzone",
};
export default meta;

export const Dropzone: StoryObj = {
  render: (args, { parameters }) => {
    return html`
      <hot-dropzone></hot-dropzone>
    `;
  },
};
