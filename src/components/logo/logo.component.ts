import HotLogoIconSVG from "../../assets/logo/hot-logo-icon.svg";
import HotLogoTextSVG from "../../assets/logo/hot-logo-text.svg";

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from "./logo.styles.js";
import type { CSSResultGroup } from "lit";

export class Logo extends LitElement {
  static styles: CSSResultGroup = [styles];

  name = "hot-logo";

  @property({ type: Boolean, attribute: "icon-only" })
  accessor iconOnly = false;

  @property({ type: Boolean, attribute: "text-only" })
  accessor textOnly = false;

  protected render() {
    return html`
      <div class="logo">
        ${!this.textOnly ? html`<img src=${HotLogoIconSVG} alt="Logo" />` : null}
        ${!this.iconOnly ? html`<img src=${HotLogoTextSVG} alt="Logo" />` : null}
      </div>
    `;
  }
}

export default Logo;
