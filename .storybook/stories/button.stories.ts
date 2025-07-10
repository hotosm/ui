import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Button",
  component: "hot-button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    appearance: {
      control: { type: "select" },
      options: ["default", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    icon: {
      control: { type: "text" },
    },
    iconPosition: {
      control: { type: "select" },
      options: ["start", "end"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    hotColor: {
      control: { type: "select" },
      options: ["", "red", "yellow", "blue", "cyan", "rose", "gray"],
    },
  },
};
export default meta;

// Basic button story
export const Default: StoryObj = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
  },
  render: (args) => html`
    <hot-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      icon=${args.icon || ""}
      icon-position=${args.iconPosition || "start"}
      type=${args.type || "button"}
      hot-color=${args.hotColor || ""}
    >
      ${args.icon ? "" : "Click me"}
    </hot-button>
  `,
};

// All variants
export const Variants: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <hot-button variant="primary">Primary</hot-button>
      <hot-button variant="secondary">Secondary</hot-button>
      <hot-button variant="outline">Outline</hot-button>
      <hot-button variant="success">Success</hot-button>
      <hot-button variant="warning">Warning</hot-button>
      <hot-button variant="danger">Danger</hot-button>
    </div>
  `,
};

// All sizes
export const Sizes: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <hot-button variant="primary" size="small">Small</hot-button>
      <hot-button variant="primary" size="medium">Medium</hot-button>
      <hot-button variant="primary" size="large">Large</hot-button>
    </div>
  `,
};

// Buttons with icons
export const WithIcons: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <hot-button variant="primary" icon="user" icon-position="start">
        User Profile
      </hot-button>
      <hot-button variant="secondary" icon="settings" icon-position="start">
        Settings
      </hot-button>
      <hot-button variant="outline" icon="download" icon-position="end">
        Download
      </hot-button>
      <hot-button variant="success" icon="check" icon-position="start">
        Save
      </hot-button>
      <hot-button variant="warning" icon="alert-triangle" icon-position="start">
        Warning
      </hot-button>
      <hot-button variant="danger" icon="trash" icon-position="start">
        Delete
      </hot-button>
    </div>
  `,
};

// Icon buttons
export const IconButtons: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <hot-button appearance="icon" variant="primary">
        <wa-icon name="user" slot="icon"></wa-icon>
      </hot-button>
      <hot-button appearance="icon" variant="secondary">
        <wa-icon name="settings" slot="icon"></wa-icon>
      </hot-button>
      <hot-button appearance="icon" variant="outline">
        <wa-icon name="download" slot="icon"></wa-icon>
      </hot-button>
      <hot-button appearance="icon" variant="success">
        <wa-icon name="check" slot="icon"></wa-icon>
      </hot-button>
      <hot-button appearance="icon" variant="warning">
        <wa-icon name="alert-triangle" slot="icon"></wa-icon>
      </hot-button>
      <hot-button appearance="icon" variant="danger">
        <wa-icon name="trash" slot="icon"></wa-icon>
      </hot-button>
    </div>
  `,
};

// Button states
export const States: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <hot-button variant="primary">Normal</hot-button>
      <hot-button variant="primary" disabled>Disabled</hot-button>
      <hot-button variant="primary" loading>Loading</hot-button>
    </div>
  `,
};


// HOT Color variants
export const HotColors: StoryObj = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <hot-button hot-color="red">
        <wa-icon name="heart" slot="icon"></wa-icon>
        HOT Red
      </hot-button>
      <hot-button hot-color="yellow">
        <wa-icon name="star" slot="icon"></wa-icon>
        HOT Yellow
      </hot-button>
      <hot-button hot-color="blue">
        <wa-icon name="map" slot="icon"></wa-icon>
        HOT Blue
      </hot-button>
      <hot-button hot-color="cyan">
        <wa-icon name="droplet" slot="icon"></wa-icon>
        HOT Cyan
      </hot-button>
      <hot-button hot-color="rose">
        <wa-icon name="flower" slot="icon"></wa-icon>
        HOT Rose
      </hot-button>
      <hot-button hot-color="gray">
        <wa-icon name="settings" slot="icon"></wa-icon>
        HOT Gray
      </hot-button>
    </div>
  `,
};

// Interactive example
export const Interactive: StoryObj = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "heart",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <hot-button
        variant=${args.variant}
        size=${args.size}
        icon=${args.icon}
        @click=${() => alert("Button clicked!")}
      >
        Interactive Button
      </hot-button>
      <p>Click the button above to see the interaction.</p>
    </div>
  `,
}; 