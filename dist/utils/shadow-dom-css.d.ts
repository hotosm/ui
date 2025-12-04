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
/**
 * Injects CSS into the shadow DOM of elements
 * @param options Configuration options for CSS injection
 */
export declare function injectCSSIntoShadowDOM(
  options: CSSInjectionOptions
): void;
