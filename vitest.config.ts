// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
  browser: {
    enabled: true,
    provider: playwright(),
      instances: [
        { browser: 'chromium' }
      ],
   
  },
  setupFiles: ['./tests/setupTests.ts'],
  include: ['tests/**/*.spec.ts', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
  alias: {
    'src/assets/logo/osm-logo.svg?raw': 'src/assets/logo/osm-logo.svg',
  },
}

});