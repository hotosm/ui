import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind,
  presetTypography,
  presetIcons,
  transformerDirectives,
} from 'unocss';

const config = defineConfig({
  content: {
    filesystem: ["**/*.ts"],
  },
  rules: [
    // ['p-200', { padding: '200px' }],
  ],
  theme: {
    // borderRadius: {
    //   DEFAULT: "0.125rem",
    // },
    colors: {
      primary: "rgb(var(--sl-color-primary-rgb))",
      secondary: "rgb(var(--sl-color-secondary-rgb) / <alpha-value>)",
      lightGray: "rgb(var(--sl-color-light-gray-rgb) / <alpha-value>)",
      info: "rgb(var(--sl-color-info-rgb) / <alpha-value>)",
      error: "rgb(var(--sl-color-error-rgb) / <alpha-value>)",
      warning: "rgb(var(--sl-color-warning-rgb) / <alpha-value>)",
      success: "rgb(var(--sl-color-success-rgb) / <alpha-value>)",
    },
  },
  presets: [
    presetUno({
      prefix: 'hot-',
    }),
    presetAttributify({
      prefixedOnly: true,
    }),
    presetWind(),
    presetTypography(),
    presetIcons(),
  ],
  transformers: [
    // Allows for syntax in CSS like @apply text-center my-0 font-medium;
    transformerDirectives(),
  ],
});

export default config;
