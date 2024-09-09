import { css } from 'lit';

export default css`
  .tracking {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: 80vw;
    text-align: center;
  }

  .tracking--header {
    font-weight: var(--sl-font-weight-bold);
    font-size: var(--sl-font-size-large);
    text-align: center;
  }

  .tracking--link {
    color: var(--sl-color-primary-700);
  }
`