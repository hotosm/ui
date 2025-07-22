import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/drawer/drawer.js';
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
import { type sizes } from './header.styles.js';
interface MenuItem {
    label: string;
    clickEvent: () => void;
}
export declare class Header extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** Use a text-based title in the header. */
    accessor title: string;
    /** Display a logo on the left of the header. */
    accessor logo: string | URL;
    /** Add a drawer icon with a click event to e.g. open a sidebar. */
    accessor drawer: boolean;
    /** Array of menu items to include as navigation tabs. */
    accessor tabs: MenuItem[];
    /** Array of links to include in the drawer. */
    accessor drawerLinks: Array<{
        label: string;
        href: string;
    }>;
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
    connectedCallback(): Promise<void>;
    selectTab(index: number): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _tabClick;
    private _handleTabShow;
    private _handleLogin;
    private _handleModalClose;
    private _handleDrawerOpen;
}
export default Header;
