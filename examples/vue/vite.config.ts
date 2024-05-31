import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['hot-toolbar'].includes(tag),
        }
      },
    }),
		viteStaticCopy({
			targets: [
			  {
          src: 'node_modules/@hotosm/ui/dist/assets',
				  dest: ''
			  }
			]
		}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  }
})
