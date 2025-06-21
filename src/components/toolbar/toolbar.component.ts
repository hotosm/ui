import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button-group/button-group.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/icon/icon.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/tooltip/tooltip.js';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from './toolbar.styles.js';
import type { CSSResultGroup } from 'lit';

import registerBundledIcons from "../icons.js"
registerBundledIcons();

export class Toolbar extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = "hot-toolbar";

  /** Change the position of the tooltips relative to buttons. */
  @property({ type: String, attribute: "tooltip-position" })
  accessor tooltipPosition = "top";

  protected render() {
    return html`
      <div class="toolbar">
        ${this.renderButtonGroup("History", [
          {
            icon: "rotate-left",
            label: "Undo",
            action: this.undo,
          },
          {
            icon: "rotate-right",
            label: "Redo",
            action: this.redo,
          },
        ])}
        ${this.renderButtonGroup("Formatting", [
          {
            icon: "bold",
            label: "Bold",
            action: this.bold,
          },
          {
            icon: "italic",
            label: "Italic",
            action: this.italic,
          },
          {
            icon: "underline",
            label: "Underline",
            action: this.underline,
          },
        ])}
        ${this.renderButtonGroup("Alignment", [
          {
            icon: "align-left",
            label: "Align Left",
            action: this.alignLeft,
          },
          {
            icon: "align-center",
            label: "Align Center",
            action: this.alignCenter,
          },
          {
            icon: "align-right",
            label: "Align Right",
            action: this.alignRight,
          },
        ])}
      </div>
    `;
  }

  private renderButtonGroup(
    label: string,
    buttons: Array<{
      icon: string;
      label: string;
      action?: (e: MouseEvent) => void;
    }>
  ) {
    return html`
      <wa-button-group label=${label}>
        ${buttons.map((button) => this.renderButton(button))}
      </wa-button-group>
    `;
  }

  private renderButton({
    icon,
    label,
    action,
  }: {
    icon: string;
    label: string;
    action?: (e: MouseEvent) => void;
  }) {
    return html`
      <wa-button @click=${action ?? (() => {})} aria-label=${label}>
        <wa-icon 
          family="classic" 
          variant="solid" 
          name=${icon} 
          label=${label}
        ></wa-icon>
      </wa-button>
    `;
  }

  private readonly undo = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("undo"));
  };

  private readonly redo = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("redo"));
  };

  private readonly bold = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("bold"));
  };

  private readonly italic = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("italic"));
  };

  private readonly underline = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("underline"));
  };

  private readonly alignLeft = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("leftalign"));
  };

  private readonly alignCenter = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("centeralign"));
  };

  private readonly alignRight = (e: MouseEvent) => {
    e.stopPropagation();
    this.dispatchEvent(new Event("rightalign"));
  };
}

export default Toolbar;

// Define web component
customElements.define("hot-toolbar", Toolbar);
