import Announcement from "./announcement.component.js";
export default Announcement;

declare global {
  interface HTMLElementTagNameMap {
    "hot-announcement": Announcement;
  }
}

// Define web component (guard against duplicate registration)
if (!customElements.get("hot-announcement")) {
  customElements.define("hot-announcement", Announcement);
}
