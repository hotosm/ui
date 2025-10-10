import { vi } from 'vitest'
vi.mock('src/components/icons.ts', () => ({
  __esModule: true,
  default: () => {},                 // if default import is used
  registerBundledIcons: () => {},    // named export used by header
  tryRegister: () => {},             // extra safety if referenced
}))
// Optional: if your source sometimes imports without ".ts", mock that too.
vi.mock('src/components/icons', () => ({
  __esModule: true,
  default: () => {},
  registerBundledIcons: () => {},
  tryRegister: () => {},
}))
// Mock the theme injector fully (add setupAutoInjection!)
vi.mock('src/utils/shadow-dom-css.ts', () => ({
  setupAutoInjection: () => {},
  injectCSSIntoShadowDOM: () => {},
  injectHOTThemeIntoButtons: () => {},
  injectHOTThemeIntoAllComponents: () => {},
}))

// (Optional) if your source sometimes imports without ".ts", mock that too.
vi.mock('src/utils/shadow-dom-css', () => ({
  setupAutoInjection: () => {},
  injectCSSIntoShadowDOM: () => {},
  injectHOTThemeIntoButtons: () => {},
  injectHOTThemeIntoAllComponents: () => {},
}))

vi.mock('src/utils/hanko.ts', () => ({
  registerHanko: async () => {
    // define minimal custom elements so template can render without errors
    if (!customElements.get('hanko-auth')) customElements.define('hanko-auth', class extends HTMLElement {})
    if (!customElements.get('hanko-profile')) customElements.define('hanko-profile', class extends HTMLElement {})
    return
  },
}))

