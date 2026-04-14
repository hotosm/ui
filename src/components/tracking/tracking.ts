import MatomoTracking from "./tracking.component.js";
export default MatomoTracking;

declare global {
  interface HTMLElementTagNameMap {
    "hot-tracking": MatomoTracking;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get("hot-tracking")) {
  customElements.define("hot-tracking", MatomoTracking);
}
