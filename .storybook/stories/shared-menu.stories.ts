import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../src/hotosm-ui";

const meta: Meta = {
  title: "SharedMenu",
  component: "hotosm-shared-menu",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showLogos: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    showLogos: false,
  },
  render: (args) => {
    return html`
      <hotosm-shared-menu
        ?show-logos="${args.showLogos}"
        @product-selected=${(e: CustomEvent) => {
          console.log('Product selected:', e.detail.product);
        }}
      ></hotosm-shared-menu>

      <div style="margin-top: 20px; max-width: 500px;">
        <h2>Shared Menu Component</h2>
        <p>A dropdown menu that provides access to all HOT products organized by category.</p>
        
        <h3>Features:</h3>
        <ul>
          <li>Products organized by sections: Imagery, Mapping, Field, and Data</li>
          <li>Optional product logos display</li>
          <li>Opens product pages in new tabs</li>
          <li>Dispatches custom "product-selected" event</li>
        </ul>
      </div>
    `;
  }
};

export const WithLogos: Story = {
  args: {
    showLogos: true,
  },
  render: (args) => {
    return html`
      <hotosm-shared-menu
        ?show-logos="${args.showLogos}"
        @product-selected=${(e: CustomEvent) => {
          console.log('Product selected:', e.detail.product);
        }}
      ></hotosm-shared-menu>

      <div style="margin-top: 20px; max-width: 500px;">
        <h2>Shared Menu with Logos</h2>
        <p>When <code>show-logos</code> is enabled, product icons are displayed next to each item.</p>
      </div>
    `;
  }
};
