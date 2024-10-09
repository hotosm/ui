import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import { LitElement } from "lit";
import { type sizes } from './header.styles.js';
import type { CSSResultGroup } from 'lit';
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
    /** Size of toolbar vertically. */
    accessor size: sizes;
    /** Border bottom. */
    accessor borderBottom: boolean;
    accessor selectedTab: number;
    protected render(): import("lit").TemplateResult<1>;
    private _selectTab;
    private _handleLogin;
}
export default Header;
