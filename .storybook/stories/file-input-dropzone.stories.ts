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
    maxSize: 5 * 1000 * 1000,
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
          .maxSize=${10 * 1000}
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

export const RealUpload: Story = {
  render: () => {
    const handleRealUpload = async () => {
      const dropzone = document.querySelector('#real-upload-dropzone') as any;
      const files = dropzone?.getFiles() || [];

      if (files.length === 0) {
        alert('Please select files to upload');
        return;
      }

      const statusEl = document.querySelector('#real-upload-status');
      const uploadBtn = document.querySelector('#real-upload-btn') as any;
      const resultsEl = document.querySelector('#real-upload-results');

      uploadBtn.disabled = true;
      if (statusEl) statusEl.innerHTML = 'Uploading...';
      if (resultsEl) resultsEl.innerHTML = '';

      try {
        const uploadPromises = files.map(async (file: File) => {
          const formData = new FormData();
          formData.append('file', file);

          const response = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`Upload failed for ${file.name}`);
          }

          const result = await response.json();
          const uploadUrl = result.data?.url || '';
          const downloadUrl = uploadUrl.replace(
            'tmpfiles.org/',
            'tmpfiles.org/dl/'
          );

          return {
            name: file.name,
            url: downloadUrl,
            success: result.status === 'success',
          };
        });

        const results = await Promise.all(uploadPromises);

        if (statusEl) {
          statusEl.innerHTML = `Successfully uploaded ${files.length} file(s).`;
        }

        if (resultsEl) {
          const resultsList = results
            .map(
              (r) => `
            <div style="padding: 0.75rem; border: 1px solid; border-radius: 4px; margin-bottom: 0.5rem;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">
                ${r.name}
              </div>
              <div style="font-size: 1rem;">
                <strong>Download URL:</strong><br/>
                <a href="${r.url}" target="_blank" style="underline; word-break: break-all;">
                  ${r.url}
                </a>
              </div>
              <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.5rem;">
               All uploaded files are automatically deleted after 60 minutes.
              </div>
            </div>
          `
            )
            .join('');

          resultsEl.innerHTML = resultsList;
        }

        setTimeout(() => {
          dropzone?.clearFiles();
        }, 1000);
      } catch (error: any) {
        if (statusEl) {
          statusEl.innerHTML = `Upload failed: ${error.message}`;
        }
      } finally {
        uploadBtn.disabled = false;
      }
    };

    const handleClear = () => {
      const dropzone = document.querySelector('#real-upload-dropzone') as any;
      dropzone?.clearFiles();
      const statusEl = document.querySelector('#real-upload-status');
      const resultsEl = document.querySelector('#real-upload-results');
      if (statusEl) statusEl.innerHTML = '';
      if (resultsEl) resultsEl.innerHTML = '';
    };

    return html`
      <div>
        <h3 style="margin-bottom: 0.5rem;">Upload Example (Real Server)</h3>
        <p style="margin-bottom: 1rem;">
          This demonstrates how to use <code>getFiles()</code> to upload files
          to a server. This example uploads to
          <a href="https://tmpfiles.org" target="_blank">tmpfiles.org</a>
          (free service, no account needed) and returns real download links.
        </p>

        <div
          style="padding: 0.75rem; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 4px; margin-bottom: 1rem;"
        >
          <strong>Note:</strong> Uploaded files are publicly accessible and
          automatically expire.
        </div>

        <hot-file-input-dropzone
          id="real-upload-dropzone"
          ?multiple=${true}
          label="Select files to upload (max 100MB each)"
          showPreview=${true}
          .maxSize=${100 * 1000 * 1000}
        ></hot-file-input-dropzone>

        <div
          style="margin-top: 1rem; display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;"
        >
          <wa-button
            id="real-upload-btn"
            variant="primary"
            @click=${handleRealUpload}
          >
            <wa-icon name="cloud-arrow-up" slot="prefix"></wa-icon>
            Upload Files
          </wa-button>
          <wa-button variant="outline" @click=${handleClear}>
            <wa-icon name="xmark" slot="prefix"></wa-icon>
            Clear All
          </wa-button>
        </div>

        <div
          id="real-upload-status"
          style="margin-top: 1rem; font-weight: 500;"
        ></div>

        <div id="real-upload-results" style="margin-top: 1rem;"></div>

        <details style="margin-top: 1.5rem;">
          <summary style="cursor: pointer; font-weight: 500;">
            View Upload Code
          </summary>
          <pre
            style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; margin-top: 0.5rem;"
          >
<code>
// Get files from component
const dropzone = document.querySelector('#dropzone');
const files = dropzone.getFiles();

// Upload file
const uploadPromises = files.map(async (file) => {
const formData = new FormData();
formData.append('file', file);

const response = await fetch('https://tmpfiles.org/api/v1/upload', {
  method: 'POST',
  body: formData,
});

const result = await response.json();
const downloadUrl = result.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');

return {
  name: file.name,
  url: downloadUrl
};
});

const results = await Promise.all(uploadPromises);
</code>
            </pre>
        </details>
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
