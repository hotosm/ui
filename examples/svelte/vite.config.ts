import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
		viteStaticCopy({
			targets: [
			  {
          src: 'node_modules/@hotosm/ui/dist/assets',
          dest: ''
			  }
			]
		}),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000
  },
});
