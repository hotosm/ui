import Dropzone from './dropzone.component.js';
export default Dropzone;

declare global {
  interface HTMLElementTagNameMap {
    'hot-dropzone': Dropzone;
  }
}

// Define web component
customElements.define("hot-dropzone", Dropzone);
