import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from './button.styles.js';
import type { CSSResultGroup } from 'lit';

import registerBundledIcons from "../icons.js";
registerBundledIcons();

export class Button extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = 'hot-button';

  /** The button variant to use. */
  @property({ type: String })
  accessor variant: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger' = 'primary';

  /** The button size. */
  @property({ type: String })
  accessor size: 'small' | 'medium' | 'large' = 'medium';

  /** The button appearance. */
  @property({ type: String })
  accessor appearance: 'default' | 'icon' = 'default';

  /** Whether the button is disabled. */
  @property({ type: Boolean })
  accessor disabled = false;

  /** Whether the button is in loading state. */
  @property({ type: Boolean })
  accessor loading = false;

  /** The icon name to display. */
  @property({ type: String })
  accessor icon: string = '';

  /** The icon position relative to the text. */
  @property({ type: String })
  accessor iconPosition: 'start' | 'end' = 'start';

  /** The button type. */
  @property({ type: String })
  accessor type: 'button' | 'submit' | 'reset' = 'button';

  /** The HOT color variant to use. */
  @property({ type: String, attribute: 'hot-color' })
  accessor hotColor: 'red' | 'yellow' | 'blue' | 'cyan' | 'rose' | 'gray' | '' = '';

  protected render() {
    const buttonClass = `hot-button${this.hotColor ? ` hot-${this.hotColor}` : ''}`;
    
    return html`
      <wa-button
        variant="${this.variant}"
        size="${this.size}"
        appearance="${this.appearance}"
        ?disabled="${this.disabled}"
        ?loading="${this.loading}"
        type="${this.type}"
        class="${buttonClass}"
      >
        ${this.icon && this.iconPosition === 'start' ? html`
          <wa-icon name="${this.icon}" slot="icon"></wa-icon>
        ` : null}
        <slot></slot>
        ${this.icon && this.iconPosition === 'end' ? html`
          <wa-icon name="${this.icon}" slot="icon"></wa-icon>
        ` : null}
      </wa-button>
    `;
  }
}

export default Button; 