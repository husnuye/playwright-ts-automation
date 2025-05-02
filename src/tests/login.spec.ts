// src/tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../config/credentials';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage(); // ✅ BasePage ile sadeleştirilmiş kullanım
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const { username, password } = credentials.validUser;
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/inventory/); // ✅ Başarılı yönlendirme kontrolü
  });

  test('should show error with invalid credentials', async () => {
    const { username, password } = credentials.invalidUser;
    await loginPage.login(username, password);
    await loginPage.assertLoginError('Epic sadface: Username and password do not match any user in this service');
  });

  test('should show error for locked out user', async () => {
    const { username, password } = credentials.lockedOutUser;
    await loginPage.login(username, password);
    await loginPage.assertLoginError('Epic sadface: Sorry, this user has been locked out.');
  });
});