import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
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
    /** Whether to show the consent banner */
    accessor showConsent: boolean;
    /** The consent message to display */
    accessor consentMessage: string;
    private consentGiven;
    private consentShown;
    private errorMessage;
    private showError;
    private successMessage;
    private showSuccess;
    private infoMessage;
    private showInfo;
    static styles: import("lit").CSSResult;
    agree(): void;
    disagree(): void;
    private showConsentBanner;
    private showErrorCallout;
    private showSuccessCallout;
    private showInfoCallout;
    protected render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
export default MatomoTracking;
