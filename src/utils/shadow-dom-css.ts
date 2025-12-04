/**
 * Utility to inject CSS into shadow DOM elements
 *
 * This utility is kept for potential future use with other shadow DOM components.
 */

export interface CSSInjectionOptions {
  /** The CSS string to inject */
  css: string;
  /** CSS selector to find elements to inject into */
  selector?: string;
  /** Whether to inject into all matching elements or just the first */
  all?: boolean;
  /** Custom style ID to avoid duplicate injections */
  styleId?: string;
}

function querySelectorAllDeep(
  selector: string,
  root: Document | Element | ShadowRoot = document
): Element[] {
  const elements: Element[] = [];

  const matches = root.querySelectorAll(selector);
  elements.push(...Array.from(matches));

  const allElements = root.querySelectorAll('*');
  allElements.forEach((element) => {
    if (element.shadowRoot) {
      elements.push(...querySelectorAllDeep(selector, element.shadowRoot));
    }
  });

  return elements;
}

/**
 * Injects CSS into the shadow DOM of elements
 * @param options Configuration options for CSS injection
 */
export function injectCSSIntoShadowDOM(options: CSSInjectionOptions): void {
  const {
    css,
    selector = 'wa-button',
    all = true,
    styleId = 'hot-theme-injection',
  } = options;

  // Find all matching elements, including those in nested shadow DOMs
  const elements = all
    ? querySelectorAllDeep(selector)
    : [querySelectorAllDeep(selector)[0]].filter(Boolean);

  elements.forEach((element) => {
    if (!element) return;

    // Wait for shadow root to be available
    const injectWhenReady = () => {
      if (!element.shadowRoot) {
        // Try again after a short delay
        setTimeout(injectWhenReady, 10);
        return;
      }

      // Check if we've already injected this style
      const existingStyle = element.shadowRoot.getElementById(styleId);
      if (existingStyle) return;

      // Create and inject the style element
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = css;
      element.shadowRoot.appendChild(styleElement);
    };

    injectWhenReady();
  });
}
