// uno.config.ts
import {defineConfig, presetWind} from 'unocss'

const config = defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ]
  },
  theme: {
    borderRadius: {
      DEFAULT: "0.125rem",
    },
    colors: {
      primary: "rgb(var(--hot-primary-rgb))",
      secondary: "rgb(var(--hot-secondary-rgb) / <alpha-value>)",
      info: "rgb(var(--hot-info-rgb) / <alpha-value>)",
      error: "rgb(var(--hot-error-rgb) / <alpha-value>)",
      warning: "rgb(var(--hot-warning-rgb) / <alpha-value>)",
      success: "rgb(var(--hot-success-rgb) / <alpha-value>)",
    },
  },
  presets: [
    presetWind(),
  ],
})

export default config
