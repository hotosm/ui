import { css } from 'lit';

export default css`
  :host {
    display: block;
    font-family: var(--hot-font-sans-variant-condensed);
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
    color: var(--hot-color-neutral-1000);
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
`;
