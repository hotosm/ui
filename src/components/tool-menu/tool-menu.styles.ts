import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
  }

  wa-dropdown-item {
    cursor: pointer;
  }

  wa-dropdown-item:hover {
    background-color: var(--hot-color-neutral-50);
  }

  .tool-logo {
    width: 20px;
    height: 20px;
    object-fit: contain;
    display: block;
  }

  .tool-title {
    text-align: left;
    font-weight: var(--hot-font-weight-light);
    font-size: var(--hot-font-size-small);
    color: var(--hot-color-neutral-950);
    line-height: 1.3;
  }

  wa-button[slot="trigger"] {
    cursor: pointer;
  }

  .menu-icon {
    color: var(--hot-color-neutral-800);
  }
`;
