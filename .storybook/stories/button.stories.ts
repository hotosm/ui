// Uses the default exported Shoelace button component

import type { Meta, StoryObj } from "@storybook/web-components";
import "../../components/index";
import { html } from "lit";

import registerBundledIcons from "../../components/icons";

registerBundledIcons();

const meta: Meta = {
  title: "Button",
  component: "hot-button",
};
export default meta;

export const Template: StoryObj = {
  args: {
    text: "Click Me",
    variant: "default",
    disabled: false,
    style: "",
    href: "",
  },
  argTypes: {
    variant: {
      options: ["default", "primary", "success", "neutral", "warning", "danger", "text"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    outline: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    pill: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    prefix: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    suffix: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    icon: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    circle: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    caret: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    loading: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
  render: (args, { parameters }) => {
    return html`
      <hot-button
        variant="${args.variant}"
        ?outline="${args.outline}"
        size="${args.size}"
        ?pill="${args.pill}"
        ?circle="${args.circle}"
        @click=${() => {console.log("click!")}}
        ?disabled=${args.disabled}
        style=${args.style}
        ?prefix=${args.prefix}
        ?caret=${args.caret}
        ?loading=${args.loading}
        href="${args.href}"
        target="_blank"
      >
        ${args.prefix ? html`<sl-icon slot="prefix" library="bundled" name="person-circle"></sl-icon>` : ""}
        ${args.suffix ? html`<sl-icon slot="prefix" library="bundled" name="list"></sl-icon>` : ""}
        ${args.icon ? html`<sl-icon library="bundled" name="person-circle"></sl-icon>` : args.text}
      </hot-button>
    `;
  },
};
