import { css } from 'lit';

export default css`
  :host {
    display: block;
    font-family: var(--hot-font-sans-variant-condensed);
  }

  .image-grid-container {
    margin-top: var(--hot-spacing-medium);
    border: 1px solid var(--hot-color-neutral-200);
    border-radius: var(--hot-border-radius-large);
    overflow: hidden;
  }

  .image-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--hot-spacing-x-small);
    border-bottom: 1px solid var(--hot-color-neutral-200);
  }

  .file-count {
    font-size: var(--hot-font-size-small);
    font-weight: var(--hot-font-weight-semibold);
    color: var(--hot-color-neutral-800);
  }

  .header-actions {
    display: flex;
    gap: var(--hot-spacing-x-small);
  }

  .image-grid {
    max-height: 400px;
    overflow-y: auto;
    padding: var(--hot-spacing-small);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
    gap: var(--hot-spacing-small);
  }

  @media (max-width: 640px) {
    .image-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }
  }
`;
