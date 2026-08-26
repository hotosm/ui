// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import("@awesome.me/webawesome/dist/components/dropdown/dropdown.js"),
  import("@awesome.me/webawesome/dist/components/button/button.js"),
  import("@awesome.me/webawesome/dist/components/icon/icon.js"),
]);
import { LitElement, html } from "lit";
import { styles } from "./tool-menu.styles.js";
import gridIcon from "./assets/grid-icon.svg";
// Tool logos, shown next to every item in the menu.
import droneIcon from "./assets/icon-drone.svg";
import oamIcon from "./assets/icon-oam.svg";
import tmIcon from "./assets/icon-tm.svg";
import fairIcon from "./assets/icon-fair.svg";
import fieldIcon from "./assets/icon-field.svg";
import chatmapIcon from "./assets/icon-chatmap.svg";
import exportIcon from "./assets/icon-export.svg";
import umapIcon from "./assets/icon-umap.svg";
import portalIcon from "./assets/icon-portal.svg";

interface Tool {
  id: string;
  title: string;
  href: string;
  icon: string;
}

const TOOLS_DATA: Tool[] = [
  {
    id: "drone",
    title: "Drone Tasking Manager",
    href: "https://drone.hotosm.org/",
    icon: droneIcon,
  },
  {
    id: "oam",
    title: "OpenAerialMap",
    href: "https://openaerialmap.org/",
    icon: oamIcon,
  },
  {
    id: "tasking-manager",
    title: "Tasking Manager",
    href: "https://tasks.hotosm.org/",
    icon: tmIcon,
  },
  {
    id: "fair",
    title: "fAIr",
    href: "https://fair.hotosm.org/",
    icon: fairIcon,
  },
  {
    id: "field",
    title: "Field Tasking Manager",
    href: "https://field.hotosm.org/",
    icon: fieldIcon,
  },
  {
    id: "chat-map",
    title: "ChatMap",
    href: "https://chatmap.hotosm.org/",
    icon: chatmapIcon,
  },
  {
    id: "export-tool",
    title: "Export Tool",
    href: "https://export.hotosm.org/",
    icon: exportIcon,
  },
  {
    id: "umap",
    title: "uMap",
    href: "https://umap.hotosm.org/",
    icon: umapIcon,
  },
  {
    id: "portal",
    title: "Portal",
    href: "https://portal.hotosm.org/",
    icon: portalIcon,
  },
];

export class HotToolMenu extends LitElement {
  static styles = styles;

  private tools: Tool[] = TOOLS_DATA;

  private handleSelect(event: CustomEvent) {
    const selectedValue = event.detail.item.value;
    const tool = this.tools.find((t) => t.id === selectedValue);

    if (tool) {
      // Dispatch custom event for external handling if needed
      this.dispatchEvent(
        new CustomEvent("tool-selected", {
          detail: { tool },
          bubbles: true,
          composed: true,
        }),
      );

      // Open tool page in new tab
      window.open(tool.href, "_blank", "noopener,noreferrer");
    }
  }

  render() {
    return html`
      <wa-dropdown placement="bottom-end" @wa-select=${this.handleSelect}>
        <wa-button
          slot="trigger"
          appearance="plain"
          aria-label="Open tools menu"
        >
          <wa-icon src="${gridIcon}" class="menu-icon"></wa-icon>
        </wa-button>

        ${this.tools.map(
          (tool) => html`
            <wa-dropdown-item value="${tool.id}">
              <img
                slot="icon"
                class="tool-logo"
                src="${tool.icon}"
                alt=""
              />
              <div class="tool-title">${tool.title}</div>
            </wa-dropdown-item>
          `,
        )}
      </wa-dropdown>
    `;
  }
}

export default HotToolMenu;
