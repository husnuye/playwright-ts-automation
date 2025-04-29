import { BasePage } from '../base/BasePage';

export class InventoryPage extends BasePage {
  async addFirstProductToCart() {
    await this.page.click('.inventory_item button');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async assertProductInCart() {
    await this.page.waitForSelector('.cart_item');
  }
}