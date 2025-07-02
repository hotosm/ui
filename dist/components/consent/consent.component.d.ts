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
