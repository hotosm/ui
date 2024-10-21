// Uses the default exported Shoelace button component

import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Shoelace"
};
export default meta;

type Story = StoryObj;

export const Example: Story = {
  render: (args) => {
    return html`
<hot-button variant="default">Default</hot-button>
<hot-button variant="primary">Primary</hot-button>
<hot-button variant="warning">Warning</hot-button>
<hot-button variant="danger">Danger</hot-button>
<hot-button variant="success">Success</hot-button>
    `;
  },
};
