import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import { LitElement } from "lit";
import { type sizes } from './header.styles.js';
import type { CSSResultGroup } from 'lit';
interface MenuItem {
    label: string;
    clickEvent: () => void;
}
interface LoginProvider {
    icon?: string;
    loginUrl: string;
    redirectUrl: string;
    clientId?: string;
    name?: string;
    scope?: string;
}
interface LoginProviders {
    [key: string]: LoginProvider;
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
    /** Configuration object for login providers. */
    accessor loginProviders: LoginProviders;
    /** Default fallback icon for providers without custom icons. */
    accessor defaultLoginIcon: string;
    accessor osmOauthUrl: string;
    accessor OsmOauthClientId: string;
    accessor OsmOauthRedirectUri: string;
    private get loginOptions();
    private formatProviderName;
    selectTab(index: number): void;
    private performLogin;
    private legacyOsmLoginRedirect;
    private handleSignIn;
    protected render(): import("lit").TemplateResult<1>;
    private _tabClick;
    private _handleLogin;
    private _handleModalClose;
}
export default Header;
