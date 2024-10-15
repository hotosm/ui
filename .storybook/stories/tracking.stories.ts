import type { Meta, StoryObj } from "@storybook/web-components";
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Tracking",
  component: "hot-tracking",
};
export default meta;

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
  parameters: {
    agree: (siteId, domain) => {
      const tracking = document.getElementById("hot-tracking");
      if (tracking) {
        tracking.agree(
          siteId,
          domain
        );  
      }
      const agreeAlert = document.getElementById("agree-alert");
      if (agreeAlert) {
        agreeAlert.toast();
      }
    },
    disagree: () => {
      const disagreeAlert = document.getElementById("disagree-alert");
      if (disagreeAlert) {
        disagreeAlert.toast();
      }
    },
    addKeyLocalStorage: (siteId: number) => {
      localStorage.setItem(`${siteId}-consent-agree`, 'true');
    },
    removeKeyLocalStorage: (siteId: number) => {
      localStorage.removeItem(`${siteId}-consent-agree`);
    },
  },
  render: (args, { parameters }) => {
    return html`
      <sl-button @click=${() => {
        parameters.removeKeyLocalStorage(args.siteId)
      }}>Re-Enable Banner</sl-button>
      <sl-button @click=${() => {
        parameters.addKeyLocalStorage(args.siteId)
      }}>Disable Banner</sl-button>

      <br /><br />

      <hot-consent
        consent-id="${args.siteId}"
        @agree=${() => {
          parameters.agree(args.siteId, args.domain)
        }}
        @disagree=${() => {
          parameters.disagree()
        }}
      ></hot-consent>

      <hot-tracking
        id="hot-tracking"
        site-id=${args.siteId}
        domain=${args.domain}
      >
      </hot-tracking>

      <sl-alert id="agree-alert" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-alert" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    `;
  },
};
