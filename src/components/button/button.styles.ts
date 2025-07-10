import { css } from 'lit';

export default css`
  .hot-button {
    /* Use HOT theme variables for consistent styling */
    font-family: var(--hot-font-sans);
    font-weight: var(--hot-font-weight-semibold);
    border-radius: var(--hot-border-radius-medium);
    transition: all 0.2s ease-in-out;
  }

  .hot-button::part(base) {
    /* Ensure the base part uses HOT styling */
    font-family: var(--hot-font-sans);
    font-weight: var(--hot-font-weight-semibold);
    border-radius: var(--hot-border-radius-medium);
  }

  .hot-button::part(label) {
    /* Style the label part */
    font-family: var(--hot-font-sans);
    font-weight: var(--hot-font-weight-semibold);
  }

  /* Custom HOT gradient variant */
  .hot-button.hot-gradient::part(base) {
    background: linear-gradient(135deg, var(--hot-color-primary-500), var(--hot-color-primary-600));
    border: none;
    color: white;
  }

  .hot-button.hot-gradient::part(base):hover {
    background: linear-gradient(135deg, var(--hot-color-primary-600), var(--hot-color-primary-700));
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-gradient::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Custom HOT outline variant */
  .hot-button.hot-outline::part(base) {
    background: transparent;
    border: 2px solid var(--hot-color-primary-500);
    color: var(--hot-color-primary-500);
  }

  .hot-button.hot-outline::part(base):hover {
    background: var(--hot-color-primary-50);
    border-color: var(--hot-color-primary-600);
    color: var(--hot-color-primary-600);
  }

  /* Custom HOT ghost variant */
  .hot-button.hot-ghost::part(base) {
    background: transparent;
    border: none;
    color: var(--hot-color-primary-500);
  }

  .hot-button.hot-ghost::part(base):hover {
    background: var(--hot-color-primary-50);
    color: var(--hot-color-primary-600);
  }

  /* HOT Color Variants */
  .hot-button.hot-red::part(base) {
    background: var(--hot-color-red-500);
    border: none;
    color: white;
  }

  .hot-button.hot-red::part(base):hover {
    background: var(--hot-color-red-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-red::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hot-button.hot-yellow::part(base) {
    background: var(--hot-color-yellow-500);
    border: none;
    color: var(--hot-color-gray-900);
  }

  .hot-button.hot-yellow::part(base):hover {
    background: var(--hot-color-yellow-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-yellow::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hot-button.hot-blue::part(base) {
    background: var(--hot-color-blue-500);
    border: none;
    color: white;
  }

  .hot-button.hot-blue::part(base):hover {
    background: var(--hot-color-blue-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-blue::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hot-button.hot-cyan::part(base) {
    background: var(--hot-color-cyan-500);
    border: none;
    color: white;
  }

  .hot-button.hot-cyan::part(base):hover {
    background: var(--hot-color-cyan-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-cyan::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hot-button.hot-rose::part(base) {
    background: var(--hot-color-rose-500);
    border: none;
    color: white;
  }

  .hot-button.hot-rose::part(base):hover {
    background: var(--hot-color-rose-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-rose::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hot-button.hot-gray::part(base) {
    background: var(--hot-color-gray-500);
    border: none;
    color: white;
  }

  .hot-button.hot-gray::part(base):hover {
    background: var(--hot-color-gray-600);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .hot-button.hot-gray::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Size variations using HOT spacing */
  .hot-button[size="small"]::part(base) {
    padding: var(--hot-spacing-x-small) var(--hot-spacing-small);
    font-size: var(--hot-font-size-small);
  }

  .hot-button[size="medium"]::part(base) {
    padding: var(--hot-spacing-small) var(--hot-spacing-medium);
    font-size: var(--hot-font-size-medium);
  }

  .hot-button[size="large"]::part(base) {
    padding: var(--hot-spacing-medium) var(--hot-spacing-large);
    font-size: var(--hot-font-size-large);
  }

  /* Icon button specific styling */
  .hot-button[appearance="icon"]::part(base) {
    border-radius: var(--hot-border-radius-circle);
    min-width: auto;
    width: fit-content;
  }

  /* Loading state */
  .hot-button[loading]::part(base) {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Disabled state */
  .hot-button[disabled]::part(base) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`; 