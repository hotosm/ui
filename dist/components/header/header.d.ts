import Header from './header.component.js';
export default Header;

declare global {
    interface HTMLElementTagNameMap {
        'hot-header': Header;
    }
}

// React 19
declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'hot-header': Header;
      }
    }
}
