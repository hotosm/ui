import { css } from "lit";
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
      },
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
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease;
    text-transform: uppercase;
    font-weight: var(--hot-font-weight-bold);
    letter-spacing: 0.5px;
  }

  .header--tab[active]::part(base) {
    border-bottom-color: var(--hot-color-red-500);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-950);
  }

  .header--tab:hover::part(base) {
    color: var(--hot-color-neutral-700);
    border-bottom-color: var(--hot-color-red-300);
  }

  .header--tab[active]:hover::part(base) {
    color: var(--hot-color-neutral-950);
    border-bottom-color: var(--hot-color-red-600);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: transparent;
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
    font-size: var(--hot-font-size-x-large);
  }

  .header--right-section {
    display: flex;
    align-items: center;
    gap: var(--hot-spacing-small);
  }

  .header--logo-img {
  }

  /* Login Modal Styles */
  .login-modal {
    --width: 35rem;
    --border-radius: 8px;
    --background-color: white;
  }

  /* --- Responsive styles for mobile --- */
  @media (max-width: 768px) {
    .header {
      align-items: stretch;
      width: 100%;
      padding: var(--hot-spacing-small);
      height: auto;
    }
    .header--link {
      justify-content: flex-start;
      padding-right: var(--hot-spacing-2x-small);
      gap: var(--hot-spacing-x-small);
    }
    .header--title {
      font-size: var(--hot-font-size-large);
    }
    .header--nav {
      display: none;
    }
    .header--nav-mobile {
      display: block;
      width: 100%;
      margin-top: var(--hot-spacing-small);
    }
    .header--right-section {
      justify-content: flex-end;
      margin-top: var(--hot-spacing-small);
      gap: var(--hot-spacing-x-small);
    }
    .header--logo-img {
      max-height: 2.5rem;
      width: auto;
    }
    wa-button[appearance="outlined"] {
      /* Make drawer button larger for touch */
      min-width: 2.5rem;
      min-height: 2.5rem;
      padding: 0.5rem;
    }
  }
`;
