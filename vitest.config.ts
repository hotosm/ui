// vitest.config.ts
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
   resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  
  test: {
    environment: 'jsdom',       // so DOM APIs exist in tests
    setupFiles: ['./tests/setupTests.ts'],
    include: ['tests/**/*.spec.*', 'tests/**/*.test.*', 'src/**/*.{spec,test}.*'],
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage'
    }
  }
})
