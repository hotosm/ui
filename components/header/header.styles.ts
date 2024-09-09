import { css } from 'lit';

export default css`
  .header {
    display: flex;
  }

  .header--link {
    text-decoration: none;
  }

  .header--title {
  }

  .header--tab-group {
    flex-direction: column;
  }

  .header--nav {
    justify-content: space-between;
    justify-items: center;
    gap: 1rem;
    font-weight: 600;
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
