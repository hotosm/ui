import Button from './button.component.js';

export default Button;
export type { ButtonVariant, ButtonColor, ButtonSize } from './button.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'hot-button': Button;
  }
}

customElements.define('hot-button', Button);
