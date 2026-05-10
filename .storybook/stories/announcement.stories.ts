import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Announcement",
  component: "hot-announcement",
  argTypes: {
    version: { control: "text" },
    title: { control: "text" },
    message: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["brand", "success", "neutral", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj;

const STORAGE_PREFIX = "hot-announcement";

function resetDismissal(version: string) {
  localStorage.removeItem(`${STORAGE_PREFIX}-${version}-dismissed`);
  // Force the story to re-render so the banner reappears
  const el = document.querySelector("hot-announcement");
  if (el) (el as any).version = version;
}

/**
 * Default release-notes banner. Click X to dismiss; the choice is keyed
 * to the version, so refreshing the iframe will not bring it back unless
 * the version changes (or you click "Reset dismissal").
 */
export const Default: Story = {
  args: {
    version: "v0.1.0",
    title: "What's new in v0.1.0",
    message: "",
    variant: "brand",
  },
  render: (args) => html`
    <hot-announcement
      version="${args.version}"
      title="${args.title}"
      message="${args.message}"
      variant="${args.variant}"
    >
      Drone TM ${args.version} is here. See the
      <a href="https://github.com/hotosm/drone-tm/releases" target="_blank" rel="noopener noreferrer">
        full changelog
      </a>
      or read the
      <a href="https://docs.hotosm.org" target="_blank" rel="noopener noreferrer">
        latest docs
      </a>.
    </hot-announcement>

    <div style="padding: 20px;">
      <h2>Announcement banner</h2>
      <p>
        Dismissable, version-keyed release-notes banner. The banner stores its
        dismissal in <code>localStorage</code> under
        <code>${STORAGE_PREFIX}-\${version}-dismissed</code>; bumping the
        <code>version</code> arg above shows it again.
      </p>
      <button
        style="padding: 6px 14px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        @click=${() => resetDismissal(args.version)}
      >
        Reset dismissal for ${args.version}
      </button>
    </div>
  `,
};

/**
 * Plain-text variant using the `message` prop instead of slotted HTML.
 */
export const PlainMessage: Story = {
  args: {
    version: "v0.2.0",
    title: "Maintenance window",
    message: "We will be performing scheduled maintenance on Saturday 02:00 UTC.",
    variant: "warning",
  },
  render: (args) => html`
    <hot-announcement
      version="${args.version}"
      title="${args.title}"
      message="${args.message}"
      variant="${args.variant}"
    ></hot-announcement>

    <div style="padding: 20px;">
      <button
        style="padding: 6px 14px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        @click=${() => resetDismissal(args.version)}
      >
        Reset dismissal for ${args.version}
      </button>
    </div>
  `,
};
