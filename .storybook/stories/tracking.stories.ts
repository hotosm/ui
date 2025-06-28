import type { Meta, StoryObj } from "@storybook/web-components";
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
      <wa-button @click=${() => {
        parameters.removeKeyLocalStorage(args.siteId)
      }}>Re-Enable Banner</wa-button>
      <wa-button @click=${() => {
        parameters.addKeyLocalStorage(args.siteId)
      }}>Disable Banner</wa-button>

      <br /><br />


      <hot-tracking
        id="hot-tracking"
        site-id=${args.siteId}
        domain=${args.domain}
      >
      </hot-tracking>

    `;
  },
};
