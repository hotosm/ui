import { LitElement } from 'lit';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
export declare class ListCard extends LitElement {
    static styles: import("lit").CSSResult[];
    name: string;
    accessor title: string;
    accessor subtitle: string;
    accessor icon: string;
    accessor itemId: string;
    accessor showRemove: boolean;
    accessor showIcon: boolean;
    private _handleRemove;
    private _handleKeyDown;
    protected render(): import("lit").TemplateResult<1>;
}
export default ListCard;
