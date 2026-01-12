import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Button",
  component: "hot-button",
};
export default meta;

export const Button: StoryObj = {
  args: {},
  argTypes: {},
  parameters: {},
  render: (args, { parameters }) => {
    return html`
      <div class="wa-stack">
        <div class="wa-gap-xs">
            <wa-button appearance="accent" variant="neutral">Accent</wa-button>
            <wa-button appearance="filled-outlined" variant="neutral">Filled-Outlined</wa-button>
            <wa-button appearance="filled" variant="neutral">Filled</wa-button>
            <wa-button appearance="outlined" variant="neutral">Outlined</wa-button>
            <wa-button appearance="plain" variant="neutral">Plain</wa-button>
        </div>
        <div class="wa-gap-xs">
            <wa-button appearance="accent" variant="brand">Accent</wa-button>
            <wa-button appearance="filled-outlined" variant="brand">Filled-Outlined </wa-button>
            <wa-button appearance="filled" variant="brand">Filled</wa-button>
            <wa-button appearance="outlined" variant="brand">Outlined</wa-button>
            <wa-button appearance="plain" variant="brand">Plain</wa-button>
        </div>
        <div class="wa-gap-xs">
            <wa-button appearance="accent" variant="success">Accent</wa-button>
            <wa-button appearance="filled-outlined" variant="success">Filled-Outlined</wa-button>
            <wa-button appearance="filled" variant="success">Filled</wa-button>
            <wa-button appearance="outlined" variant="success">Outlined</wa-button>
            <wa-button appearance="plain" variant="success">Plain</wa-button>
        </div>
        <div class="wa-gap-xs">
            <wa-button appearance="accent" variant="warning">Accent</wa-button>
            <wa-button appearance="filled-outlined" variant="warning">Filled-Outlined</wa-button>
            <wa-button appearance="filled" variant="warning">Filled</wa-button>
            <wa-button appearance="outlined" variant="warning">Outlined</wa-button>
            <wa-button appearance="plain" variant="warning">Plain</wa-button>
        </div>
        <div class="wa-gap-xs">
            <wa-button appearance="accent" variant="danger">Accent</wa-button>
            <wa-button appearance="filled-outlined" variant="danger">Filled-Outlined</wa-button>
            <wa-button appearance="filled" variant="danger">Filled</wa-button>
            <wa-button appearance="outlined" variant="danger">Outlined</wa-button>
            <wa-button appearance="plain" variant="danger">Plain</wa-button>
        </div>
      </div>
    `;
  },
};
