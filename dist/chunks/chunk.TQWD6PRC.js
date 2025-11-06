import{a as o}from"./chunk.64GCJQA3.js";var e=o`
  :host {
    display: block;
    font-family: var(--hot-font-sans-variant-condensed);
  }

  .file-input-dropzone {
    width: 100%;
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
    border-width: 4x;
    padding: var(--hot-spacing-2x-large);
    transition: all 0.2s ease;
    cursor: pointer;
    text-align: center;
  }

  .dropzone:hover:not(.dropzone--disabled) {
    border-color: var(--hot-color-neutral-100);
    background-color: var(--hot-color-neutral-50);
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
    gap: var(--hot-spacing-small);
  }

  .header-action-btn {
    padding: var(--hot-spacing-x-small) var(--hot-spacing-medium);
    font-size: var(--hot-font-size-small);
    font-weight: var(--hot-font-weight-semibold);
    font-family: var(--hot-font-sans-variant-condensed);
    border: 1px solid;
    border-radius: var(--hot-border-radius-small);
    cursor: pointer;
  }

  .header-action-btn--cancel {
    background-color: white;
    color: var(--hot-color-neutral-500);
    border-color: var(--hot-color-neutral-500);
  }

  .header-action-btn--cancel:hover {
    background-color: var(--hot-color-primary-50);
  }

  .header-action-btn--add {
    background-color: var(--hot-color-red-600);
    color: white;
    border-color: var(--hot-color-red-600);
  }

  .header-action-btn--add:hover {
    background-color: var(--hot-color-red-700);
    border-color: var(--hot-color-red-700);
  }

  .image-grid {
    max-height: 400px;
    overflow-y: auto;
    padding: var(--hot-spacing-small);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
    gap: var(--hot-spacing-small);
  }

  .image-thumbnail {
    position: relative;
    border-radius: var(--hot-border-radius-medium);
    overflow: visible;
    display: flex;
    flex-direction: column;
  }

  .thumbnail-image {
    width: 100%;
    aspect-ratio: 4 / 2.5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: var(--hot-border-radius-medium);
  }

  .thumbnail-info {
    padding: var(--hot-spacing-2x-small) var(--hot-spacing-x-small);
  }

  .thumbnail-name {
    font-size: var(--hot-font-size-2x-small);
    font-weight: var(--hot-font-weight-semibold);
    color: var(--hot-color-neutral-800);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .thumbnail-size {
    font-size: var(--hot-font-size-2x-small);
    color: var(--hot-color-neutral-600);
    margin-top: var(--hot-spacing-3x-small);
  }

  .thumbnail-remove {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    padding: 0;
    color: white;
    border: none;
    background-color: var(--hot-color-red-600);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 0;
  }

  .thumbnail-remove:hover {
    background-color: var(--hot-color-red-700);
    transform: scale(1.1);
  }

  .thumbnail-remove wa-icon {
    font-size: 10px;
    display: block;
    margin: 0;
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
  }

  .dropzone-text {
    font-size: var(--hot-font-size-small);
    font-weight: 500;
    color: var(--hot-color-neutral-700);
  }

  .dropzone-text .browse {
    color: var(--hot-color-primary-700);
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
  }

  .file-list-header {
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-700);
  }

  .file-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: var(--hot-spacing-small);
    padding: var(--hot-spacing-small);
    margin-bottom: var(--hot-spacing-medium);
    border: 1px solid var(--hot-color-neutral-300);
    border-radius: var(--hot-border-radius-large);
    transition: background-color 0.2s ease;
  }

  .file-item:hover {
    background-color: var(--hot-color-neutral-50);
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
    font-size: var(--hot-font-size-x-small);
    font-weight: var(--hot-font-weight-semibold);
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
`;export{e as a};
