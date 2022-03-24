import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productListPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get colorDropDown() {
    return $("(//select[@class='required-entry super-attribute-select'])[1]");
  }

  public get sizeDropDown() {
    return $("(//select[@class='required-entry super-attribute-select'])[2]");
  }

  public get AddToCartBtn() {
    return $(".add-to-cart-buttons button");
  }

  public get cartsuccessMsg() {
    return $(".success-msg span");
  }

  /*
   * Methods
   */
  public async selectProduct(name: string) {
    return (
      await $("//div[@class='product-info']//a[@title='" + name + "']")
    ).click();
  }

  public async selectColorfromDropDown(color: string) {
    await this.colorDropDown.selectByVisibleText(color);
  }

  public async selectSizefromDropDown(size: string) {
    await this.sizeDropDown.selectByVisibleText(size);
  }

  public async AddtoCart() {
    await this.AddToCartBtn.click();
  }

  public async VerifyItemIsAddedToCart(item: string) {
    await expect(this.cartsuccessMsg).toHaveTextContaining(
      item + " was added to your shopping cart."
    );
  }
}
export default new productListPage();
