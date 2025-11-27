import { css } from "lit";

export default css`
  :host {
    display: block;
    font-family: var(--hot-font-sans);
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: var(--hot-spacing-small);
    padding: var(--hot-spacing-small);
    border: 1px solid var(--hot-color-neutral-200);
    border-radius: var(--hot-border-radius-medium);
    background-color: var(--hot-color-neutral-1000);
  }

  .list-icon {
    font-size: var(--hot-font-size-2x-large);
    color: var(--hot-color-neutral-500);
    flex-shrink: 0;
  }

  .list-info {
    flex: 1;
    min-width: 0;
  }

  .list-title {
    font-size: var(--hot-font-size-small);
    font-weight: var(--hot-font-weight-semibold);
    color: var(--hot-color-neutral-900);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-subtitle {
    font-size: var(--hot-font-size-x-small);
    color: var(--hot-color-neutral-600);
    margin-top: var(--hot-spacing-3x-small);
  }

  .remove-icon {
    font-size: var(--hot-font-size-large);
    color: var(--hot-color-neutral-500);
    cursor: pointer;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  .remove-icon:hover {
    color: var(--hot-color-red-600);
  }
`;
