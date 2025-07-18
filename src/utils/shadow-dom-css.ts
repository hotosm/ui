/**
 * Utility to inject CSS into shadow DOM elements
 * This is needed because WebAwesome components use shadow DOM and CSS variables
 * from the global scope are not accessible within the shadow DOM
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

/**
 * Injects CSS into the shadow DOM of WebAwesome components
 * @param options Configuration options for CSS injection
 */
export function injectCSSIntoShadowDOM(options: CSSInjectionOptions): void {
  const { css, selector = 'wa-button', all = true, styleId = 'hot-theme-injection' } = options;

  // Find all matching elements
  const elements = all 
    ? document.querySelectorAll(selector) 
    : [document.querySelector(selector)].filter(Boolean);

  elements.forEach((element) => {
    if (!element || !element.shadowRoot) return;

    // Check if we've already injected this style
    const existingStyle = element.shadowRoot.getElementById(styleId);
    if (existingStyle) return;

    // Create and inject the style element
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = css;
    element.shadowRoot.appendChild(styleElement);
  });
}

/**
 * Injects HOT theme CSS variables into wa-button shadow DOM
 * This makes the HOT theme variables available within the shadow DOM
 */
export function injectHOTThemeIntoButtons(): void {
  const hotThemeCSS = `
    :host {
      /* HOT Color Primitives */
      --hot-color-red-950: #A52A28;
      --hot-color-red-900: #B9302D;
      --hot-color-red-800: #B83032;
      --hot-color-red-700: #C53639;
      --hot-color-red-600: #D73F3F;
      --hot-color-red-500: #F34D47;
      --hot-color-red-400: #ED5C5E;
      --hot-color-red-300: #E27A7D;
      --hot-color-red-200: #EC9EA1;
      --hot-color-red-100: #FDD0D6;
      --hot-color-red-50: #FEECEF;

      --hot-color-rose-950: #3E030B;
      --hot-color-rose-900: #4B040E;
      --hot-color-rose-800: #5C1517;
      --hot-color-rose-700: #6B231D;
      --hot-color-rose-600: #7C2E26;
      --hot-color-rose-500: #7D463F;
      --hot-color-rose-400: #9E6960;
      --hot-color-rose-300: #B3837B;
      --hot-color-rose-200: #CFA59E;
      --hot-color-rose-100: #EAC7C0;
      --hot-color-rose-50: #FFE6DE;

      --hot-color-yellow-950: #CC6508;
      --hot-color-yellow-900: #E8750C;
      --hot-color-yellow-800: #F77D0F;
      --hot-color-yellow-700: #FAA71E;
      --hot-color-yellow-600: #FCBF26;
      --hot-color-yellow-500: #FED82E;
      --hot-color-yellow-400: #FAE62E;
      --hot-color-yellow-300: #FDEB51;
      --hot-color-yellow-200: #FFF072;
      --hot-color-yellow-100: #FFF59B;
      --hot-color-yellow-50: #FFF9C3;

      --hot-color-blue-950: #111C31;
      --hot-color-blue-900: #182642;
      --hot-color-blue-800: #20365B;
      --hot-color-blue-700: #263F68;
      --hot-color-blue-600: #2E4873;
      --hot-color-blue-500: #344F7B;
      --hot-color-blue-400: #53688B;
      --hot-color-blue-300: #71829E;
      --hot-color-blue-200: #97A5BA;
      --hot-color-blue-100: #BFC8D6;
      --hot-color-blue-50: #E6E9EE;

      --hot-color-cyan-950: #2B514F;
      --hot-color-cyan-900: #366361;
      --hot-color-cyan-800: #408789;
      --hot-color-cyan-700: #459BA0;
      --hot-color-cyan-600: #4BB1B9;
      --hot-color-cyan-500: #50C1CB;
      --hot-color-cyan-400: #58CBD1;
      --hot-color-cyan-300: #6AD4D9;
      --hot-color-cyan-200: #8FE1E3;
      --hot-color-cyan-100: #B9EDED;
      --hot-color-cyan-50: #E3F8F8;

      --hot-color-gray-950: #2C3038;
      --hot-color-gray-900: #404248;
      --hot-color-gray-800: #515057;
      --hot-color-gray-700: #615F66;
      --hot-color-gray-600: #716F73;
      --hot-color-gray-500: #828085;
      --hot-color-gray-400: #9A969B;
      --hot-color-gray-300: #B3B0B3;
      --hot-color-gray-200: #C4C3C5;
      --hot-color-gray-100: #E1E0E1;
      --hot-color-gray-50: #F3F3F3;

      /* HOT Semantic Colors */
      --hot-color-primary-950: var(--hot-color-red-950);
      --hot-color-primary-900: var(--hot-color-red-900);
      --hot-color-primary-800: var(--hot-color-red-800);
      --hot-color-primary-700: var(--hot-color-red-700);
      --hot-color-primary-600: var(--hot-color-red-600);
      --hot-color-primary-500: var(--hot-color-red-500);
      --hot-color-primary-400: var(--hot-color-red-400);
      --hot-color-primary-300: var(--hot-color-red-300);
      --hot-color-primary-200: var(--hot-color-red-200);
      --hot-color-primary-100: var(--hot-color-red-100);
      --hot-color-primary-50: var(--hot-color-red-50);

      --hot-color-danger-950: var(--hot-color-red-950);
      --hot-color-danger-900: var(--hot-color-red-900);
      --hot-color-danger-800: var(--hot-color-red-800);
      --hot-color-danger-700: var(--hot-color-red-700);
      --hot-color-danger-600: var(--hot-color-red-600);
      --hot-color-danger-500: var(--hot-color-red-500);
      --hot-color-danger-400: var(--hot-color-red-400);
      --hot-color-danger-300: var(--hot-color-red-300);
      --hot-color-danger-200: var(--hot-color-red-200);
      --hot-color-danger-100: var(--hot-color-red-100);
      --hot-color-danger-50: var(--hot-color-red-50);

      --hot-color-warning-950: var(--hot-color-yellow-950);
      --hot-color-warning-900: var(--hot-color-yellow-900);
      --hot-color-warning-800: var(--hot-color-yellow-800);
      --hot-color-warning-700: var(--hot-color-yellow-700);
      --hot-color-warning-600: var(--hot-color-yellow-600);
      --hot-color-warning-500: var(--hot-color-yellow-500);
      --hot-color-warning-400: var(--hot-color-yellow-400);
      --hot-color-warning-300: var(--hot-color-yellow-300);
      --hot-color-warning-200: var(--hot-color-yellow-200);
      --hot-color-warning-100: var(--hot-color-yellow-100);
      --hot-color-warning-50: var(--hot-color-yellow-50);

      --hot-color-success-950: #031608;
      --hot-color-success-900: #052310;
      --hot-color-success-800: #0a3a1d;
      --hot-color-success-700: #0a5027;
      --hot-color-success-600: #036730;
      --hot-color-success-500: #00883c;
      --hot-color-success-400: #00ac49;
      --hot-color-success-300: #5dc36f;
      --hot-color-success-200: #93da98;
      --hot-color-success-100: #c2f2c1;
      --hot-color-success-50: #e3f9e3;

      --hot-color-neutral-1000: #ffffff;
      --hot-color-neutral-950: var(--hot-color-gray-950);
      --hot-color-neutral-900: var(--hot-color-gray-900);
      --hot-color-neutral-800: var(--hot-color-gray-800);
      --hot-color-neutral-700: var(--hot-color-gray-700);
      --hot-color-neutral-600: var(--hot-color-gray-600);
      --hot-color-neutral-500: var(--hot-color-gray-500);
      --hot-color-neutral-400: var(--hot-color-gray-400);
      --hot-color-neutral-300: var(--hot-color-gray-300);
      --hot-color-neutral-200: var(--hot-color-gray-200);
      --hot-color-neutral-100: var(--hot-color-gray-100);
      --hot-color-neutral-50: var(--hot-color-gray-50);
      --hot-color-neutral-0: #000000;

      /* HOT Typography */
      --hot-font-sans: Archivo, -apple-system, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      --hot-font-sans-variant: 'Barlow';
      --hot-font-sans-variant-condensed: 'Barlow Condensed';
      --hot-font-sefif: Georgia, 'Times New Roman', serif;
      --hot-font-mono: Menlo, Monaco, Consolas, 'Courier New', monospace, Consolas, 'Liberation Mono', Menlo, monospace;

      --hot-font-size-2x-small: 0.625rem;
      --hot-font-size-x-small: 0.75rem;
      --hot-font-size-small: 0.875rem;
      --hot-font-size-medium: 1rem;
      --hot-font-size-large: 1.25rem;
      --hot-font-size-x-large: 1.5rem;
      --hot-font-size-2x-large: 2.25rem;
      --hot-font-size-3x-large: 3rem;
      --hot-font-size-4x-large: 4.5rem;

      --hot-font-weight-light: 300;
      --hot-font-weight-normal: 400;
      --hot-font-weight-semibold: 500;
      --hot-font-weight-bold: 700;

      --hot-letter-spacing-denser: -0.03em;
      --hot-letter-spacing-dense: -0.015em;
      --hot-letter-spacing-normal: normal;
      --hot-letter-spacing-loose: 0.075em;
      --hot-letter-spacing-looser: 0.15em;

      --hot-line-height-denser: 1;
      --hot-line-height-dense: 1.4;
      --hot-line-height-normal: 1.8;
      --hot-line-height-loose: 2.2;
      --hot-line-height-looser: 2.6;

      /* HOT Spacing */
      --hot-spacing-3x-small: 0.125rem;
      --hot-spacing-2x-small: 0.25rem;
      --hot-spacing-x-small: 0.5rem;
      --hot-spacing-small: 0.75rem;
      --hot-spacing-medium: 1rem;
      --hot-spacing-large: 1.25rem;
      --hot-spacing-x-large: 1.75rem;
      --hot-spacing-2x-large: 2.25rem;
      --hot-spacing-3x-large: 3rem;
      --hot-spacing-4x-large: 4.5rem;

      /* HOT Border Radius */
      --hot-border-radius-small: 0.1875rem;
      --hot-border-radius-medium: 0.25rem;
      --hot-border-radius-large: 0.5rem;
      --hot-border-radius-x-large: 1rem;
      --hot-border-radius-circle: 50%;
      --hot-border-radius-pill: 9999px;
    }

    /* Custom button styles for login button */
    :host(.login-button)::part(base) {
      background-color: var(--hot-color-primary-500);
      color: white;
      font-weight: var(--hot-font-weight-semibold);
      padding: 0.6rem 1.2rem;
      border-radius: var(--hot-border-radius-large);
      border: none;
      transition: background-color 0.2s ease;
    }

    :host(.login-button)::part(base):hover {
      background-color: var(--hot-color-primary-600);
    }

    :host(.login-button)::part(base):active {
      background-color: var(--hot-color-primary-700);
    }

    /* Gradient button styles */
    :host(.gradient-button)::part(base) {
      background: linear-gradient(217deg, var(--hot-color-primary-50), var(--hot-color-rose-50), var(--hot-color-red-50));
      border: solid 1px var(--hot-color-rose-50);
      transition: transform 100ms, box-shadow 100ms;
    }

    :host(.gradient-button)::part(base):hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
    }

    :host(.gradient-button)::part(base):active {
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
      transform: translateY(0);
    }

    :host(.gradient-button)::part(label) {
      color: white;
      text-shadow: rgb(0 0 0 / 0.3) 0 -1px;
    }
  `;

  injectCSSIntoShadowDOM({
    css: hotThemeCSS,
    selector: 'wa-button',
    all: true,
    styleId: 'hot-theme-variables'
  });
}

/**
 * Sets up a mutation observer to automatically inject CSS into new wa-button elements
 * This ensures that dynamically added buttons also get the HOT theme
 */
export function setupAutoInjection(): void {
  // Initial injection for existing elements
  injectHOTThemeIntoButtons();

  // Set up observer for dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          
          // Check if the added element is a wa-button
          if (element.tagName.toLowerCase() === 'wa-button') {
            injectHOTThemeIntoButtons();
          }
          
          // Check for wa-button elements within the added element
          const buttons = element.querySelectorAll('wa-button');
          if (buttons.length > 0) {
            injectHOTThemeIntoButtons();
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
} 