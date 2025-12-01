import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../../src/hotosm-ui';

const meta: Meta = {
  title: 'Forms/File Input Dropzone',
  component: 'hot-file-input-dropzone',
  argTypes: {
    multiple: {
      control: 'boolean',
    },
    accept: {
      control: 'text',
    },
    maxSize: {
      control: 'number',
    },
    showPreview: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['traditional', 'compact'],
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
  render: (args) => html`
    <hot-file-input-dropzone
      ?multiple=${args.multiple}
      accept=${args.accept || ''}
      max-size=${args.maxSize || 0}
      .showPreview=${args.showPreview}
      ?disabled=${args.disabled}
      label=${args.label || ''}
    ></hot-file-input-dropzone>
  `,
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
    accept: 'image/*',
    label: 'Image Upload',
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
    accept:
      '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.odt,.ods,.odp,.rtf',
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
      .maxSize=${args.maxSize}
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

export const ErrorStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">File Size Limit Error</h3>
        <p style="margin-bottom: 0.5rem;">
          Try uploading any image file to see the size limit error (max 10KB -
          intentionally very small to trigger error).
        </p>
        <hot-file-input-dropzone
          accept="image/*"
          .maxSize=${10240}
          label="Upload images (max 10KB)"
          showPreview=${true}
          ?multiple=${true}
        ></hot-file-input-dropzone>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Drag and Drop File Type Error</h3>
        <p style="margin-bottom: 0.5rem;">
          Drag and drop a non image file to trigger the error state. The native
          file picker filters by type but drag and drop doesn't.
        </p>
        <hot-file-input-dropzone
          accept="image/*"
          label="Images only"
          showPreview=${true}
        ></hot-file-input-dropzone>
      </div>
    </div>
  `,
};

export const ProgrammaticAPI: Story = {
  render: () => {
    const handleUpload = () => {
      const dropzone = document.querySelector('#upload-dropzone') as any;
      const files = dropzone?.getFiles() || [];

      if (files.length === 0) {
        alert('Please select files to upload');
        return;
      }

      const fileList = files
        .map((f: File) => `${f.name} (${(f.size / 1024).toFixed(2)}KB)`)
        .join('\n');
      alert(
        `Ready to upload ${files.length} file(s):\n\n${fileList}\n\nUse getFiles() method to access File objects for uploading.`
      );
    };

    const handleClear = () => {
      const dropzone = document.querySelector('#upload-dropzone') as any;
      dropzone?.clearFiles();
    };

    return html`
      <div>
        <h3 style="margin-bottom: 0.5rem;">Programmatic File Access</h3>
        <p style="margin-bottom: 1rem;  ">
          Use <code>getFiles()</code> to retrieve selected files for server
          upload. Use <code>clearFiles()</code> to reset the component.
        </p>

        <hot-file-input-dropzone
          id="upload-dropzone"
          ?multiple=${true}
          label="Select files to upload"
          showPreview=${true}
        ></hot-file-input-dropzone>

        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <wa-button variant="primary" @click=${handleUpload}>
            <wa-icon name="cloud-arrow-up" slot="prefix"></wa-icon>
            Upload to Server
          </wa-button>
          <wa-button variant="outline" @click=${handleClear}>
            <wa-icon name="xmark" slot="prefix"></wa-icon>
            Clear All
          </wa-button>
        </div>
      </div>
    `;
  },
};

export const CompactVariant: Story = {
  args: {
    variant: 'compact',
    accept: '.zip',
    label: 'Upload your .zip file here',
    showPreview: true,
  },
  render: (args) => html`
    <hot-file-input-dropzone
      variant=${args.variant}
      accept=${args.accept}
      label=${args.label}
      .showPreview=${args.showPreview}
    ></hot-file-input-dropzone>
  `,
};

export const VariantComparison: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Compact</h3>
        <hot-file-input-dropzone
          variant="compact"
          accept=".zip"
          label="Upload your .zip file here"
          showPreview=${true}
        ></hot-file-input-dropzone>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Traditional (Default)</h3>
        <hot-file-input-dropzone
          variant="traditional"
          accept=".zip"
          label="Upload files"
          showPreview=${true}
        ></hot-file-input-dropzone>
      </div>
    </div>
  `,
};
