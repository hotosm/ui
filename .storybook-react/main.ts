import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./stories/**/*.stories.ts"],
  staticDirs: ["./static"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  }
};
export default config;

