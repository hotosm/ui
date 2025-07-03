import Header from './header.component.js';

export * from './header.component.js';
export default Header;

declare global {
  interface HTMLElementTagNameMap {
    'hot-header': Header;
  }
}

// Define web component
customElements.define("hot-header", Header);
