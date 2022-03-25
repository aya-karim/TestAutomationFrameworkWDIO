import SalesPage from "../pageobjects/sales.page";
import SearchPage from "../pageobjects/search.page";

describe("Tests in Search Page", () => {
  before(async () => {
    await SalesPage.open();
    await SalesPage.iframe();
  });

  it("Sale List filter", async () => {
    await SearchPage.openAllSalesMenu();
    await SalesPage.clickOnPriceFilter();
    const prices = await SalesPage.getPriceListText();
    prices.forEach(async (price) => {
      await expect(price).toBeGreaterThanOrEqual(100);
      await expect(price).toBeLessThanOrEqual(200);
    });
  });
});
