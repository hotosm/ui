import{b as o}from"./chunk.TNLBUOUK.js";var t=o`
  :host {
    display: block;
  }

  .consent-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
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
    max-width: 600px;
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
    border-radius: 16px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(243, 77, 71, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(249, 250, 251, 0.98));
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
    background: linear-gradient(90deg, var(--hot-color-red-500), var(--hot-color-red-600), var(--hot-color-red-700));
    border-radius: 16px 16px 0 0;
  }

  .consent-icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    color: var(--hot-color-red-500);
  }

  .consent-content {
    padding: 1.5rem;
  }

  .consent-header {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 0 0 1rem 0;
    color: #1f2937;
    text-align: center;
  }

  .consent-message {
    margin-bottom: 2rem;
    text-align: center;
  }

  .consent-message p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #4b5563;
  }

  .consent-message p:last-child {
    margin-bottom: 0;
  }

  .consent-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .consent-button {
    min-width: 120px;
    font-weight: 500;
    transition: all 0.2s ease;
    border-radius: 8px;
  }

  .consent-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .decline-button {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    color: #374151;
  }

  .decline-button:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }

  .accept-button {
    background: linear-gradient(135deg, var(--hot-color-red-500), var(--hot-color-red-600));
    border: 1px solid var(--hot-color-red-600);
    color: white;
  }

  .accept-button:hover {
    background: linear-gradient(135deg, var(--hot-color-red-600), var(--hot-color-red-700));
    border-color: var(--hot-color-red-700);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .consent-overlay {
      padding: 0.5rem;
    }

    .consent-container {
      max-width: 100%;
    }

    .consent-content {
      padding: 1rem;
    }

    .consent-header {
      font-size: 1.25rem;
    }

    .consent-actions {
      flex-direction: column;
      gap: 0.75rem;
    }

    .consent-button {
      width: 100%;
      min-width: auto;
    }
  }

  @media (max-width: 480px) {
    .consent-overlay {
      padding: 0.25rem;
    }

    .consent-content {
      padding: 0.75rem;
    }

    .consent-header {
      font-size: 1.125rem;
    }

    .consent-message p {
      font-size: 0.875rem;
    }
  }

  /* Focus styles for accessibility */
  .consent-button:focus {
    outline: 2px solid var(--hot-color-red-500);
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .consent-callout {
      border: 2px solid #000;
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
`;export{t as a};
