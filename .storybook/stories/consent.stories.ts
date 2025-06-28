import type { Meta, StoryObj } from "@storybook/web-components";
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
      <wa-button @click=${() => {
        parameters.removeKeyLocalStorage(args.consentId)
      }}>Re-Enable Banner</wa-button>
      <wa-button @click=${() => {
        parameters.addKeyLocalStorage(args.consentId)
      }}>Disable Banner</wa-button>
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

    
    `;
  },
};
