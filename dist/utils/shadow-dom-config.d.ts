/**
 * Configuration for shadow DOM handling in HOT UI components
 */
export interface ShadowDOMConfig {
    /** Whether to disable shadow DOM for Lit components */
    disableShadowDOM: boolean;
    /** Whether to inject CSS into shadow DOM when not disabled */
    injectCSS: boolean;
    /** Whether to use mutation observers for dynamic content */
    useMutationObserver: boolean;
}
/**
 * Default configuration
 * - disableShadowDOM: false (keep shadow DOM for encapsulation)
 * - injectCSS: true (inject HOT theme CSS into shadow DOM)
 * - useMutationObserver: true (automatically handle dynamic content)
 */
export declare const defaultShadowDOMConfig: ShadowDOMConfig;
/**
 * Configuration that disables shadow DOM entirely
 * Use this when you want global CSS to penetrate all components
 */
export declare const noShadowDOMConfig: ShadowDOMConfig;
/**
 * Configuration that keeps shadow DOM but injects CSS
 * Use this for maximum encapsulation with HOT theming
 */
export declare const injectCSSConfig: ShadowDOMConfig;
/**
 * Global configuration instance
 * Can be modified at runtime to change behavior
 */
export declare let globalShadowDOMConfig: ShadowDOMConfig;
/**
 * Set the global shadow DOM configuration
 * @param config The configuration to use
 */
export declare function setShadowDOMConfig(config: ShadowDOMConfig): void;
/**
 * Get the current global shadow DOM configuration
 * @returns The current configuration
 */
export declare function getShadowDOMConfig(): ShadowDOMConfig;
/**
 * Helper function to determine if shadow DOM should be disabled for a component
 * @returns True if shadow DOM should be disabled
 */
export declare function shouldDisableShadowDOM(): boolean;
/**
 * Helper function to determine if CSS should be injected into shadow DOM
 * @returns True if CSS should be injected
 */
export declare function shouldInjectCSS(): boolean;
/**
 * Helper function to determine if mutation observers should be used
 * @returns True if mutation observers should be used
 */
export declare function shouldUseMutationObserver(): boolean;
