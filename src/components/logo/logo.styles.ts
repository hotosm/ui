import { css } from "lit";

export default css`
  .logo {
    line-height: 0;
    height: var(--hot-logo-height, var(--hot-spacing-3x-large));
    display: inline-flex;
    align-items: center;
  }

  .logo img {
    display: block;
    height: 100%;
    width: auto;
  }
`;
