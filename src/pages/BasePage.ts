// src/pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage class serves as a reusable foundation for all Page Objects.
 * It provides common utility methods to interact with Playwright elements.
 */
export class BasePage {
  constructor(protected readonly page: Page) {}

  /** Navigate to a full URL (can be relative to baseURL) */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /** Get the current page title */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /** Click on a given locator */
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  /** Type text into an input field */
  async type(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /** Wait until the element is visible (default timeout: 5s) */
  async waitForVisible(locator: Locator, timeout = 5000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /** Return true if the element is visible */
  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  /** Expect that a locator is visible */
  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  /** Expect that a locator contains specific text */
  async expectText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  /** Expect that the page title contains specific text */
  async expectTitleContains(text: string): Promise<void> {
    const title = await this.page.title();
    expect(title).toContain(text);
  }
}