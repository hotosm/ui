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
      primary: "rgb(var(--hot-primary-rgb))",
      secondary: "rgb(var(--hot-secondary-rgb) / <alpha-value>)",
      lightGray: "rgb(var(--hot-light-gray-rgb) / <alpha-value>)",
      info: "rgb(var(--hot-info-rgb) / <alpha-value>)",
      error: "rgb(var(--hot-error-rgb) / <alpha-value>)",
      warning: "rgb(var(--hot-warning-rgb) / <alpha-value>)",
      success: "rgb(var(--hot-success-rgb) / <alpha-value>)",
    },
  },
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'hot-',
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
