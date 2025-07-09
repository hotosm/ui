import Logo from './logo.component.js';
export default Logo;

declare global {
    interface HTMLElementTagNameMap {
        'hot-logo': Logo;
    }
}

// React 19
declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'hot-logo': Logo;
      }
    }
}
