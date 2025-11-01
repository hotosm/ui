import { html, LitElement, type CSSResultGroup } from "lit";
import "@awesome.me/webawesome/dist/components/input/input.js";

export class Dropzone extends LitElement {
	static styles: CSSResultGroup = [];

	name = "hot-dropzone";

	protected render() {
		return html`
            <div class="dropzone">
                <wa-input type="file"></wa-input>
            </div>
        `;
	}
}

export default Dropzone;
