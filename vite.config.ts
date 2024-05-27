import { resolve } from "path";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    UnoCSS({
      mode: "shadow-dom",
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@shoelace-style/shoelace/dist/assets/icons/*.svg',
          dest: 'shoelace/assets/icons'
        }
      ]
    }),
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
