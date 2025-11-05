import { LitElement, html } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import styles from './file-input-dropzone.styles.js';

export interface FileWithPreview {
  file: File;
  id: string;
}

export class FileInputDropzone extends LitElement {
  static styles = [styles];
  name = 'hot-file-input-dropzone';

  @property({ type: Boolean })
  accessor multiple = false;

  @property({ type: String })
  accessor accept = '';

  @property({ type: Number })
  accessor maxSize = 0;

  @property({ type: Boolean })
  accessor showPreview = true;

  @property({ type: Boolean })
  accessor disabled = false;

  @property({ type: String })
  accessor label = 'Drop files here or click to browse';

  @state()
  private accessor isDragging = false;

  @state()
  private accessor selectedFiles: FileWithPreview[] = [];

  @state()
  private accessor errorMessage = '';

  @query('input[type="file"]')
  private accessor fileInput!: HTMLInputElement;

  private _generateId(): string {
    return `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private _handleDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.isDragging = true;
    }
  }

  private _handleDragLeave(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragging = false;
  }

  private _handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragging = false;

    if (this.disabled) return;

    const files = Array.from(e.dataTransfer?.files || []);
    this._processFiles(files);
  }

  private _handleClick() {
    if (!this.disabled) {
      this.fileInput.click();
    }
  }

  private _handleFileInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input.files || []);
    this._processFiles(files);
  }

  private _processFiles(files: File[]) {
    this.errorMessage = '';

    if (!this.multiple && files.length > 1) {
      this.errorMessage = 'Only one file can be selected';
      return;
    }

    if (this.accept) {
      const acceptedTypes = this.accept.split(',').map((t) => t.trim());
      const invalidFiles = files.filter((file) => {
        return !acceptedTypes.some((type) => {
          if (type.startsWith('.')) {
            return file.name.toLowerCase().endsWith(type.toLowerCase());
          }
          if (type.endsWith('/*')) {
            const category = type.split('/')[0];
            return file.type.startsWith(category);
          }
          return file.type === type;
        });
      });

      if (invalidFiles.length > 0) {
        this.errorMessage = `Invalid file type(s): ${invalidFiles
          .map((f) => f.name)
          .join(', ')}`;
        return;
      }
    }

    if (this.maxSize > 0) {
      const oversizedFiles = files.filter((file) => file.size > this.maxSize);
      if (oversizedFiles.length > 0) {
        const maxSizeMB = (this.maxSize / (1024 * 1024)).toFixed(2);
        this.errorMessage = `File(s) exceed maximum size of ${maxSizeMB}MB: ${oversizedFiles
          .map((f) => f.name)
          .join(', ')}`;
        return;
      }
    }

    const filesWithPreview = files.map((file) => ({
      file,
      id: this._generateId(),
    }));

    if (this.multiple) {
      this.selectedFiles = [...this.selectedFiles, ...filesWithPreview];
    } else {
      this.selectedFiles = filesWithPreview;
    }

    this.dispatchEvent(
      new CustomEvent('hot-file-change', {
        detail: {
          files: this.selectedFiles.map((f) => f.file),
        },
        bubbles: true,
        composed: true,
      })
    );

    this.dispatchEvent(
      new CustomEvent('hot-files-selected', {
        detail: {
          files: filesWithPreview.map((f) => f.file),
          allFiles: this.selectedFiles.map((f) => f.file),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _removeFile(id: string) {
    this.selectedFiles = this.selectedFiles.filter((f) => f.id !== id);

    if (this.fileInput) {
      this.fileInput.value = '';
    }

    this.dispatchEvent(
      new CustomEvent('hot-file-change', {
        detail: {
          files: this.selectedFiles.map((f) => f.file),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _getFileIcon(file: File): string {
    const type = file.type;

    if (type.startsWith('image/')) return 'file-image';
    if (type.startsWith('video/')) return 'file-video';
    if (type.startsWith('audio/')) return 'file-audio';
    if (type === 'application/pdf') return 'file-pdf';
    if (type.includes('word')) return 'file-word';
    if (type.includes('sheet') || type.includes('excel')) return 'file-excel';
    if (type.includes('zip') || type.includes('rar') || type.includes('7z'))
      return 'file-archive';
    if (type.includes('text')) return 'file-text';

    return 'file';
  }

  private _formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  public clearFiles() {
    this.selectedFiles = [];
    this.errorMessage = '';
    if (this.fileInput) {
      this.fileInput.value = '';
    }
  }

  public getFiles(): File[] {
    return this.selectedFiles.map((f) => f.file);
  }

  protected render() {
    const dropzoneClasses = {
      dropzone: true,
      'dropzone--dragging': this.isDragging,
      'dropzone--disabled': this.disabled,
      'dropzone--has-files': this.selectedFiles.length > 0,
    };

    return html`
      <div class="file-input-dropzone">
        ${this.label ? html`<label class="label">${this.label}</label>` : ''}

        <div
          class=${classMap(dropzoneClasses)}
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${this._handleClick}
        >
          <input
            type="file"
            ?multiple=${this.multiple}
            accept=${this.accept}
            ?disabled=${this.disabled}
            @change=${this._handleFileInputChange}
            aria-label=${this.label}
          />

          <div class="dropzone-content">
            <wa-icon name="cloud-arrow-up" class="dropzone-icon"></wa-icon>
            <div class="dropzone-text">
              ${this.isDragging
                ? html`<strong>Drop files here</strong>`
                : html`
                    <div>Drop your file(s) or<strong> browse</strong></div>
                    ${this.accept
                      ? html`<div class="dropzone-accept">
                          ${this.accept} only
                        </div>`
                      : ''}
                    ${this.maxSize
                      ? html`<div class="dropzone-maxsize">
                          Max size: ${this._formatFileSize(this.maxSize)}
                        </div>`
                      : ''}
                  `}
            </div>
          </div>
        </div>

        ${this.errorMessage
          ? html`
              <div class="error-message" role="alert">
                <wa-icon name="exclamation-circle"></wa-icon>
                ${this.errorMessage}
              </div>
            `
          : ''}
        ${this.showPreview && this.selectedFiles.length > 0
          ? html`
              <div class="file-list">
                ${this.selectedFiles.map(
                  ({ file, id }) => html`
                    <div class="file-item">
                      <wa-icon
                        name=${this._getFileIcon(file)}
                        class="file-icon"
                      ></wa-icon>
                      <div class="file-info">
                        <div class="file-name">${file.name}</div>
                        <div class="file-size">
                          ${this._formatFileSize(file.size)}
                        </div>
                      </div>
                      <button
                        type="button"
                        class="file-remove"
                        @click=${() => this._removeFile(id)}
                        aria-label="Remove ${file.name}"
                      >
                        <wa-icon name="trash"></wa-icon>
                      </button>
                    </div>
                  `
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

export default FileInputDropzone;
