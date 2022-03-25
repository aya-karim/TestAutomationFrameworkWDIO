import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get saleMenu() {
    return $('>>>a[href="http://main.ctqatest.info/ecom/sale.html"]');
  }

  public get searchBar() {
    return $("#search");
  }

  public get searchBtn() {
    return $("button[type='submit']");
  }

  public get infoText() {
    return $(
      '>>>span[data-qa-value="This is a demo website for testing purpose"]'
    );
  }

  public async openAllSalesMenu() {
    await this.saleMenu.click();
  }

  public async getInfoText() {
    return await this.infoText.getText();
  }

  public async searchForItemWithText(product: string) {
    await expect(this.searchBar).toExist();
    await this.searchBar.setValue(product);
    await this.searchBtn.click();
  }
}

export default new SearchPage();
