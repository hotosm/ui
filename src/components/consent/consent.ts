import Consent from "./consent.component.js";
export default Consent;

declare global {
  interface HTMLElementTagNameMap {
    "hot-consent": Consent;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get("hot-consent")) {
  customElements.define("hot-consent", Consent);
}
