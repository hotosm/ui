import ImageCard from './image-card.component.js';

export default ImageCard;

declare global {
  interface HTMLElementTagNameMap {
    'hot-image-card': ImageCard;
  }
}

customElements.define('hot-image-card', ImageCard);
