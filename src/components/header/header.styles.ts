import { css } from "lit";
import { cva } from "class-variance-authority";

export const headerVariants = cva("header", {
  variants: {
    size: {
      small: "header--size-small",
      medium: "header--size-medium",
      large: "header--size-large",
    },
  },
});

export type sizes = "small" | "medium" | "large";

export const styles = css`
  /* ================================================================
   * Layout
   * ================================================================ */

  .header-container {
    background-color: #ffffff;
    border-bottom: 1px solid var(--hot-color-neutral-100);
  }

  .header {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: auto;
    padding: var(--hot-spacing-2x-small) var(--hot-spacing-small);
  }

  /* ================================================================
   * Top bar (tagline + external link) - hidden on "small" variant
   * ================================================================ */

  .header--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--hot-spacing-2x-small) var(--hot-spacing-small);
    background-color: #ffffff;
    font-family: var(--hot-font-sans);
    font-size: var(--hot-font-size-small);
    border-bottom: 1px solid var(--hot-color-neutral-100);
  }

  .header--top-tagline {
    color: var(--hot-color-primary-400);
    white-space: nowrap;
  }

  .header--top-link {
    color: var(--hot-color-primary-400);
    text-decoration: none;
    font-weight: var(--hot-font-weight-semibold);
  }

  .header--top-link:hover {
    text-decoration: underline;
  }

  .header--external-icon {
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--hot-spacing-3x-small);
    width: 0.65em;
    height: 0.65em;
  }

  /* On mobile: hide the tagline and show the short link text */
  .header--top-link-short {
    display: inline;
  }

  .header--top-link-full {
    display: none;
  }

  @media (min-width: 769px) {
    .header--top-link-short {
      display: none;
    }

    .header--top-link-full {
      display: inline;
    }

    .header--top-tagline {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    .header--top-tagline {
      display: none;
    }
  }

  /* ================================================================
   * Logo / title link
   * ================================================================ */

  .header--link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: var(--hot-spacing-2x-small);
    gap: var(--hot-spacing-x-small);
    flex-shrink: 0;
  }

  .header--link hot-logo {
    display: flex;
    align-items: center;
  }

  .header--link .header--logo-img {
    max-height: 2.5rem;
    width: auto;
    display: block;
    object-fit: contain;
    vertical-align: middle;
  }

  .header--title {
    color: var(--hot-color-neutral-950);
    font-family: var(--hot-font-sans);
    font-size: var(--hot-font-size-large);
    margin: 0;
    line-height: 1;
    white-space: nowrap;
  }

  /* ================================================================
   * Navigation (desktop tabs with horizontal scroll arrows)
   * Hidden on mobile; shown via media query below.
   * ================================================================ */

  .header--nav {
    display: none;
  }

  .header--nav-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    gap: var(--hot-spacing-2x-small);
    overflow: hidden;
  }

  .header--nav-scroll {
    flex: 1;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .header--nav-scroll::-webkit-scrollbar {
    display: none;
  }

  .header--nav-arrow {
    background: transparent;
    border: none;
    color: var(--hot-color-neutral-500);
    cursor: pointer;
    padding: 0;
    font-size: var(--hot-font-size-medium);
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .header--nav-arrow:hover {
    color: var(--hot-color-neutral-800);
  }

  .header--nav-arrow[disabled] {
    opacity: 0;
    pointer-events: none;
    width: 0;
    padding: 0;
    overflow: hidden;
  }

  .header--nav-mobile {
    display: block;
    width: 100%;
    margin-top: var(--hot-spacing-small);
  }

  /* ================================================================
   * Tabs
   * ================================================================ */

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  .header--tab-group::part(nav) {
    display: flex;
    justify-content: flex-start;
  }

  .header--nav-center .header--tab-group::part(nav) {
    justify-content: center;
  }

  .header--tab::part(base) {
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-600);
    padding: var(--hot-spacing-small);
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .header--tab[active]::part(base) {
    color: var(--hot-color-neutral-800);
    border-bottom-color: var(--hot-color-neutral-800);
  }

  .header--tab:hover::part(base) {
    color: var(--hot-color-neutral-800);
    border-bottom-color: var(--hot-color-neutral-300);
  }

  .header--tab[active]:hover::part(base) {
    color: var(--hot-color-neutral-900);
    border-bottom-color: var(--hot-color-neutral-900);
  }

  /* ================================================================
   * Right section (login button, drawer toggle)
   * ================================================================ */

  .header--right-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--hot-spacing-x-small);
    flex-shrink: 0;
  }

  /* Base mobile touch target for drawer / close buttons */
  wa-button[appearance="outlined"] {
    min-width: 2.5rem;
    min-height: 2.5rem;
    padding: 0.5rem;
  }

  /*
   * When drawer is not explicitly enabled but tabs exist, show the
   * hamburger only on mobile so users can still reach the nav items.
   */
  .header--drawer-mobile-only {
    display: inline-flex;
  }

  @media (min-width: 769px) {
    .header--drawer-mobile-only {
      display: none;
    }
  }

  /* ================================================================
   * User avatar + dropdown (shown when logged in)
   * ================================================================ */

  .header--avatar-trigger {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  .header--avatar-trigger:hover {
    box-shadow: 0 0 0 2px var(--hot-color-neutral-200);
  }

  /* Google-style text initial avatar */
  .header--avatar-initial {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--hot-color-primary-500);
    color: #fff;
    font-weight: 600;
    font-size: 0.85rem;
    line-height: 1;
    text-transform: uppercase;
    user-select: none;
  }

  .header--size-small .header--avatar-trigger {
    width: 1.5rem;
    height: 1.5rem;
  }

  .header--size-small .header--avatar-initial {
    font-size: 0.7rem;
  }

  .header--user-dropdown::part(menu) {
    min-width: 10rem;
  }

  /* ================================================================
   * Login modal
   * ================================================================ */

  .login-modal {
    --width: 35rem;
    --border-radius: var(--hot-border-radius-large);
    --background-color: white;
  }

  /* ================================================================
   * Size variants
   *
   *   small  - compact toolbar    (48 px)
   *   medium - standard header    (60 px)
   *   large  - prominent header   (72 px)
   *
   * Each section scales: header height, logo, title, buttons, tabs.
   * ================================================================ */

  /* ─── Small (48 px) ─── */

  .header--size-small {
    height: var(--hot-spacing-3x-large); /* 3rem */
  }

  .header--size-small .header--link {
    padding-top: var(--hot-spacing-x-small);
    padding-bottom: var(--hot-spacing-x-small);
  }

  .header--size-small hot-logo {
    --hot-logo-height: calc(var(--hot-spacing-medium) + var(--hot-spacing-x-small)); /* 1.5rem */
  }

  .header--size-small .header--logo-img {
    max-height: 1.75rem;
  }

  .header--size-small .header--title {
    font-size: var(--hot-font-size-medium);
  }

  .header--size-small .header--tab::part(base) {
    font-size: var(--hot-font-size-small);
    padding: var(--hot-spacing-x-small);
  }

  .header--size-small .header--right-section {
    padding-top: var(--hot-spacing-x-small);
    padding-bottom: var(--hot-spacing-x-small);
    gap: var(--hot-spacing-2x-small);
  }

  .header--size-small .login-button::part(base) {
    padding: var(--hot-spacing-3x-small) var(--hot-spacing-x-small);
    font-size: var(--hot-font-size-small);
  }

  .header--size-small .header--right-section wa-button[appearance="outlined"] {
    min-width: 1.5rem;
    min-height: 1.5rem;
    padding: 0;
  }

  .header--size-small .header--right-section wa-button[appearance="outlined"]::part(base) {
    min-width: 1.5rem;
    min-height: 1.5rem;
    padding: var(--hot-spacing-3x-small);
  }

  /* ─── Medium (60 px) ─── */

  .header--size-medium {
    height: calc(var(--hot-spacing-3x-large) + var(--hot-spacing-small)); /* 3.75rem */
  }

  .header--size-medium .header--link {
    padding-top: var(--hot-spacing-x-small);
    padding-bottom: var(--hot-spacing-x-small);
  }

  .header--size-medium hot-logo {
    --hot-logo-height: var(--hot-spacing-2x-large); /* 2.25rem */
  }

  .header--size-medium .header--logo-img {
    max-height: 2.25rem;
  }

  .header--size-medium .login-button::part(base) {
    padding: var(--hot-spacing-2x-small) var(--hot-spacing-x-small);
    font-size: var(--hot-font-size-small);
  }

  .header--size-medium .header--right-section wa-button[appearance="outlined"] {
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
  }

  .header--size-medium .header--right-section wa-button[appearance="outlined"]::part(base) {
    min-width: 2rem;
    min-height: 2rem;
    padding: var(--hot-spacing-2x-small);
  }

  /* ─── Large (72 px) ─── */

  .header--size-large {
    height: var(--hot-spacing-4x-large); /* 4.5rem */
  }

  .header--size-large .header--link {
    padding-top: var(--hot-spacing-x-small);
    padding-bottom: var(--hot-spacing-x-small);
  }

  .header--size-large hot-logo {
    --hot-logo-height: var(--hot-spacing-3x-large); /* 3rem */
  }

  .header--size-large .header--logo-img {
    max-height: 2.75rem;
  }

  .header--size-large .header--title {
    font-size: var(--hot-font-size-x-large);
  }

  /* ================================================================
   * Desktop / tablet (≥ 769 px)
   * ================================================================ */

  @media (min-width: 769px) {
    .header {
      align-items: center;
      height: auto;
    }

    .header--link {
      justify-content: flex-start;
      padding-right: 0;
      gap: var(--hot-spacing-small);
    }

    .header--title {
      font-size: var(--hot-font-size-x-large);
    }

    .header--nav {
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
      margin-left: var(--hot-spacing-x-large);
      font-weight: var(--hot-font-weight-semibold);
      overflow: hidden;
    }

    .header--nav-mobile {
      display: none;
    }

    .header--right-section {
      justify-content: center;
      margin-top: 0;
      gap: var(--hot-spacing-small);
    }

    .header--size-small .header--logo-img {
      max-height: 1.75rem;
    }

    .header--size-medium .header--logo-img {
      max-height: 2.5rem;
    }

    .header--size-large .header--logo-img {
      max-height: 2.75rem;
    }

    wa-button[appearance="outlined"] {
      min-width: auto;
      min-height: auto;
      padding: initial;
    }
  }

  /* ================================================================
   * Drawer (mobile sidebar)
   * ================================================================ */

  .drawer-content {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .drawer-nav {
    margin-bottom: var(--hot-spacing-small);
  }

  .drawer-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .drawer-nav-item + .drawer-nav-item {
    margin-top: var(--hot-spacing-x-small);
  }

  .drawer-nav-button {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: var(--hot-spacing-x-small) 0;
    font: inherit;
    color: var(--hot-color-neutral-950);
    cursor: pointer;
  }

  .drawer-nav-button:hover {
    color: var(--hot-color-primary-600);
  }

  .drawer-separator {
    border: 0;
    border-top: 1px solid var(--hot-color-neutral-100);
    margin: var(--hot-spacing-small) 0;
  }

  .drawer-link-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .drawer-link-item + .drawer-link-item {
    margin-top: var(--hot-spacing-small);
  }

  .drawer-link {
    color: inherit;
    text-decoration: none;
    font-size: var(--hot-font-size-medium);
  }

  .drawer-link:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    .drawer-nav {
      display: none;
    }
  }
`;
