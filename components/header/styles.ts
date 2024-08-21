import { cva } from "class-variance-authority";
import { css } from "lit";

export const headerVariants = cva(
    // Defaults to include in all variants
    `
        hot-flex hot-flex-row hot-bg-[var(--sl-color-white)] hot-items-center hot-justify-between
        hot-sm:justify-around hot-p-2 hot-border-b-2 hot-border-b-gray-100 hot-border-b-solid
    `,
    {
        variants: {
        size: {
            small: "hot-h-8",
            large: "hot-h-14",
        },
        },
    }
);

export type sizes = "small" | "large";

export const styles = [
    css`
      @unocss-placeholder;
    `,
    css`

      .logo-link {
        text-decoration: none;
      }

      sl-tab-group {
        display: flex;
      }

      sl-tab::part(base) {
        font-size: var(--sl-font-size-2);
      }
    `,
  ];