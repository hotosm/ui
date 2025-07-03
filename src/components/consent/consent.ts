import Consent from './consent.component.js';
export default Consent;

declare global {
  interface HTMLElementTagNameMap {
    'hot-consent': Consent;
  }
}

// Define web component
customElements.define("hot-consent", Consent);
