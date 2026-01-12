import { css } from 'lit';

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
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
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
    border-radius:  var(--hot-border-radius-large);
    background: var(--hot-color-neutral-0);
    backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .consent-callout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: var(--hot-border-radius-large);
  }

  .consent-icon {
    color: var(--hot-color-primary-1000);
  }

  .consent-content {
    padding: 0.75rem;
  }

  .consent-header {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.3;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  .consent-message {
    margin-bottom: 2rem;
    text-align: center;
  }

  .consent-message p {
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #4b5563;
  }

  .consent-message p:last-child {
    margin-bottom: 0;
  }

  .consent-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .consent-button {
    width: 100%;
    min-width: auto;
  }

  /* Focus styles for accessibility */
  /* High contrast mode support */

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .consent-overlay,
    .consent-container,
  }

  /* Responsive design for larger screens */
  @media (min-width: 481px) {
    .consent-overlay {
      padding: 0.5rem;
    }

    .consent-content {
      padding: 1rem;
    }

    .consent-header {
      font-size: 1.25rem;
    }

    .consent-message p {
      font-size: 1rem;
    }

    .consent-actions {
      gap: 1rem;
    }
  }

  @media (min-width: 769px) {
    .consent-overlay {
      padding: 1rem;
    }

    .consent-container {
      max-width: 600px;
    }

    .consent-content {
      padding: 1.5rem;
    }

    .consent-header {
      font-size: 1.5rem;
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
