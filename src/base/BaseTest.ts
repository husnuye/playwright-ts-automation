// src/base/BaseTest.ts
import { test as base, expect, Page } from '@playwright/test';

type TestOptions = {
  page: Page;
};

export const test = base.extend<TestOptions>({
  // Page fixture
  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect };