import "@awesome.me/webawesome/dist/components/dropdown/dropdown";
import "@awesome.me/webawesome/dist/components/button/button";
import "@awesome.me/webawesome/dist/components/icon/icon";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { registerIconLibrary } from "@awesome.me/webawesome/dist/webawesome.js";
import { styles } from "./shared-menu.styles.js";

// Register Bootstrap Icons library
registerIconLibrary("bootstrap", {
  resolver: (name) => {
    return `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}.svg`;
  },
});

// Import product icons. These icons will be changed in the future, and are not being showed at the moment.
import droneIcon from "./assets/icon-drone.png";
import oamIcon from "./assets/icon-oam.png";
import tmIcon from "./assets/icon-tm.png";
import fairIcon from "./assets/icon-fair.png";
import fieldIcon from "./assets/icon-field.png";
import chatmapIcon from "./assets/icon-chatmap.png";
import exportIcon from "./assets/icon-export.png";
import umapIcon from "./assets/icon-umap.png";

interface Product {
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

const PRODUCTS_DATA: Product[] = [
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

@customElement("hotosm-shared-menu")
export class SharedMenu extends LitElement {
  static styles = styles;

  @property({ type: Boolean, attribute: "show-logos", reflect: false })
  showLogos = false;

  private products: Product[] = PRODUCTS_DATA;

  private getProductsBySection(sectionId: string): Product[] {
    return this.products.filter((p) => p.section === sectionId);
  }

  private handleSelect(event: CustomEvent) {
    const selectedValue = event.detail.item.value;
    const product = this.products.find((p) => p.id === selectedValue);

    if (product) {
      // Dispatch custom event for external handling if needed
      this.dispatchEvent(
        new CustomEvent("product-selected", {
          detail: { product },
          bubbles: true,
          composed: true,
        })
      );

      // Open product page in new tab
      window.open(product.href, "_blank", "noopener,noreferrer");
    }
  }

  render() {
    return html`
      <wa-dropdown placement="bottom-end" @wa-select=${this.handleSelect}>
        <wa-button
          slot="trigger"
          appearance="plain"
          aria-label="Open products menu"
        >
          <wa-icon
            library="bootstrap"
            name="grid-3x3-gap-fill"
            class="menu-icon"
          ></wa-icon>
        </wa-button>

        ${SECTIONS.map((section, sectionIndex) => {
          const products = this.getProductsBySection(section.id);
          if (products.length === 0) return "";

          return html`
            <div
              class="section-group ${sectionIndex > 0 ? "section-divider" : ""}"
            >
              <wa-dropdown-label>${section.title}</wa-dropdown-label>
              ${products.map(
                (product) => html`
                  <wa-dropdown-item value="${product.id}">
                    ${this.showLogos
                      ? html`<img
                          slot="icon"
                          src="${product.icon}"
                          alt="${product.title}"
                          style="width: 32px; height: 32px; object-fit: contain; display: block;"
                        />`
                      : ""}
                    <div class="product-content">
                      <div class="product-title">${product.title}</div>
                    </div>
                  </wa-dropdown-item>
                `
              )}
            </div>
          `;
        })}
                </wa-dropdown-item>
          
       
      </wa-dropdown>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hotosm-shared-menu": SharedMenu;
  }
}
