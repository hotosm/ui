import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Logo",
  component: "hot-logo",
  argTypes: {
    iconOnly: { control: "boolean" },
    textOnly: { control: "boolean" },
  },
};
export default meta;

export const Full: StoryObj = {
  args: {
    iconOnly: false,
    textOnly: false,
  },
  render: () =>
    html`
      <hot-logo></hot-logo>
    `,
};

export const IconOnly: StoryObj = {
  render: () =>
    html`
      <hot-logo icon-only></hot-logo>
    `,
};

export const TextOnly: StoryObj = {
  render: () =>
    html`
      <hot-logo text-only></hot-logo>
    `,
};

export const OnDark: StoryObj = {
  render: () => html`
    <div
      style="
        background: var(--hot-color-neutral-950);
        padding: var(--hot-spacing-medium);
        display: inline-block;
        border-radius: var(--hot-border-radius-large);
      "
    >
      <hot-logo></hot-logo>
    </div>
  `,
};
