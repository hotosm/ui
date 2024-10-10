import { css } from 'lit';

export default css`
  .matomoTracking {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: 80vw;
    text-align: center;
  }

  .matomoTracking--header {
    font-weight: var(--hot-font-weight-bold);
    font-size: var(--hot-font-size-large);
    text-align: center;
  }

  .matomoTracking--link {
    color: var(--hot-color-primary-700);
  }
`