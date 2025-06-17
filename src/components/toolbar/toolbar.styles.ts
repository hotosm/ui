import { css } from 'lit';

export default css`
  .toolbar {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.25rem 0;
  }

  wa-button-group {
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
  }

  wa-button {
    --wa-button-padding: 0;
    min-width: 36px;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    background: none;
    font-size: 1rem;
    color: #555;
    transition: background 0.15s, color 0.15s, border 0.15s;
    cursor: pointer;
  }

  wa-button:not(:last-child) {
    border-right: 1px solid #e0e0e0;
  }

  wa-button:hover,
  wa-button:focus-visible {
    background: #f0f2f5;
    color: #d73f3f;
    border-radius: 4px;
    outline: none;
  }

  wa-icon {
    font-size: 1rem;
    width: 1em;
    height: 1em;
    display: block;
    margin: auto;
    pointer-events: none;
  }

  wa-button:focus {
    outline: none;
  }
`;