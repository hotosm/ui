import HotToolMenu from "./tool-menu.component.js";
export default HotToolMenu;

declare global {
  interface HTMLElementTagNameMap {
    "hotosm-tool-menu": HotToolMenu;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get("hotosm-tool-menu")) {
  customElements.define("hotosm-tool-menu", HotToolMenu);
}
