import salesPage from "../pageobjects/sales.page";
import searchPage from "../pageobjects/search.page";

describe("Tests in Search Page", () => {
  before(async () => {
    await salesPage.open();
    await salesPage.iframe();
  });

  it("Sale List filter", async () => {
    await searchPage.openAllSalesMenu();
    await salesPage.clickOnPriceFilter();
    await salesPage.priceListText();
  });
});
