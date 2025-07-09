import MatomoTracking from './tracking.component.js';
export default MatomoTracking;

declare global {
    interface HTMLElementTagNameMap {
        'hot-tracking': MatomoTracking;
    }
}

// React 19
declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'hot-tracking': MatomoTracking;
      }
    }
}
