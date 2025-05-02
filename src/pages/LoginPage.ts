// src/pages/LoginPage.ts

import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object Model for the login page.
 * Inherits reusable utilities from BasePage.
 */
export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /** Navigate to the login page using baseURL */
  async gotoLoginPage(): Promise<void> {
    await this.navigateTo('/');
  }

  /**
   * Fill in login credentials and click the login button.
   * @param username - the username to enter
   * @param password - the password to enter
   */
  async login(username: string, password: string): Promise<void> {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /** Wait for successful login by checking the redirected URL */
  async assertLoginSuccess(): Promise<void> {
    await this.page.waitForURL('**/inventory.html');
  }

  /**
   * Asserts that an error message appears and matches the expected text.
   * @param expectedMessage - the exact error text expected
   */
  async assertLoginError(expectedMessage: string): Promise<void> {
    await this.expectVisible(this.errorMessage);
    await this.expectText(this.errorMessage, expectedMessage);
  }
}