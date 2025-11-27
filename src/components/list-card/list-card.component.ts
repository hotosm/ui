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
              <wa-icon
                name="xmark"
                class="remove-icon"
                @click=${this._handleRemove}
                role="button"
                tabindex="0"
                aria-label="Remove ${this.title}"
              ></wa-icon>
            `
          : ''}
      </div>
    `;
  }
}

export default ListCard;
