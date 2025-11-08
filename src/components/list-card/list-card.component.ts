import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '../button/button.js';
import styles from './list-card.styles.js';

export class ListCard extends LitElement {
  static styles = [styles];
  name = 'hot-list-card';

  @property({ type: String })
  accessor title = '';

  @property({ type: String })
  accessor subtitle = '';

  @property({ type: String })
  accessor icon = '';

  @property({ type: String })
  accessor itemId = '';

  @property({ type: Boolean })
  accessor showRemove = true;

  @property({ type: Boolean })
  accessor showIcon = true;

  private _handleRemove() {
    this.dispatchEvent(
      new CustomEvent('hot-remove', {
        detail: { id: this.itemId },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    const showIconElement = this.showIcon && this.icon;

    return html`
      <div class="list-item">
        ${showIconElement
          ? html`<wa-icon name=${this.icon} class="list-icon"></wa-icon>`
          : ''}
        <div class="list-info">
          <div class="list-title">${this.title}</div>
          ${this.subtitle
            ? html`<div class="list-subtitle">${this.subtitle}</div>`
            : ''}
        </div>
        ${this.showRemove
          ? html`
              <hot-button
                variant="ghost"
                color="neutral"
                size="small"
                icon="xmark"
                class="list-remove"
                @hot-click=${this._handleRemove}
                aria-label="Remove ${this.title}"
              >
              </hot-button>
            `
          : ''}
      </div>
    `;
  }
}

export default ListCard;
