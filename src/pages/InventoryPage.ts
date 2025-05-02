// src/pages/InventoryPage.ts

import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object Model for the inventory and cart functionality.
 */
export class InventoryPage extends BasePage {
  private readonly firstAddToCartButton: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly cartItem: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.firstAddToCartButton = page.locator('.inventory_item').first().locator('button');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.cartItem = page.locator('.cart_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  /** Adds the first product to the shopping cart */
  async addFirstProductToCart(): Promise<void> {
    await this.click(this.firstAddToCartButton);
  }

  /** Navigates to the shopping cart */
  async goToCart(): Promise<void> {
    await this.click(this.shoppingCartLink);
  }

  /** Verifies that at least one item is visible in the cart */
  async assertProductInCart(): Promise<void> {
    await this.expectVisible(this.cartItem);
  }

  /**
   * Verifies that the cart badge displays the expected product count.
   * @param expectedCount Expected number of items in the cart
   */
  async assertCartCount(expectedCount: number): Promise<void> {
    await this.expectText(this.cartBadge, expectedCount.toString());
  }
}