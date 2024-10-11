import type { Meta, StoryObj } from "@storybook/web-components";
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "Consent",
  component: "hot-consent",
};
export default meta;

export const Consent: StoryObj = {
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
  },
  parameters: {
    showAgreeToast: () => {
      const agree = document.getElementById("agree-toast");
      if (agree) {
        // agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        // disagree.toast();
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

      site-id=${args.siteId}
        agree-label="Yes, I accept"
        not-agree-label="I DO NOT accept"
        title=${"What info we collect about you?"}
        @agree=${() => {
          parameters.showAgreeToast()
        }}
        @disagree=${() => {
          parameters.showDisagreeToast()
        }}
      >
        We use cookies and similar technologies to recognize and analyze your
        visits, and measure traffic usage and activity. You can learn about how
        we use the data about your visit or information you provide reading our
        <a
          href="https://www.hotosm.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >privacy policy</a
        >. By clicking "I Agree", you consent to the use of cookies.
      </hot-consent>

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
