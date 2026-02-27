import Logo from './logo.component.js';
export default Logo;

declare global {
  interface HTMLElementTagNameMap {
    'hot-logo': Logo;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get('hot-logo')) {
  customElements.define('hot-logo', Logo);
}
