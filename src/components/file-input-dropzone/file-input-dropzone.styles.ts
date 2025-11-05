import { css } from 'lit';

export default css`
  :host {
    display: block;
    font-family: var(--hot-font-sans);
  }

  .file-input-dropzone {
    width: 25rem;
  }

  .label {
    display: block;
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-700);
    margin-bottom: var(--hot-spacing-small);
  }

  .helper-text {
    color: var(--hot-color-neutral-600);
    margin-bottom: var(--hot-spacing-small);
  }

  .dropzone {
    position: relative;
    border: 2px dashed var(--hot-color-neutral-300);
    border-radius: var(--hot-border-radius-x-large);
    border-width: 4x;
    padding: var(--hot-spacing-2x-large);
    transition: all 0.2s ease;
    cursor: pointer;
    text-align: center;
  }

  .dropzone:hover:not(.dropzone--disabled) {
    border-color: var(--hot-color-red-400);
    background-color: var(--hot-color-red-50);
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

  .dropzone-text {
    font-size: var(--hot-font-size-medium);
    color: var(--hot-color-neutral-700);
    font-weight: var(--hot-font-weight-bold);
  }

  .dropzone-text strong {
    color: var(--hot-color-red-600);
    font-weight: var(--hot-font-weight-bold);
  }

  .dropzone-accept,
  .dropzone-maxsize {
    font-size: var(--hot-font-size-x-small);
    font-weight: var(--hot-font-weight-light);
    color: var(--hot-color-neutral-500);
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

  .file-list {
    margin-top: var(--hot-spacing-medium);
    overflow: hidden;
  }

  .file-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--hot-spacing-small);
    padding: var(--hot-spacing-small);
    margin-bottom: var(--hot-spacing-medium);
    background-color: var(--hot-color-neutral-50);
    transition: background-color 0.2s ease;
  }

  .file-item:hover {
    background-color: var(--hot-color-neutral-100);
  }

  .file-icon {
    font-size: 32px;
    color: var(--hot-color-neutral-500);
    flex-shrink: 0;
  }

  .file-info {
    flex: 1;
    min-width: 0;
  }

  .file-name {
    font-size: var(--hot-font-size-small);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-800);
    word-break: break-word;
  }

  .file-size {
    font-size: var(--hot-font-size-2x-small);
    color: var(--hot-color-neutral-600);
    margin-top: var(--hot-spacing-2x-small);
  }

  .file-remove {
    flex-shrink: 0;
    background: none;
    border: none;
    padding: var(--hot-spacing-x-small);
    cursor: pointer;
    color: var(--hot-color-neutral-500);
    border-radius: var(--hot-border-radius-small);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .file-remove:hover {
    color: var(--hot-color-red-600);
  }

  .file-remove wa-icon {
    font-size: var(--hot-font-size-large);
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

    .file-item {
      gap: var(--hot-spacing-small);
      padding: var(--hot-spacing-small);
    }

    .file-icon {
      font-size: 24px;
    }
  }
`;
