import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
  }

  wa-dropdown-item {
    --wa-dropdown-item-padding: var(--hot-spacing-small)
      var(--hot-spacing-medium);
    --wa-dropdown-item-min-height: 60px;
    cursor: pointer;
  }

  wa-dropdown-item:hover {
    background-color: var(--hot-color-neutral-50);
  }

  .tool-content {
    display: flex;
    flex-direction: column;
    gap: var(--hot-spacing-2x-small);
    text-align: left;
  }

  .section-divider {
    margin-top: var(--hot-spacing-x-small);
    padding-top: var(--hot-spacing-x-small);
  }

  wa-dropdown-label {
    font-weight: var(--hot-font-weight-semibold);
    font-size: var(--hot-font-size-small);
    padding: var(--hot-spacing-x-small) var(--hot-spacing-medium)
      var(--hot-spacing-2x-small) var(--hot-spacing-medium);
  }

  .tool-title {
    font-weight: var(--hot-font-weight-light);
    font-size: var(--hot-font-size-small);
    color: var(--hot-color-neutral-950);
    line-height: 1.3;
  }

  wa-button[slot="trigger"] {
    --wa-button-padding: var(--hot-spacing-x-small);
    cursor: pointer;
  }

  .menu-icon {
    color: var(--hot-color-gray-800);
  }

  /* Dropdown positioning - FIXED SELECTOR */
  wa-dropdown::part(menu) {
    /* anchor the right edge of the panel to the right edge of the trigger (0 offset).
     */
    right: 0 !important;
    left: auto !important; /* Ensures 'right' takes precedence */
  }
`;
