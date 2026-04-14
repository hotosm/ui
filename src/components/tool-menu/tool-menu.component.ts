// Dynamic imports: resolved by bundlers, ignored gracefully for CDN usage
// where webawesome.loader.js registers all wa-* elements globally.
Promise.allSettled([
  import("@awesome.me/webawesome/dist/components/dropdown/dropdown.js"),
  import("@awesome.me/webawesome/dist/components/button/button.js"),
  import("@awesome.me/webawesome/dist/components/icon/icon.js"),
]);
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "./tool-menu.styles.js";
import gridIcon from "./assets/grid-icon.svg";
// Import tools icons. These icons will be added in the near future, and are not being showed as default.
import droneIcon from "./assets/icon-drone.svg";
import oamIcon from "./assets/icon-oam.svg";
import tmIcon from "./assets/icon-tm.svg";
import fairIcon from "./assets/icon-fair.svg";
import fieldIcon from "./assets/icon-field.svg";
import chatmapIcon from "./assets/icon-chatmap.svg";
import exportIcon from "./assets/icon-export.svg";
import umapIcon from "./assets/icon-umap.svg";

interface Tool {
  id: string;
  title: string;
  href: string;
  icon: string;
  section: "imagery" | "mapping" | "field" | "data";
}

interface Section {
  id: "imagery" | "mapping" | "field" | "data";
  title: string;
}

// Section titles
const SECTIONS: Section[] = [
  { id: "imagery", title: "Imagery" },
  { id: "mapping", title: "Mapping" },
  { id: "field", title: "Field" },
  { id: "data", title: "Data" },
];

const TOOLS_DATA: Tool[] = [
  {
    id: "drone",
    title: "Drone Tasking Manager",
    href: "https://dronetm.org/",
    icon: droneIcon,
    section: "imagery",
  },
  {
    id: "oam",
    title: "OpenAerialMap",
    href: "https://openaerialmap.org/",
    icon: oamIcon,
    section: "imagery",
  },
  {
    id: "tasking-manager",
    title: "Tasking Manager",
    href: "https://tasks.hotosm.org/",
    icon: tmIcon,
    section: "mapping",
  },
  {
    id: "fair",
    title: "fAIr",
    href: "https://fair.hotosm.org/",
    icon: fairIcon,
    section: "mapping",
  },
  {
    id: "field",
    title: "Field Mapping Tasking Manager",
    href: "https://fmtm.hotosm.org/",
    icon: fieldIcon,
    section: "field",
  },
  {
    id: "chat-map",
    title: "ChatMap",
    href: "https://www.hotosm.org/tech-suite/chatmap/",
    icon: chatmapIcon,
    section: "field",
  },
  {
    id: "export-tool",
    title: "Export Tool",
    href: "https://export.hotosm.org/",
    icon: exportIcon,
    section: "data",
  },
  {
    id: "umap",
    title: "Maps",
    href: "https://umap.hotosm.org/",
    icon: umapIcon,
    section: "data",
  },
];

export class HotToolMenu extends LitElement {
  static styles = styles;

  @property({ type: Boolean, attribute: "show-logos", reflect: false })
  showLogos = false;

  private tools: Tool[] = TOOLS_DATA;

  private getToolsBySection(sectionId: string): Tool[] {
    return this.tools.filter((t) => t.section === sectionId);
  }

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

        ${SECTIONS.map((section, sectionIndex) => {
          const tools = this.getToolsBySection(section.id);
          if (tools.length === 0) return "";

          return html`
            <div
              class="section-group ${sectionIndex > 0 ? "section-divider" : ""}"
            >
              <wa-dropdown-label>${section.title}</wa-dropdown-label>
              ${tools.map(
                (tool) => html`
                  <wa-dropdown-item value="${tool.id}">
                    ${
                      this.showLogos
                        ? html`<img
                          slot="icon"
                          src="${tool.icon}"
                          alt="${tool.title}"
                          style="width: 32px; height: 32px; object-fit: contain; display: block;"
                        />`
                        : ""
                    }
                    <div class="tool-content">
                      <div class="tool-title">${tool.title}</div>
                    </div>
                  </wa-dropdown-item>
                `,
              )}
            </div>
          `;
        })}
      </wa-dropdown>
    `;
  }
}

export default HotToolMenu;
