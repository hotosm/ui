import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/callout/callout.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/icon/icon.js';
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
    protected render(): import("lit").TemplateResult<1>;
    connectedCallback(): void;
}
export default MatomoTracking;
