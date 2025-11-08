import ImagePreviewGrid from './image-preview-grid.component.js';

export default ImagePreviewGrid;
export type { FileWithPreview } from './image-preview-grid.component.js';

declare global {
  interface HTMLElementTagNameMap {
    'hot-image-preview-grid': ImagePreviewGrid;
  }
}

customElements.define('hot-image-preview-grid', ImagePreviewGrid);
