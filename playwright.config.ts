import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'playwright/tests',
  use: {
    baseURL: 'http://localhost:4173',
    viewport: { width: 960, height: 260 },
    colorScheme: 'light',
  },
  webServer: {
    // Start a simple static server AFTER building
    command: 'pnpm run build && pnpm run preview:vr',
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },
});
