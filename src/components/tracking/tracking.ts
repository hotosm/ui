import MatomoTracking from './tracking.component.js';

export * from './tracking.component.js';
export default MatomoTracking;

declare global {
  interface HTMLElementTagNameMap {
    'hot-tracking': MatomoTracking;
  }
}

// Define web component
customElements.define("hot-tracking", MatomoTracking);
