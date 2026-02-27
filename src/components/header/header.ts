import Header from './header.component.js';
export default Header;

declare global {
  interface HTMLElementTagNameMap {
    'hot-header': Header;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get('hot-header')) {
  customElements.define('hot-header', Header);
}
