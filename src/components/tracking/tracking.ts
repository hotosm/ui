import Tracking from './tracking.component.js';

export * from './tracking.component.js';
export default Tracking;

declare global {
  interface HTMLElementTagNameMap {
    'hot-tracking': Tracking;
  }
}

