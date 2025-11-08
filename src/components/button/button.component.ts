import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import styles from './button.styles.js';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'neutral';
export type ButtonSize = 'small' | 'medium' | 'large';

export class Button extends LitElement {
  static styles = [styles];
  name = 'hot-button';

  @property({ type: String })
  accessor variant: ButtonVariant = 'solid';

  @property({ type: String })
  accessor color: ButtonColor = 'primary';

  @property({ type: String })
  accessor size: ButtonSize = 'medium';

  @property({ type: Boolean })
  accessor disabled = false;

  @property({ type: Boolean })
  accessor fullWidth = false;

  @property({ type: String })
  accessor type: 'button' | 'submit' | 'reset';

  @property({ type: String })
  accessor icon = '';

  @property({ type: String })
  accessor iconLeft = '';

  @property({ type: String })
  accessor iconRight = '';

  private _handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('hot-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    const buttonClasses = {
      button: true,
      [`button--${this.variant}`]: true,
      [`button--${this.color}`]: true,
      [`button--${this.size}`]: true,
      'button--full-width': this.fullWidth,
      'button--icon-only': this.icon && !this.iconLeft && !this.iconRight,
    };

    return html`
      <button
        type=${this.type}
        class=${classMap(buttonClasses)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${this.icon && !this.iconLeft && !this.iconRight
          ? html`<wa-icon
              name=${this.icon}
              class="button__icon"
            ></wa-icon>`
          : ''}
        ${this.iconLeft
          ? html`<wa-icon
              name=${this.iconLeft}
              class="button__icon button__icon--left"
            ></wa-icon>`
          : ''}
        <slot></slot>
        ${this.iconRight
          ? html`<wa-icon
              name=${this.iconRight}
              class="button__icon button__icon--right"
            ></wa-icon>`
          : ''}
      </button>
    `;
  }
}

export default Button;
