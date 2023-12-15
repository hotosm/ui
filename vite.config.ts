import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
    }),
    tsconfigPaths(),
  ],
});
