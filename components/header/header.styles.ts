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
    padding: 0 var(--sl-spacing-small);
  }

  .header.border-bottom {
    border-bottom: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-50);
  }

  .header--size-small {
    height: var(--sl-spacing-4x-large);
  }

  .header--size-medium {
    height: calc(var(--sl-spacing-4x-large) * 2);
  }

  .header--size-large {
    height: calc(var(--sl-spacing-4x-large) * 4);
  }

  .header--link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sl-spacing-small);
  }

  .header--title {
    color: var(--sl-color-neutral-950);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-x-large);
  }

  .header--tab-group {
    flex-direction: column;
  }

  .header--tab::part(base) {
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-950);
    padding: var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: var(--sl-color-neutral-950);
  }

  .header--nav {
    justify-content: space-between;
    justify-items: center;
    gap: var(--sl-spacing-medium);
    font-weight: var(--sl-font-weight-semibold);
  }

  .header--nav-mobile {
  }

  .header--person-circle {
    font-size: var(--sl-font-size-x-large);
  }

  .header--drawer {
    font-size: var(--sl-font-size-x-large)
  }

  .header--right-section {
  }

  .header--logo-img {
  }
}
`
