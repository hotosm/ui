import FileInputDropzone from './file-input-dropzone.component.js';

export default FileInputDropzone;
export type { FileWithPreview } from './file-input-dropzone.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'hot-file-input-dropzone': FileInputDropzone;
  }
}

customElements.define("hot-file-input-dropzone", FileInputDropzone);
