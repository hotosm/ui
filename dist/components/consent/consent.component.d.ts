import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/callout/callout.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/icon/icon.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js';
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
export declare class Consent extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** The site id for consent. */
    accessor consentId: string;
    /** Force display the banner. */
    accessor force: boolean;
    accessor isOpen: boolean;
    accessor title: string;
    accessor message: string;
    accessor agreeLabel: string;
    accessor notAgreeLabel: string;
    protected render(): import("lit").TemplateResult<1> | null;
    private _setAgree;
    private _setDisagree;
    connectedCallback(): void;
}
export default Consent;
