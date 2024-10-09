import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
declare global {
    interface Window {
        _paq: any[];
    }
}
export declare class Tracking extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** The Matomo site id for tracking. */
    accessor siteId: string;
    /** The domains to apply tracking. */
    accessor domain: string;
    /** Force display the banner. */
    accessor force: boolean;
    accessor isOpen: boolean;
    protected render(): import("lit").TemplateResult<1>;
    private _setAgree;
    private _setDisagree;
    connectedCallback(): void;
}
export default Tracking;
