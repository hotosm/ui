import ListCard from "./list-card.component.js";

export default ListCard;

declare global {
  interface HTMLElementTagNameMap {
    "hot-list-card": ListCard;
  }
}

// Guard against duplicate registration
if (!customElements.get("hot-list-card")) {
  customElements.define("hot-list-card", ListCard);
}
