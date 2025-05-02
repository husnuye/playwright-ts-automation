// src/tests/inventory.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { credentials } from '../config/credentials';

test.describe('Inventory Cart Flow', () => {
  test('User can login, add a product to the cart, and verify it appears in the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Step 1: Navigate to login and authenticate
    await loginPage.gotoLoginPage();
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    await loginPage.assertLoginSuccess();

    // Step 2: Add product to cart
    await inventoryPage.addFirstProductToCart();

    // Step 3: Go to cart and verify product is listed
    await inventoryPage.goToCart();
    await inventoryPage.assertProductInCart();

    // Step 4: Confirm user is redirected to the cart page
    await expect(page).toHaveURL(/cart/);
  });
});