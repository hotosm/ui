import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
export declare class Consent extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** The site id for consent. */
    accessor consentId: string;
    accessor isOpen: boolean;
    accessor title: string;
    accessor message: string;
    accessor agreeLabel: string;
    accessor notAgreeLabel: string;
    protected render(): import("lit-html").TemplateResult<1> | null;
    private _setAgree;
    private _setDisagree;
    connectedCallback(): void;
}
export default Consent;
