// src/pages/LoginPage.ts
import type { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async assertLoginSuccess() {
    await this.page.waitForSelector('.inventory_list'); // Başarılı giriş sonrası ürün listesi gelir
  }
}