import type { Page } from 'playwright';

export class BasePage {
  constructor(protected page: Page) {}

  async click(selector: string) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.waitForSelector(selector);
    await this.page.fill(selector, value);
  }

  async isVisible(selector: string) {
    return await this.page.isVisible(selector);
  }

  async getTitle() {
    return await this.page.title();
  }
}