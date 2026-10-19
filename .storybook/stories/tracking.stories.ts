import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Tracking",
  component: "hot-tracking",
};
export default meta;

/**
 * Registers cookieless Matomo tracking with no UI.
 * Use `<hot-consent>` separately for trackers that require consent.
 */
export const Tracking: StoryObj = {
  args: {
    siteId: "1",
    domain: "localhost",
  },
  argTypes: {
    siteId: {
      options: ["", "1", "2"],
      control: {
        type: "select",
      },
    },
    domain: {
      options: ["localhost", "anotherdomain"],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => html`
    <p>This component has no UI. Check the browser console and <code>window._paq</code>.</p>
    <hot-tracking site-id=${args.siteId} domain=${args.domain}></hot-tracking>
  `,
};
