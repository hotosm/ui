// tests/setupTests.ts

import './polyfills'  // our polyfills/mocks; must be first
import './mocks'      // our module mocks



// ----- Stub WebAwesome custom elements in tests -----
const realDefine = customElements.define.bind(customElements);

customElements.define = ((name: string, ctor: CustomElementConstructor, options?: ElementDefinitionOptions) => {
  // Short-circuit any attempt to (re)define wa-*; we just keep our no-op versions
  if (name.startsWith('wa-')) {
    if (!customElements.get(name)) {
      // lightweight element so headers can render <wa-button>, etc., without lifecycle
      realDefine(name, class extends HTMLElement {}, options);
    }
    return; // ignore the library's real define
  }
  return realDefine(name, ctor, options);
}) as any;

// Pre-register the ones likely used by <hot-header>
['wa-button','wa-icon','wa-badge','wa-dropdown','wa-tooltip','wa-spinner','wa-menu','wa-menu-item','wa-tab','wa-tabs']
  .forEach(tag => { if (!customElements.get(tag)) customElements.define(tag, class extends HTMLElement {}); });
// ----- end stubs -----












import '@testing-library/jest-dom'
import { configure } from '@testing-library/dom'

// Slightly shorter async timeout for faster failures
configure({ asyncUtilTimeout: 2000 })

// Optional: stubs for browser APIs some components might use
class NoopObserver { observe(){} unobserve(){} disconnect(){} }
;(globalThis as any).ResizeObserver = (globalThis as any).ResizeObserver ?? NoopObserver
;(globalThis as any).IntersectionObserver = (globalThis as any).IntersectionObserver ?? NoopObserver
