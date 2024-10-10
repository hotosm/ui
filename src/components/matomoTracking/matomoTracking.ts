import Tracking from './matomoTracking.component.js';

export * from './matomoTracking.component.js';
export default Tracking;

declare global {
  interface HTMLElementTagNameMap {
    'hot-tracking': Tracking;
  }
}

