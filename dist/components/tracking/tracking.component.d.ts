import { LitElement } from "lit";
declare global {
    interface Window {
        _paq: any[];
    }
}
export declare class MatomoTracking extends LitElement {
    name: string;
    /** The Matomo site id for tracking. */
    accessor siteId: string;
    /** The domains to apply tracking. */
    accessor domain: string;
    /** The Matomo URL */
    accessor matomoURL: string;
    agree(): void;
    disagree(): void;
    connectedCallback(): void;
}
export default MatomoTracking;
