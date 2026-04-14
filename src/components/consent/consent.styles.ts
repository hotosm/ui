import { css } from "lit";

export default css`
  :host {
    display: block;
  }

  .consent-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--wa-color-overlay-modal);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: var(--hot-spacing-2x-small);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .consent-container {
    width: 100%;
    max-width: 100%;
    animation: slideUp 0.4s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .consent-callout {
    --wa-callout-spacing: 2rem;
    border-radius: var(--hot-border-radius-x-large);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--hot-color-primary-100);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(249, 250, 251, 0.98));
    backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .consent-callout::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--hot-color-primary-500),
      var(--hot-color-primary-600),
      var(--hot-color-primary-700)
    );
    border-radius: var(--hot-border-radius-x-large) var(--hot-border-radius-x-large) 0 0;
  }

  .consent-icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    color: var(--hot-color-primary-500);
  }

  .consent-content {
    padding: var(--hot-spacing-small);
  }

  .consent-header {
    font-weight: var(--hot-font-weight-semibold);
    font-size: var(--hot-font-size-large);
    line-height: var(--hot-line-height-dense);
    margin: 0 0 var(--hot-spacing-medium) 0;
    color: var(--hot-color-neutral-950);
    text-align: center;
  }

  .consent-message {
    margin-bottom: var(--hot-spacing-2x-large);
    text-align: center;
  }

  .consent-message p {
    margin: 0 0 var(--hot-spacing-medium) 0;
    font-size: var(--hot-font-size-small);
    line-height: var(--hot-line-height-normal);
    color: var(--hot-color-neutral-700);
  }

  .consent-message p:last-child {
    margin-bottom: 0;
  }

  .consent-actions {
    display: flex;
    flex-direction: column;
    gap: var(--hot-spacing-small);
    justify-content: center;
    flex-wrap: wrap;
  }

  .consent-button {
    width: 100%;
    min-width: auto;
  }

  .consent-button::part(base) {
    font-weight: var(--hot-font-weight-semibold);
    transition: all 0.2s ease;
    border-radius: var(--hot-border-radius-large);
  }

  .consent-button::part(base):hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* Focus styles for accessibility */
  .consent-button:focus {
    outline: 2px solid var(--wa-color-focus);
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .consent-callout {
      border: 2px solid var(--hot-color-neutral-0);
    }

    .consent-button {
      border-width: 2px;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .consent-overlay,
    .consent-container,
    .consent-button {
      animation: none;
      transition: none;
    }
  }

  /* Responsive design for larger screens */
  @media (min-width: 481px) {
    .consent-overlay {
      padding: var(--hot-spacing-x-small);
    }

    .consent-content {
      padding: var(--hot-spacing-medium);
    }

    .consent-header {
      font-size: var(--hot-font-size-large);
    }

    .consent-message p {
      font-size: var(--hot-font-size-medium);
    }

    .consent-actions {
      gap: var(--hot-spacing-medium);
    }
  }

  @media (min-width: 769px) {
    .consent-overlay {
      padding: var(--hot-spacing-medium);
    }

    .consent-container {
      max-width: 600px;
    }

    .consent-content {
      padding: var(--hot-spacing-x-large);
    }

    .consent-header {
      font-size: var(--hot-font-size-x-large);
    }

    .consent-actions {
      flex-direction: row;
    }

    .consent-button {
      width: auto;
      min-width: 120px;
    }
  }
`;
