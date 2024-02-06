import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "hot",
    },
  },
});
