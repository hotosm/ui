import "../../theme/hot-sl.css";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/button-group/button-group.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from './toolbar.styles.js';
import type { CSSResultGroup } from 'lit';

import registerBundledIcons from "../../components/icons";

registerBundledIcons();

export class Toolbar extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = "hot-toolbar";

  /** Change the position of the tooltips relative to buttons. */
  @property({ type: String, attribute: "tooltip-position" })
  accessor tooltipPosition =
    "top";

  protected render() {
    return html`
      <div class="toolbar">
        ${this.renderButtonGroup("History", [
          {
            content: "Undo",
            icon: "arrow-counterclockwise",
            label: "Undo",
            action: this.undo,
          },
          {
            content: "Redo",
            icon: "arrow-clockwise",
            label: "Redo",
            action: this.redo,
          },
        ])}
        ${this.renderButtonGroup("Formatting", [
          {
            content: "Bold",
            icon: "type-bold",
            label: "Bold",
            action: this.bold,
          },
          {
            content: "Italic",
            icon: "type-italic",
            label: "Italic",
            action: this.italic,
          },
          {
            content: "Underline",
            icon: "type-underline",
            label: "Underline",
            action: this.underline,
          },
        ])}
        ${this.renderButtonGroup("Alignment", [
          {
            content: "Align Left",
            icon: "justify-left",
            label: "Align Left",
            action: this.alignLeft,
          },
          {
            content: "Align Center",
            icon: "justify",
            label: "Align Center",
            action: this.alignCenter,
          },
          {
            content: "Align Right",
            icon: "justify-right",
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
      content: string;
      icon: string;
      label: string;
      action?: (e: MouseEvent) => void;
    }>
  ) {
    return html`
      <sl-button-group label=${label}>
        ${buttons.map((button) => this.renderButton(button))}
      </sl-button-group>
    `;
  }

  private renderButton({
    content,
    icon,
    label,
    action,
  }: {
    content: string;
    icon: string;
    label: string;
    action?: (e: MouseEvent) => void;
  }) {
    return html`
      <sl-tooltip content=${content} placement="${this.tooltipPosition}">
        <sl-button @click=${action ?? (() => {})}
          ><sl-icon library="bundled" name=${icon} label=${label}></sl-icon
        ></sl-button>
      </sl-tooltip>
    `;
  }

  private readonly undo = (e: MouseEvent) => {
    // As the original event is also named 'click'
    // stop propagation of the original event
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
