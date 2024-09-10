import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "components/index.ts",
      formats: ["es"],
      fileName: "hotosm-ui",
    },
    rollupOptions: {},
  },
  plugins: [
    dts(),
  ],
});
