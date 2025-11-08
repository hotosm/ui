import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../../src/hotosm-ui';

const meta: Meta = {
  title: 'Components/List Card',
  component: 'hot-list-card',
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    itemId: {
      control: 'text',
    },
    showRemove: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'file',
    itemId: 'item-1',
    showRemove: true,
    showIcon: true,
  },
  render: (args) => {
    const handleRemove = (e: CustomEvent) => {
      console.log('Remove clicked:', e.detail);
    };

    return html`
      <div>
        <p style="margin-bottom: 1rem; color: #666;">List card.</p>
        <hot-list-card
          title=${args.title}
          subtitle=${args.subtitle}
          icon=${args.icon}
          itemId=${args.itemId}
          ?showRemove=${args.showRemove}
          ?showIcon=${args.showIcon}
          @hot-remove=${handleRemove}
        ></hot-list-card>
      </div>
    `;
  },
};

export const FileExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin-bottom: 0.5rem; color: #666;">List card examples.</p>

      <hot-list-card
        title="test.pdf"
        subtitle="3.5 MB"
        icon="file-pdf"
        itemId="file-1"
      ></hot-list-card>

      <hot-list-card
        title="test.xlsx"
        subtitle="1.2 MB"
        icon="file-excel"
        itemId="file-2"
      ></hot-list-card>

      <hot-list-card
        title="test.docx"
        subtitle="850 KB"
        icon="file-word"
        itemId="file-3"
      ></hot-list-card>

      <hot-list-card
        title="test.zip"
        subtitle="5.5 MB"
        icon="file-archive"
        itemId="file-4"
      ></hot-list-card>
    </div>
  `,
};
