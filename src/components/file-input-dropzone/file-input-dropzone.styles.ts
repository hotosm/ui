import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .file-input-dropzone {
    font-family: var(--hot-font-sans);
    width: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .label {
    display: block;
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-semibold);
    color: var(--hot-color-primary-700);
    margin-bottom: var(--hot-spacing-small);
  }

  .dropzone {
    position: relative;
    border: 1px dashed var(--hot-color-neutral-300);
    border-radius: var(--hot-border-radius-large);
    border-width: 4px;
    padding: var(--hot-spacing-2x-large);
    transition: all 0.2s ease;
    cursor: pointer;
    text-align: center;
  }

  .dropzone:hover:not(.dropzone--disabled) {
    border-color: var(--hot-color-neutral-100);
    background-color: var(--hot-color-neutral-50);
  }

  .dropzone:focus {
    outline: 2px solid var(--hot-color-red-600);
    outline-offset: 2px;
  }

  .dropzone:focus:not(:focus-visible) {
    outline: none;
  }

  .dropzone:focus-visible {
    outline: 2px solid var(--hot-color-red-600);
    outline-offset: 2px;
  }

  .dropzone--dragging {
    border-color: var(--hot-color-red-500);
    background-color: var(--hot-color-red-100);
    border-width: 3px;
  }

  .dropzone--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--hot-color-neutral-100);
  }

  .dropzone input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .dropzone-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--hot-spacing-medium);
  }

  .dropzone-icon {
    font-size: 48px;
    color: var(--hot-color-neutral-400);
    transition: color 0.2s ease;
  }

  .dropzone:hover:not(.dropzone--disabled) .dropzone-icon {
    color: var(--hot-color-red-500);
  }

  .dropzone--dragging .dropzone-icon {
    color: var(--hot-color-red-600);
  }

  .dropzone-cta {
    display: flex;
    justify-content: center;
  }

  .dropzone-text {
    font-size: var(--hot-font-size-small);
    font-weight: 500;
    color: var(--hot-color-neutral-700);
    text-align: center;
  }

  .dropzone-text .browse {
    color: var(--hot-color-primary-700);
  }

  .dropzone-accept,
  .dropzone-maxsize {
    font-size: var(--hot-font-size-x-small);
    font-weight: var(--hot-font-weight-light);
    color: var(--hot-color-neutral-500);
    text-align: center;
  }

  /* Compact variant - horizontal layout with icon on left */
  .dropzone--compact {
    padding: var(--hot-spacing-large) var(--hot-spacing-x-large);
  }

  .dropzone--compact .dropzone-content {
    flex-direction: row;
    gap: var(--hot-spacing-medium);
  }

  .dropzone--compact .dropzone-icon {
    font-size: 32px;
  }

  .dropzone--compact .compact-text {
    font-size: var(--hot-font-size-large);
    color: var(--hot-color-neutral-600);
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: var(--hot-spacing-x-small);
    margin-top: var(--hot-spacing-small);
    padding: var(--hot-spacing-small);
    background-color: var(--hot-color-red-50);
    border: 1px solid var(--hot-color-red-200);
    border-radius: var(--hot-border-radius-small);
    color: var(--hot-color-red-700);
    font-size: var(--hot-font-size-small);
  }

  .error-message wa-icon {
    color: var(--hot-color-red-600);
    font-size: var(--hot-font-size-medium);
  }

  .file-preview-list {
    display: flex;
    flex-direction: column;
    gap: var(--hot-spacing-small);
    margin-top: var(--hot-spacing-large);
  }

  @media (max-width: 640px) {
    .dropzone {
      padding: var(--hot-spacing-large);
    }

    .dropzone-icon {
      font-size: 36px;
    }

    .dropzone-text {
      font-size: var(--hot-font-size-small);
    }
  }
`;
