import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SalePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get priceList() {
    return $$(".special-price .price");
  }

  public get priceFilter() {
    return $(
      'a[href="http://main.ctqatest.info/ecom/sale.html?price=100-200"]'
    );
  }

  public async getPriceListText(): Promise<number[]> {
    let prices: number[] = [];
    await this.priceList.forEach(async function (result) {
      await result.waitForExist();
      let price = await result.getText();
      price = price.substring(1);
      let numericPrice = Number(price);
      prices.push(numericPrice);
    });
    return prices;
  }

  public async clickOnPriceFilter() {
    await this.priceFilter.waitForExist();
    await this.priceFilter.click();
  }
}

export default new SalePage();
