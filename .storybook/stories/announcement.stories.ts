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
 * Remote-driven banner: the component fetches a JSON config from `src`
 * and uses it to populate version/title/message/variant. A `startsAt`/
 * `endsAt` window can be included to schedule the banner ahead of time.
 *
 * In this story we serve a config inline via a Blob URL so it works in
 * the static Storybook build, but in production you would point `src`
 * at a static file on your CDN, S3 bucket, GitHub raw, etc.
 */
export const RemoteConfig: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => {
    const config = {
      version: "2026-05-10-maintenance",
      title: "Scheduled maintenance",
      message: "Tasking Manager will be offline Saturday 14:00–16:00 UTC.",
      variant: args.variant ?? "warning",
      startsAt: new Date(Date.now() - 60_000).toISOString(),
      endsAt: new Date(Date.now() + 24 * 60 * 60_000).toISOString(),
    };
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(config)], { type: "application/json" }),
    );

    return html`
      <hot-announcement src="${url}"></hot-announcement>

      <div style="padding: 20px;">
        <h2>Remote-driven announcement</h2>
        <p>
          This banner was populated by fetching a JSON config - no inline
          props, no rebuild required to update or remove the notice. Schema:
        </p>
        <pre style="background: #f6f6f6; padding: 12px; border-radius: 4px; font-size: 12px;">
${JSON.stringify(config, null, 2)}
        </pre>
        <button
          style="padding: 6px 14px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
          @click=${() => resetDismissal(config.version)}
        >
          Reset dismissal for ${config.version}
        </button>
      </div>
    `;
  },
};

/**
 * Same pattern as `RemoteConfig`, but using a real static JSON file
 * (`/announcement.json`) served from Storybook's `staticDirs`. Edit
 * `.storybook/static/announcement.json` to change the banner - no code
 * changes, no rebuild beyond restarting Storybook.
 */
export const RemoteConfigFromStaticFile: Story = {
  render: () => html`
    <hot-announcement src="/announcement.json"></hot-announcement>

    <div style="padding: 20px;">
      <h2>Remote-driven announcement (static file)</h2>
      <p>
        The component fetches
        <code>/announcement.json</code> on connect - try editing
        <code>.storybook/static/announcement.json</code> and reloading to
        see the banner update without touching any component code.
      </p>
      <p>
        To clear the dismissal so the banner reappears, open the file and
        bump the <code>version</code> field, or use the button below.
      </p>
      <button
        style="padding: 6px 14px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        @click=${async () => {
          const res = await fetch("/announcement.json");
          if (!res.ok) return;
          const cfg = await res.json();
          if (cfg.version) resetDismissal(cfg.version);
        }}
      >
        Reset dismissal
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
