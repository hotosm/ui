import { LitElement } from 'lit';

type sizes = "small" | "large";
interface MenuItem {
    label: string;
    clickEvent: () => void;
}
export declare class Header extends LitElement {
    name: string;
    /** Use a text-based title in the header. */
    title: string;
    /** Display a logo on the left of the header. */
    logo: string | URL;
    /** Add a drawer icon with a click event to e.g. open a sidebar. */
    drawer: boolean;
    /** Array of menu items to include as navigation tabs. */
    tabs: MenuItem[];
    /** Size of toolbar vertically. */
    size: sizes;
    private selectedTab;
    static styles: import('lit').CSSResult[];
    protected render(): import('lit').TemplateResult<1>;
    private _selectTab;
    private _handleLogin;
}
export default Header;
