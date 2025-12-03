import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
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

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleRemove();
    }
  }

  protected render() {
    const showIconElement = this.showIcon && this.icon;

    return html`
      <div class="list-item" role="listitem">
        ${showIconElement
          ? html`<wa-icon name=${this.icon} class="list-icon" aria-hidden="true"></wa-icon>`
          : ''}
        <div class="list-info">
          <div class="list-title" id="title-${this.itemId}">${this.title}</div>
          ${this.subtitle
            ? html`<div class="list-subtitle">${this.subtitle}</div>`
            : ''}
        </div>
        ${this.showRemove
          ? html`
              <button
                type="button"
                class="remove-button"
                @click=${this._handleRemove}
                @keydown=${this._handleKeyDown}
                aria-label="Remove ${this.title}"
              >
                <wa-icon name="xmark" class="remove-icon" aria-hidden="true"></wa-icon>
              </button>
            `
          : ''}
      </div>
    `;
  }
}

export default ListCard;
