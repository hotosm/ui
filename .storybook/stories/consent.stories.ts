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
    consentId: "1",
  },
  argTypes: {
    consentId: {
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
        agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        disagree.toast();
      }
    },
    addKeyLocalStorage: (consentId: number) => {
      localStorage.setItem(`${consentId}-consent-agree`, 'true');
    },
    removeKeyLocalStorage: (consentId: number) => {
      localStorage.removeItem(`${consentId}-consent-agree`);
    },
  },
  render: (args, { parameters }) => {
    return html`
      <sl-button @click=${() => {
        parameters.removeKeyLocalStorage(args.consentId)
      }}>Re-Enable Banner</sl-button>
      <sl-button @click=${() => {
        parameters.addKeyLocalStorage(args.consentId)
      }}>Disable Banner</sl-button>
      <br /><br />

      <hot-consent

      consent-id=${args.consentId}
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
