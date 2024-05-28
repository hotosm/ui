import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["./stories/**/*.stories.ts"],
  // This is required to bundle the shoelace icons
  staticDirs: ["../node_modules/@shoelace-style/shoelace/dist"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
