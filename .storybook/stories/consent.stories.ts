import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";
import type { Consent as HotConsent } from "../../src/components/consent/consent.component";

const meta: Meta = {
  title: "Consent",
  component: "hot-consent",
};
export default meta;

const getBanner = () => document.querySelector("hot-consent") as HotConsent;

const log = (message: string) => {
  const output = document.getElementById("consent-log");
  if (output) output.textContent = message;
};

/** Cookie consent with saved choices and a settings button. */
export const Consent: StoryObj = {
  args: {
    consentId: "storybook",
  },
  render: (args) => html`
    <wa-button @click=${() => getBanner().show()}>Cookie settings</wa-button>
    <wa-button
      @click=${() => {
        localStorage.removeItem(`${args.consentId}-consent-agree`);
        log("Stored choice cleared. Reload to see the first-visit banner.");
      }}
    >
      Clear stored choice
    </wa-button>
    <p id="consent-log"></p>

    <hot-consent
      consent-id=${args.consentId}
      title="Cookie preferences"
      agree-label="Accept"
      not-agree-label="Decline"
      @agree=${() => log("agree: load cookie-based trackers here.")}
      @disagree=${() => log("disagree: do not load (or remove) cookie-based trackers.")}
    >
      We use cookies to understand how visitors use this site. Read our
      <a href="https://www.hotosm.org/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
    </hot-consent>
  `,
};
