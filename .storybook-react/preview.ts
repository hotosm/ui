import type { Preview } from "@storybook/react";
import "../src/theme/hot.css";
import "../src/styles.css";
import '@unocss/reset/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      exclude: [
        "renderOptions",
        "connectedCallback",
        "disconnectedCallback",
        "renderRoot",
        "isUpdatePending",
        "addController",
        "removeController",
        "attributeChangedCallback",
        "requestUpdate",
        "updateComplete",
        "hasUpdated"
      ]
    },
  },
};

export default preview;
