import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class HotElement extends LitElement {
  // Make localization attribute reactive
  @property() lang: string;

  // NOTE: register component without decorator, to allow for import via React wrapper
  static define(name: string, elementConstructor = this, options: ElementDefinitionOptions = {}) {
    const currentlyRegisteredConstructor = customElements.get(name) as
      | CustomElementConstructor
      | typeof HotElement;

    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {} as unknown as CustomElementConstructor, options);
    }
  }
}

export interface HotElementProps extends HotElement {
  name: string;
  disabled?: boolean;
}
