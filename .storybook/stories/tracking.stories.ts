import type { Meta, StoryObj } from "@storybook/web-components";
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import "../../components/tracking/tracking.ts";
import { html } from "lit";

const meta: Meta = {
  title: "Tracking",
  component: "hot-tracking",
};
export default meta;

export const Template: StoryObj = {
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
    showAgreeToast: () => {
      const agree = document.getElementById("agree-toast");
      if (agree) {
        agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        disagree.toast();
      }
    },
    addKeyLocalStorage: (siteId: number) => {
      localStorage.setItem(`${siteId}-matomo-agree`, 'true');
    },
    removeKeyLocalStorage: (siteId: number) => {
      localStorage.removeItem(`${siteId}-matomo-agree`);
    },
  },
  render: (args, { parameters }) => {
    return html`
      <h1>Matomo Tracking Banner</h1>
      The banner is disabled if a local storage key is set.
      <br>
      Click the buttons below to enable/disable and refresh the page.
      <br>
      <br>

      <sl-button @click=${() => {
        parameters.removeKeyLocalStorage(args.siteId)
      }}>Re-Enable Banner</sl-button>
      <sl-button @click=${() => {
        parameters.addKeyLocalStorage(args.siteId)
      }}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="${args.siteId}"
        domain="${args.domain}"
        @agree=${() => {
          parameters.showAgreeToast()
        }}
        @disagree=${() => {
          parameters.showDisagreeToast()
        }}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    `;
  },
};
