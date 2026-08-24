import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

// Prevent layout shift when dropdown opens by keeping scrollbar visible
// When wa-dropdown opens, it adds a "scroll" class to <html> and sets overflow:hidden,
// which removes the scrollbar and causes content to shift. This style prevents that.
const style = document.createElement("style");
style.textContent = `
  html.scroll {
    overflow-y: scroll !important;
  }
`;
document.head.appendChild(style);

const meta: Meta = {
  title: "ToolMenu",
  component: "hotosm-tool-menu",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return html`
      <hotosm-tool-menu
        @tool-selected=${(e: CustomEvent) => {
          console.log("Tool selected:", e.detail.tool);
        }}
      ></hotosm-tool-menu>

      <div style="margin-top: 20px; max-width: 500px;">
        <h2>Tool Menu Component</h2>
        <p>
          A dropdown menu that provides access to all HOT tools as a single flat
          list.
        </p>

        <h3>Features:</h3>
        <ul>
          <li>Every tool is listed with its logo</li>
          <li>Opens tool pages in new tabs</li>
          <li>Dispatches custom "tool-selected" event</li>
        </ul>

        <h3>Known Issues:</h3>
        <p>
          When the dropdown opens, the page content may shift slightly. This
          happens because the dropdown adds a "scroll" class to the &lt;html&gt;
          element with <code>overflow: hidden</code>, which removes the
          scrollbar.
        </p>
        <p>To prevent this in your application, add the following CSS:</p>
        <pre
          style="background: #f5f5f5; padding: 10px; border-radius: 5px;"
        ><code>html.scroll {
  overflow-y: scroll !important;
}</code></pre>
      </div>
    `;
  },
};
