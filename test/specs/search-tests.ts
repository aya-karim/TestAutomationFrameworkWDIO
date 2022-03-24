import productListPage from "../pageobjects/product-list.page"; //test\pageobjects\product-list.page.ts
import SearchPage from "../pageobjects/search.page";

describe("Tests in Homenpm Page", () => {
  beforeEach(async () => {
    await SearchPage.open();
  });

  it("Search with an existing Item", async () => {
    await SearchPage.iframe();
    const item = "Slim fit Dobby Oxford Shirt";
    await SearchPage.searchForItemWithText("SHIRTS");
    await productListPage.selectProduct(item);
    await productListPage.selectColorfromDropDown("Blue");
    await productListPage.selectSizefromDropDown("XL");
    await productListPage.AddtoCart();
    await productListPage.VerifyItemIsAddedToCart(item);
  });

  it("Assert on page info Text", async () => {
    expect(await SearchPage.infoText).toBeExisting();
    expect(await SearchPage.getinfoText()).toHaveTextContaining(
      "This is a demo website for testing purpose"
    );
  });
});
