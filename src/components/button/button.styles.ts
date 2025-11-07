import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  :host([fullWidth]) {
    display: block;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--hot-spacing-x-small);
    font-family: var(--hot-font-sans-variant-condensed);
    font-weight: var(--hot-font-weight-semibold);
    border: 1px solid;
    border-radius: var(--hot-border-radius-medium);
    cursor: pointer;
    transition: all 0.15s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .button--full-width {
    width: 100%;
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .button__icon {
    display: flex;
    align-items: center;
    line-height: 0;
  }

  .button--small .button__icon {
    font-size: var(--hot-font-size-x-small);
  }

  .button--medium .button__icon {
    font-size: var(--hot-font-size-small);
  }

  .button--large .button__icon {
    font-size: var(--hot-font-size-medium);
  }

  .button--small {
    padding: var(--hot-spacing-2x-small) var(--hot-spacing-small);
    font-size: var(--hot-font-size-x-small);
  }

  .button--medium {
    padding: var(--hot-spacing-x-small) var(--hot-spacing-medium);
    font-size: var(--hot-font-size-small);
  }

  .button--large {
    padding: var(--hot-spacing-small) var(--hot-spacing-large);
    font-size: var(--hot-font-size-medium);
  }

  .button--solid.button--primary {
    background-color: var(--hot-color-red-600);
    color: white;
    border-color: var(--hot-color-red-600);
  }

  .button--solid.button--primary:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
    text-decoration: underline;
  }

  .button--solid.button--primary:active:not(:disabled) {
    background-color: var(--hot-color-red-800);
  }

  .button--solid.button--neutral {
    background-color: var(--hot-color-neutral-950);
    color: white;
    border-color: var(--hot-color-neutral-950);
  }

  .button--solid.button--neutral:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
    text-decoration: underline;
  }

  .button--outline.button--primary {
    background-color: white;
    color: var(--hot-color-red-600);
    border-color: var(--hot-color-red-600);
  }

  .button--outline.button--primary:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
    text-decoration: underline;
  }

  .button--outline.button--neutral {
    background-color: white;
    color: var(--hot-color-neutral-950);
    border-color: var(--hot-color-neutral-950);
  }

  .button--outline.button--neutral:hover:not(:disabled) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
    text-decoration: underline;
  }

  .button--ghost.button--primary {
    background-color: transparent;
    color: var(--hot-color-red-600);
    border-color: transparent;
  }

  .button--ghost.button--primary:hover:not(:disabled) {
    text-decoration: underline;
  }

  .button--ghost.button--neutral {
    background-color: transparent;
    color: var(--hot-color-neutral-950);
    border-color: transparent;
  }

  .button--ghost.button--neutral:hover:not(:disabled) {
    text-decoration: underline;
  }
`;
