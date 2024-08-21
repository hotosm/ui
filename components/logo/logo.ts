import "../../theme/hot.css";

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class Logo extends LitElement {

  @property() name = "hot-logo";

  /** Display the icon only */
  @property({ type: Boolean }) iconOnly: boolean = false;

  /** Display the text only */
  @property({ type: Boolean }) textOnly: boolean = false;

  protected render() {

    return html`
      <h1 class="hot-flex hot-flex-row">
        ${ !this.textOnly ? html`<img src="../../theme/logo/hot-logo-icon.svg" />` : null }
        ${ !this.iconOnly ? html`<img src="../../theme/logo/hot-logo-text.svg" />` : null }
      </h1>
    `;
  }

}

export default Logo;

// Define web component
customElements.define("hot-logo", Logo);
