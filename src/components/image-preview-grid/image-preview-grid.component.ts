import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '../image-card/image-card.js';
import '../button/button.js';
import styles from './image-preview-grid.styles.js';

export interface FileWithPreview {
  file: File;
  id: string;
  preview?: string;
}

export class ImagePreviewGrid extends LitElement {
  static styles = [styles];
  name = 'hot-image-preview-grid';

  @property({ type: Array })
  accessor files: FileWithPreview[] = [];

  @property({ type: String })
  accessor leftButtonLabel = 'Cancel';

  @property({ type: String })
  accessor leftButtonIcon = '';

  @property({ type: String })
  accessor leftButtonIconLeft = '';

  @property({ type: String })
  accessor leftButtonIconRight = '';

  @property({ type: String })
  accessor rightButtonLabel = 'Add more';

  @property({ type: String })
  accessor rightButtonIcon = '';

  @property({ type: String })
  accessor rightButtonIconLeft = 'plus';

  @property({ type: String })
  accessor rightButtonIconRight = '';

  @property({ type: String })
  accessor submitLabel = '';

  @property({ type: Boolean })
  accessor showSubmit = false;

  private _handleAddMore() {
    this.dispatchEvent(
      new CustomEvent('hot-add-more', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleCancel() {
    this.dispatchEvent(
      new CustomEvent('hot-cancel', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleRemove(id: string, file: File) {
    this.dispatchEvent(
      new CustomEvent('hot-file-remove', {
        detail: { id, file },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleSubmit() {
    this.dispatchEvent(
      new CustomEvent('hot-submit', {
        detail: { files: this.files },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    if (this.files.length === 0) {
      return html``;
    }

    return html`
      <div class="image-grid-container">
        <div class="image-preview-header">
          <hot-button
            variant="outline"
            color="neutral"
            size="small"
            icon=${this.leftButtonIcon}
            iconLeft=${this.leftButtonIconLeft}
            iconRight=${this.leftButtonIconRight}
            @hot-click=${this._handleCancel}
          >
            ${this.leftButtonLabel}
          </hot-button>
          <div class="file-count">
            ${this.files.length}
            ${this.files.length === 1 ? 'file' : 'files'} selected
          </div>
          <div class="header-actions">
            <hot-button
              variant="solid"
              color="primary"
              size="small"
              icon=${this.rightButtonIcon}
              iconLeft=${this.rightButtonIconLeft}
              iconRight=${this.rightButtonIconRight}
              @hot-click=${this._handleAddMore}
            >
              ${this.rightButtonLabel}
            </hot-button>
            ${this.showSubmit && this.submitLabel
              ? html`
                  <hot-button
                    variant="solid"
                    color="primary"
                    size="small"
                    @hot-click=${this._handleSubmit}
                  >
                    ${this.submitLabel}
                  </hot-button>
                `
              : ''}
          </div>
        </div>
        <div class="image-grid">
          ${this.files.map(
            ({ file, id, preview }) => html`
              <hot-image-card
                fileName=${file.name}
                .fileSize=${file.size}
                preview=${preview || ''}
                fileId=${id}
                @hot-remove=${() => this._handleRemove(id, file)}
              ></hot-image-card>
            `
          )}
        </div>
      </div>
    `;
  }
}

export default ImagePreviewGrid;
