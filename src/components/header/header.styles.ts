import { css } from 'lit';
import { cva } from "class-variance-authority";

export const headerVariants = cva(
  // Defaults to include in all variants
  `
      header
  `,
  {
    variants: {
      size: {
          small: "header--size-small",
          medium: "header--size-medium",
          large: "header--size-large",
      },
      borderBottom: {
          true: "border-bottom",
      }
    },
  }
);

export type sizes = "small" | "medium" | "large";

export const styles = css`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--hot-spacing-small);
  }

  .header.border-bottom {
    border-bottom: var(--hot-spacing-3x-small) solid var(--hot-color-neutral-50);
  }

  .header--size-small {
    height: var(--hot-spacing-4x-large);
  }

  .header--size-medium {
    height: calc(var(--hot-spacing-4x-large) * 2);
  }

  .header--size-large {
    height: calc(var(--hot-spacing-4x-large) * 4);
  }

  .header--link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--hot-spacing-small);
  }

  .header--title {
    color: var(--hot-color-neutral-950);
    font-family: var(--hot-font-sans);
    font-size: var(--hot-font-size-x-large);
  }

  .header--tab::part(base) {
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-normal);
    color: var(--hot-color-neutral-950);
    padding: var(--hot-spacing-small) var(--hot-spacing-small);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: none;
  }

  .header--nav {
    justify-content: space-between;
    justify-items: center;
    gap: var(--hot-spacing-medium);
    font-weight: var(--hot-font-weight-semibold);
  }

  .header--nav-mobile {
  }

  .header--person-circle {
    font-size: var(--hot-font-size-x-large);
  }

  .header--drawer {
    font-size: var(--hot-font-size-x-large)
  }

  .header--right-section {
    display: flex;
    align-items: center;
    gap: var(--hot-spacing-small);
  }



  .header--logo-img {
  }

  .header--tab {
    border-bottom: 2px solid;
    border-color: transparent;
  }
  .header--tab-active {
    border-color: var(--hot-color-neutral-1000);
  }

  /* Login Modal Styles */
  .login-modal {
    --width: 35rem;
    --border-radius: 8px;
    --background-color: white;
  }

  .login-modal::part(header) {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .login-modal::part(body) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .login-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  .login-options {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .login-option {
    background-color: #f5f5f5;
    border: 1px solid #d1d5db;
    color: #374151;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    min-height: 3rem;
  }

  .login-option:hover {
    border-color: #d73f3f;
    color: #d73f3f;
  }

  .login-option-icon {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    min-width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .login-option-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .login-option-text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
  }
`
