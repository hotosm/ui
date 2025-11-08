import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../../src/hotosm-ui';

const meta: Meta = {
  title: 'Components/Image Preview Grid',
  component: 'hot-image-preview-grid',
  argTypes: {
    leftButtonLabel: {
      control: 'text',
    },
    leftButtonIcon: {
      control: 'text',
    },
    leftButtonIconLeft: {
      control: 'text',
    },
    leftButtonIconRight: {
      control: 'text',
    },
    rightButtonLabel: {
      control: 'text',
    },
    rightButtonIcon: {
      control: 'text',
    },
    rightButtonIconLeft: {
      control: 'text',
    },
    rightButtonIconRight: {
      control: 'text',
    },
    submitLabel: {
      control: 'text',
    },
    showSubmit: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj;

const PLACEHOLDER_IMAGE = '/assets/images/thumbnail-placeholder.png';

const createMockImageFiles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    file: new File([], `image-${i + 1}.jpg`, { type: 'image/jpeg' }),
    id: `file-${Date.now()}-${i}`,
    preview: PLACEHOLDER_IMAGE,
  }));
};

export const Default: Story = {
  args: {
    leftButtonLabel: 'Cancel',
    leftButtonIcon: '',
    leftButtonIconLeft: '',
    leftButtonIconRight: '',
    rightButtonLabel: 'Add more',
    rightButtonIcon: '',
    rightButtonIconLeft: 'plus',
    rightButtonIconRight: '',
    submitLabel: '',
    showSubmit: true,
  },
  render: (args) => {
    return html`
      <div>
        <p style="margin-bottom: 1rem; color: #666;">
          Grid image preview with customizable buttons.
        </p>
        <hot-image-preview-grid
          .files=${createMockImageFiles(20)}
          leftButtonLabel=${args.leftButtonLabel}
          leftButtonIcon=${args.leftButtonIcon}
          leftButtonIconLeft=${args.leftButtonIconLeft}
          leftButtonIconRight=${args.leftButtonIconRight}
          rightButtonLabel=${args.rightButtonLabel}
          rightButtonIcon=${args.rightButtonIcon}
          rightButtonIconLeft=${args.rightButtonIconLeft}
          rightButtonIconRight=${args.rightButtonIconRight}
          submitLabel=${args.submitLabel}
          ?showSubmit=${args.showSubmit}
        ></hot-image-preview-grid>
      </div>
    `;
  },
};
