import Logo from './logo.component.js';

export * from './logo.component.js';
export default Logo;

declare global {
  interface HTMLElementTagNameMap {
    'hot-logo': Logo;
  }
}

// Define web component
customElements.define("hot-logo", Logo);
