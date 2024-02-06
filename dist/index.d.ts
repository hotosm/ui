import * as lit from 'lit';
import { LitElement } from 'lit';

declare class button extends LitElement {
    /** Disable the button, greyed out, not clickable. */
    disabled: boolean;
    intent: "primary" | "secondary";
    constructor();
    static styles: lit.CSSResult[];
    protected render(): lit.TemplateResult<1>;
}

export { button };
