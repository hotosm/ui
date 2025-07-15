import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import { LitElement } from "lit";
import type { CSSResultGroup } from 'lit';
export declare class Button extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** The button variant to use. */
    accessor variant: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger';
    /** The button size. */
    accessor size: 'small' | 'medium' | 'large';
    /** The button appearance. */
    accessor appearance: 'default' | 'icon';
    /** Whether the button is disabled. */
    accessor disabled: boolean;
    /** Whether the button is in loading state. */
    accessor loading: boolean;
    /** The icon name to display. */
    accessor icon: string;
    /** The icon position relative to the text. */
    accessor iconPosition: 'start' | 'end';
    /** The button type. */
    accessor type: 'button' | 'submit' | 'reset';
    /** The HOT color variant to use. */
    accessor hotColor: 'red' | 'yellow' | 'blue' | 'cyan' | 'rose' | 'gray' | '';
    protected render(): import("lit-html").TemplateResult<1>;
}
export default Button;
