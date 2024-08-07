import { LitElement } from 'lit';

declare global {
    interface Window {
        _paq: any[];
    }
}
export declare class Tracking extends LitElement {
    name: string;
    /** The Matomo site id for tracking. */
    siteId: string;
    /** The domains to apply tracking. */
    domain: string;
    /** Force display the banner. */
    force: boolean;
    isOpen: boolean;
    static styles: import('lit').CSSResult[];
    protected render(): import('lit').TemplateResult<1>;
    private _setAgree;
    private _setDisagree;
    connectedCallback(): void;
}
export default Tracking;
