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
export declare function injectCSSIntoShadowDOM(options: CSSInjectionOptions): void;
/**
 * Injects HOT theme CSS variables into wa-button shadow DOM
 * This makes the HOT theme variables available within the shadow DOM
 */
export declare function injectHOTThemeIntoButtons(): void;
/**
 * Injects CSS into all WebAwesome components that need HOT theme styling
 */
export declare function injectHOTThemeIntoAllComponents(): void;
/**
 * Sets up a mutation observer to automatically inject CSS into new WebAwesome elements
 * This ensures that dynamically added components also get the HOT theme
 */
export declare function setupAutoInjection(): void;
