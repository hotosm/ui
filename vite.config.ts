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
  // base: "",
  build: {
    lib: {
      entry: resolve(__dirname, "components/index.ts"),
      name: "hot",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 8080
  }
});
