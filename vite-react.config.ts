import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
    }),
    tsconfigPaths(),
    dts()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index-react.ts"),
      name: "hotui",
      fileName: 'hotui',
    },
  },
});



