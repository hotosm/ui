import { LitElement, html } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import '../list-card/list-card.js';

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
  accessor label = '';

  @property({ type: String })
  accessor variant: 'traditional' | 'compact' = 'traditional';

  @state()
  private accessor isDragging = false;

  @state()
  private accessor selectedFiles: FileWithPreview[] = [];

  @state()
  private accessor errorMessage = '';

  @state()
  private accessor statusMessage = '';

  @query('input[type="file"]')
  private accessor fileInput!: HTMLInputElement;

  private _generateId(): string {
    return `file-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
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

  private _handleKeyDown(e: KeyboardEvent) {
    if (!this.disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
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
      const acceptedTypes = this.accept
        .split(',')
        .map((t) => t.trim().toLowerCase());
      const invalidFiles = files.filter((file) => {
        const fileName = file.name.toLowerCase();
        const fileType = file.type.toLowerCase();

        return !acceptedTypes.some((type) => {
          if (type.startsWith('.')) {
            return fileName.endsWith(type);
          }

          if (type.endsWith('/*')) {
            const category = type.split('/')[0];
            if (fileType) {
              return fileType.startsWith(category + '/');
            }
            const ext = fileName.substring(fileName.lastIndexOf('.'));
            return this._getFileIcon(ext).includes(category);
          }

          if (fileType) {
            return fileType === type;
          }
          return false;
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
        this.errorMessage = `File(s) exceed maximum size of ${this._formatFileSize(
          this.maxSize
        )}: ${oversizedFiles.map((f) => f.name).join(', ')}`;
        return;
      }
    }

    const filesWithPreview = files.map((file) => ({
      file,
      id: this._generateId(),
    }));

    if (this.multiple) {
      this.selectedFiles = [...filesWithPreview, ...this.selectedFiles];
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

    const fileCount = filesWithPreview.length;
    this.statusMessage = `${fileCount} ${
      fileCount === 1 ? 'file' : 'files'
    } selected: ${filesWithPreview.map((f) => f.file.name).join(', ')}`;
  }

  private _removeFile(id: string) {
    const removedFile = this.selectedFiles.find((f) => f.id === id);
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

    if (removedFile) {
      this.statusMessage = `File removed: ${removedFile.file.name}. ${
        this.selectedFiles.length
      } ${this.selectedFiles.length === 1 ? 'file' : 'files'} remaining.`;
    }
  }

  private _formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const kilobyte = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(kilobyte));
    const value = bytes / Math.pow(kilobyte, i);

    const formattedSize = Math.round(value * 10) / 10;

    return `${formattedSize} ${sizes[i]}`;
  }

  private _getFileIcon(type: string): string {
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
      'dropzone--compact': this.variant === 'compact',
    };

    const isCompact = this.variant === 'compact';

    return html`
      <div class="file-input-dropzone">
        ${this.label && this.variant === 'traditional'
          ? html`<label class="label" id="dropzone-label">${this.label}</label>`
          : ''}
        ${this.variant === 'traditional' ? html`<wa-divider></wa-divider>` : ''}

        <div
          class=${classMap(dropzoneClasses)}
          role="button"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-disabled=${this.disabled}
          aria-label=${this.label || 'File upload'}
          aria-describedby="dropzone-description${this.accept || this.maxSize
            ? ' dropzone-hints'
            : ''}"
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <input
            type="file"
            class="file-uploader"
            ?multiple=${this.multiple}
            accept=${this.accept}
            ?disabled=${this.disabled}
            @change=${this._handleFileInputChange}
            aria-hidden="true"
            tabindex="-1"
          />

          <div class="dropzone-content">
            <wa-icon
              name="${isCompact ? 'arrow-up-from-bracket' : 'cloud-arrow-up'}"
              class="dropzone-icon"
              aria-hidden="true"
            ></wa-icon>
            <div class="dropzone-text">
              ${isCompact
                ? html`<div class="compact-text" id="dropzone-description">
                    ${this.label}
                  </div>`
                : this.isDragging
                ? html`<div id="dropzone-description">
                    Drop ${this.multiple ? 'files' : 'file'} here
                  </div>`
                : html`
                    <div class="dropzone-cta" id="dropzone-description">
                      <div>
                        Drop ${this.multiple ? 'files' : 'file'} here or&nbsp;
                      </div>
                      <div class="browse">browse</div>
                    </div>
                    ${this.accept || this.maxSize
                      ? html`<div id="dropzone-hints">
                          ${this.accept
                            ? html`<div class="dropzone-accept">
                                ${this.accept.split(',').join(', ')} only
                              </div>`
                            : ''}
                          ${this.maxSize
                            ? html`<div class="dropzone-maxsize">
                                Max size: ${this._formatFileSize(this.maxSize)}
                              </div>`
                            : ''}
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
              <div class="file-preview-list">
                ${this.selectedFiles.map(
                  ({ file, id }) => html`
                    <hot-list-card
                      title=${file.name}
                      subtitle=${this._formatFileSize(file.size)}
                      icon=${this._getFileIcon(file.type)}
                      itemId=${id}
                      @hot-remove=${() => this._removeFile(id)}
                    ></hot-list-card>
                  `
                )}
              </div>
            `
          : ''}

        <div
          class="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          ${this.statusMessage}
        </div>
      </div>
    `;
  }
}

export default FileInputDropzone;
