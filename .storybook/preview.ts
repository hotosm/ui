import type { Preview } from "@storybook/web-components-vite";

import '../src/style.css';
import './custom.css';

// Apply required WebAwesome theme classes to the HTML element so
// WA components render with HOT palette in Storybook.
document.documentElement.classList.add('wa-theme-default', 'wa-palette-hotosm');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
