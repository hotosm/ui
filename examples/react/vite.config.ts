import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({}),
		viteStaticCopy({
			targets: [
			  {
				src: 'node_modules/@shoelace-style/shoelace/dist/assets',
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
