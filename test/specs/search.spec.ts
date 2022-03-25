import ProductListPage from "../pageobjects/product-list.page"; //test\pageobjects\product-list.page.ts
import SearchPage from "../pageobjects/search.page";

describe("Tests in Homenpm Page", () => {
  beforeEach(async () => {
    await SearchPage.open();
  });

  it("Search with an existing Item", async () => {
    await SearchPage.iframe();
    const item = "Slim fit Dobby Oxford Shirt";
    await SearchPage.searchForItemWithText("SHIRTS");
    await ProductListPage.selectProduct(item);
    await ProductListPage.selectColorfromDropDown("Blue");
    await ProductListPage.selectSizefromDropDown("XL");
    await ProductListPage.addToCart();
    const successMessage = await ProductListPage.getCartSuccessMessage();
    expect(successMessage).toHaveTextContaining(
      item + " was added to your shopping cart."
    );
  });

  it("Assert on page info Text", async () => {
    expect(await SearchPage.infoText).toBeExisting();
    expect(await SearchPage.getInfoText()).toHaveTextContaining(
      "This is a demo website for testing purpose"
    );
  });
});
