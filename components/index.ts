import "./theme/hot.css";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

import { Toolbar as ToolbarImport } from "./toolbar/Toolbar";

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('/shoelace');

// import { Radio as RadioImport } from "./radio/Radio";

// export { Card } from "@/card/Card.js";
// export { Dropdown } from "@/dropdown/Dropdown.js";
// export { Toggle } from "@/toggle/Toggle.js";

customElements.define("hot-toolbar", ToolbarImport);
// customElements.define("hot-radio", RadioImport);
