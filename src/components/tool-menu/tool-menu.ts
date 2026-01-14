import HotToolMenu from './tool-menu.component.js';
export default HotToolMenu;

declare global {
  interface HTMLElementTagNameMap {
    'hotosm-tool-menu': HotToolMenu;
  }
}

// Define web component
customElements.define("hotosm-tool-menu", HotToolMenu);
