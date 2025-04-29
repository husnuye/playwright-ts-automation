import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { credentials } from '../config/testData';

test('User can login, add product to cart, and verify cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login(credentials.validUser.username, credentials.validUser.password);
  await loginPage.assertLoginSuccess();

  await inventoryPage.addFirstProductToCart();
  await inventoryPage.goToCart();
  await inventoryPage.assertProductInCart();

  await expect(page).toHaveURL(/cart/);
});