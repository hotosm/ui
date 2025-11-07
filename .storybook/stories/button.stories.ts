import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../../src/hotosm-ui';

const meta: Meta = {
  title: 'Components/Button',
  component: 'hot-button',
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    iconLeft: {
      control: 'text',
    },
    iconRight: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    type: 'button',
    iconLeft: '',
    iconRight: '',
  },
  render: (args) => html`
    <hot-button
      variant=${args.variant}
      color=${args.color}
      size=${args.size}
      ?disabled=${args.disabled}
      ?fullWidth=${args.fullWidth}
      type=${args.type}
      iconLeft=${args.iconLeft}
      iconRight=${args.iconRight}
      @hot-click=${() => alert('Button clicked')}
    >
      Click Me
    </hot-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Solid Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button variant="solid" color="primary">Primary</hot-button>
          <hot-button variant="solid" color="neutral">Neutral</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Outline Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button variant="outline" color="primary">Primary</hot-button>
          <hot-button variant="outline" color="neutral">Neutral</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Ghost Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button variant="ghost" color="primary">Primary</hot-button>
          <hot-button variant="ghost" color="neutral">Neutral</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Sizes</h3>
        <div
          style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;"
        >
          <hot-button size="small">Small</hot-button>
          <hot-button size="medium">Medium</hot-button>
          <hot-button size="large">Large</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">States</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button>Normal</hot-button>
          <hot-button disabled>Disabled</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Full Width</h3>
        <hot-button fullWidth>Full Width Button</hot-button>
      </div>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Navigation Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button iconLeft="arrow-left">Back</hot-button>
          <hot-button iconRight="arrow-right">Next</hot-button>
          <hot-button iconLeft="chevron-left" variant="outline" color="neutral">
            Previous
          </hot-button>
          <hot-button
            iconRight="chevron-right"
            variant="outline"
            color="neutral"
          >
            Continue
          </hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Action Buttons with Icons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <hot-button iconLeft="plus">Add More</hot-button>
          <hot-button iconLeft="trash">Delete</hot-button>
          <hot-button iconLeft="download" variant="outline"
            >Download</hot-button
          >
          <hot-button iconLeft="upload" variant="outline">Upload</hot-button>
          <hot-button iconRight="external-link" variant="ghost">
            Open Link
          </hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Sizes</h3>
        <div
          style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;"
        >
          <hot-button size="small" iconLeft="check">Small</hot-button>
          <hot-button size="medium" iconLeft="check">Medium</hot-button>
          <hot-button size="large" iconLeft="check">Large</hot-button>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Icon Only Buttons</h3>
        <div
          style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;"
        >
          <hot-button iconLeft="xmark" size="small"></hot-button>
          <hot-button iconLeft="pencil" variant="outline"></hot-button>
          <hot-button iconLeft="trash"></hot-button>
          <hot-button iconLeft="gear" variant="ghost"></hot-button>
        </div>
      </div>
    </div>
  `,
};
