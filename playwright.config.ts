import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './Public APIs',        // where your tests live
  retries: 1,                // retry failed tests
  reporter: 'list',          // output format
  workers: 1,                // number of parallel workers
  use: {
    // headless: true,          // run browsers headless
    // baseURL: 'https://api.example.com',
  },
});
