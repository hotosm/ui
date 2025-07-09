import Consent from './consent.component.js';
export default Consent;

declare global {
    interface HTMLElementTagNameMap {
        'hot-consent': Consent;
    }
}

// React 19
declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'hot-consent': Consent;
      }
    }
}
