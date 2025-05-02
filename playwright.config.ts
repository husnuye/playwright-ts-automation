import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000, // 30 seconds per test
  expect: {
    timeout: 5000, // Default timeout for expect conditions
  },
  retries: 0, // Set to 1 or 2 if you want automatic retries
  use: {
    headless: true, // Should be false only during local debugging
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry', // Optional: enables Playwright trace viewer
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],
  fullyParallel: true,
});