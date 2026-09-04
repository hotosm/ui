import HotToolMenu from "./tool-menu.component.js";
export default HotToolMenu;

declare global {
  interface HTMLElementTagNameMap {
    "hot-tool-menu": HotToolMenu;
    /** @deprecated Use `hot-tool-menu` - this alias is removed in the next major release. */
    "hotosm-tool-menu": HotToolMenu;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get("hot-tool-menu")) {
  customElements.define("hot-tool-menu", HotToolMenu);
}

/**
 * Deprecated `hotosm-tool-menu` tag, kept so tools that already integrated it
 * keep working. A subclass is required because a constructor can only be
 * registered under a single tag name.
 *
 * @deprecated Use `hot-tool-menu` instead.
 */
class DeprecatedHotToolMenu extends HotToolMenu {
  private static warned = false;

  connectedCallback() {
    super.connectedCallback();

    if (!DeprecatedHotToolMenu.warned) {
      DeprecatedHotToolMenu.warned = true;
      console.warn(
        "<hotosm-tool-menu> is deprecated and will be removed in the next major " +
          "release of @hotosm/ui. Use <hot-tool-menu> instead.",
      );
    }
  }
}

if (!customElements.get("hotosm-tool-menu")) {
  customElements.define("hotosm-tool-menu", DeprecatedHotToolMenu);
}
