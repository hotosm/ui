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
    title: 'document.pdf',
    subtitle: '2.4 MB',
    icon: 'file',
    itemId: 'item-1',
    showRemove: true,
    showIcon: true,
  },
  render: (args) => html`
    <hot-list-card
      title=${args.title}
      subtitle=${args.subtitle}
      icon=${args.icon}
      itemId=${args.itemId}
      ?showRemove=${args.showRemove}
      ?showIcon=${args.showIcon}
    ></hot-list-card>
  `,
};

export const FileTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <hot-list-card
        title="report.pdf"
        subtitle="3.5 MB"
        icon="file-pdf"
        itemId="file-1"
      ></hot-list-card>

      <hot-list-card
        title="data.xlsx"
        subtitle="1.2 MB"
        icon="file-excel"
        itemId="file-2"
      ></hot-list-card>

      <hot-list-card
        title="proposal.docx"
        subtitle="850 KB"
        icon="file-word"
        itemId="file-3"
      ></hot-list-card>

      <hot-list-card
        title="archive.zip"
        subtitle="5.5 MB"
        icon="file-archive"
        itemId="file-4"
      ></hot-list-card>

      <hot-list-card
        title="photo.jpg"
        subtitle="2.1 MB"
        icon="file-image"
        itemId="file-5"
      ></hot-list-card>
    </div>
  `,
};
