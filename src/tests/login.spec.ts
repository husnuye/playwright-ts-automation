import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User should be able to login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginSuccess();

  await expect(page).toHaveURL(/inventory/); // Başarılı login sonrası bu sayfaya gider
});