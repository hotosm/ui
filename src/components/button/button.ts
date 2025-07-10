import Button from './button.component.js';
export default Button;

declare global {
  interface HTMLElementTagNameMap {
    'hot-button': Button;
  }
}

// Define web component
customElements.define("hot-button", Button); 