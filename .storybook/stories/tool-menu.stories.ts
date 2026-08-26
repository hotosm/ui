import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../../src/hotosm-ui";

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
      </div>
    `;
  },
};
