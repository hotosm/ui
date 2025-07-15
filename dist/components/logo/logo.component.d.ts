import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
export declare class Logo extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    accessor iconOnly: boolean;
    accessor textOnly: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
export default Logo;
