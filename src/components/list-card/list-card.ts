import ListCard from './list-card.component.js';

export default ListCard;

declare global {
  interface HTMLElementTagNameMap {
    'hot-list-card': ListCard;
  }
}

customElements.define('hot-list-card', ListCard);
