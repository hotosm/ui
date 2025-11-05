import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../../src/hotosm-ui';

const meta: Meta = {
  title: 'Forms/File Input Dropzone',
  component: 'hot-file-input-dropzone',
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: "File type filter (e.g., 'image/*', '.pdf,.docx')",
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes (0 = no limit)',
    },
    showPreview: {
      control: 'boolean',
      description: 'Show file preview list with icons',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the file input',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the dropzone',
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Upload files',
    showPreview: true,
  },
  render: (args) => {
    const handleFileChange = (e: CustomEvent) => {
      console.log('Files changed:', e.detail.files);
    };

    return html`
      <hot-file-input-dropzone
        ?multiple=${args.multiple}
        accept=${args.accept || ''}
        max-size=${args.maxSize || 0}
        .showPreview=${args.showPreview}
        ?disabled=${args.disabled}
        label=${args.label || ''}
        @hot-file-change=${handleFileChange}
      ></hot-file-input-dropzone>
    `;
  },
};

export const SingleFile: Story = {
  args: {
    multiple: false,
    label: 'Upload a single file',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    label: 'Upload multiple files',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const ImagesOnly: Story = {
  args: {
    multiple: true,
    accept: '.jpg, .png',
    label: 'Upload images',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      accept=${args.accept}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const DocumentsOnly: Story = {
  args: {
    multiple: true,
    accept: '.PDF',
    label: 'Upload documents',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      accept=${args.accept}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const WithSizeLimit: Story = {
  args: {
    multiple: true,
    maxSize: 5242880,
    label: 'Upload files (max 5MB each)',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      max-size=${args.maxSize}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Upload disabled',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?disabled=${args.disabled}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const NoPreview: Story = {
  args: {
    multiple: true,
    showPreview: false,
    label: 'Upload without preview',
  },

  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      .showPreview=${args.showPreview}
      label=${args.label}
    ></hot-file-input-dropzone>
  `,
};

export const ProgrammaticControl: Story = {
  args: {
    multiple: true,
    label: 'Upload files',
    showPreview: true,
  },
  render: (args) => {
    const handleGetFiles = () => {
      const dropzone = document.querySelector('#programmatic-dropzone') as any;
      const files = dropzone?.getFiles() || [];

      if (files.length === 0) {
        alert('No files selected');
      } else {
        const fileList = files
          .map((f: File) => `${f.name} (${(f.size / 1024).toFixed(2)}KB)`)
          .join('\n');
        alert(`Selected files:\n\n${fileList}`);
      }
    };

    const handleClearFiles = () => {
      const dropzone = document.querySelector('#programmatic-dropzone') as any;
      dropzone?.clearFiles();
    };

    return html`
      <hot-file-input-dropzone
        id="programmatic-dropzone"
        ?multiple=${args.multiple}
        label=${args.label}
        .showPreview=${args.showPreview}
      ></hot-file-input-dropzone>

      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <wa-button variant="primary" @click=${handleGetFiles}>
          Get Selected Files
        </wa-button>
        <wa-button variant="default" @click=${handleClearFiles}>
          Clear All Files
        </wa-button>
      </div>
    `;
  },
};

export const ComplexExample: Story = {
  args: {
    multiple: true,
    accept: 'image/*,.pdf',
    maxSize: 10485760,
    label: 'Upload project files',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      accept=${args.accept}
      max-size=${args.maxSize}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>

    <div style="margin-top: 1rem;">
      <strong>Configuration:</strong>
      <ul style="margin: 0.5rem 0 0 0; padding-left: 1.25rem;">
        <li>Multiple files allowed</li>
        <li>Accepted: Images and PDF files</li>
        <li>Maximum size: 10MB per file</li>
        <li>Preview enabled</li>
      </ul>
    </div>
  `,
};
