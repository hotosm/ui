import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import styles from './image-card.styles.js';

export class ImageCard extends LitElement {
  static styles = [styles];
  name = 'hot-image-card';

  @property({ type: String })
  accessor fileName = '';

  @property({ type: Number })
  accessor fileSize = 0;

  @property({ type: String })
  accessor preview = '';

  @property({ type: String })
  accessor fileId = '';

  @property({ type: Boolean })
  accessor showRemove = true;

  private _handleRemove() {
    this.dispatchEvent(
      new CustomEvent('hot-remove', {
        detail: { id: this.fileId },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  protected render() {
    return html`
      <div class="image-thumbnail">
        <div
          class="thumbnail-image"
          style="background-image: url(${this.preview})"
        ></div>
        ${this.showRemove
          ? html`
              <button
                type="button"
                class="thumbnail-remove"
                @click=${this._handleRemove}
                aria-label="Remove ${this.fileName}"
              >
                <wa-icon name="xmark"></wa-icon>
              </button>
            `
          : ''}
        <div class="thumbnail-info">
          <div class="thumbnail-name">${this.fileName}</div>
          <div class="thumbnail-size">
            ${this._formatFileSize(this.fileSize)}
          </div>
        </div>
      </div>
    `;
  }
}

export default ImageCard;
