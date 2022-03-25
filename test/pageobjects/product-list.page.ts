import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductListPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get colorDropDown() {
    return $("(//select[@class='required-entry super-attribute-select'])[1]");
  }

  public get sizeDropDown() {
    return $("(//select[@class='required-entry super-attribute-select'])[2]");
  }

  public get addToCartBtn() {
    return $(".add-to-cart-buttons button");
  }

  public get cartSuccessMsg() {
    return $(".success-msg span");
  }

  public getProduct(productName: string) {
    return $("//div[@class='product-info']//a[@title='" + productName + "']");
  }

  /*
   * Methods
   */
  public async selectProduct(productName: string) {
    await this.getProduct(productName).click();
  }

  public async selectColorfromDropDown(productColor: string) {
    await this.colorDropDown.selectByVisibleText(productColor);
  }

  public async selectSizefromDropDown(productSize: string) {
    await this.sizeDropDown.selectByVisibleText(productSize);
  }

  public async addToCart() {
    await this.addToCartBtn.click();
  }

  public async getCartSuccessMessage() {
    return (await this.cartSuccessMsg).getText();
  }
}
export default new ProductListPage();
