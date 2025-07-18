import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
import { type sizes } from './header.styles.js';
interface MenuItem {
    label: string;
    clickEvent: () => void;
}
export declare class Header extends LitElement {
    static styles: CSSResultGroup;
    static shadowRootOptions: ShadowRootInit;
    createRenderRoot(): DocumentFragment | HTMLElement;
    name: string;
    /** Use a text-based title in the header. */
    accessor title: string;
    /** Display a logo on the left of the header. */
    accessor logo: string | URL;
    /** Add a drawer icon with a click event to e.g. open a sidebar. */
    accessor drawer: boolean;
    /** Array of menu items to include as navigation tabs. */
    accessor tabs: MenuItem[];
    /** Size of toolbar vertically. */
    accessor size: sizes;
    /** Border bottom. */
    accessor borderBottom: boolean;
    /** Index of the selected tab. */
    accessor selectedTab: number;
    /** Show/hide login functionality. */
    accessor showLogin: boolean;
    /** Control the login modal state. */
    accessor loginModalOpen: boolean;
    /** Default fallback icon for providers without custom icons. */
    accessor defaultLoginIcon: string;
    private mutationObserver?;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    /**
     * Injects HOT theme CSS into the shadow DOM of wa-button components
     */
    private injectCSSIntoShadowDOM;
    /**
     * Sets up mutation observer to automatically inject CSS into new wa-button components
     */
    private setupMutationObserver;
    /**
     * Override updated() to inject CSS when new wa-button elements are added
     */
    updated(changedProperties: Map<string, unknown>): void;
    selectTab(index: number): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _tabClick;
    private _handleLogin;
    private _handleModalClose;
}
export default Header;
