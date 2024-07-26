import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify: false,
    lib: {
      entry: "components/index.ts",
      formats: ["es"],
      fileName: "components",
    },
    rollupOptions: {},
  },
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
    }),
    dts(),
  ],
});
