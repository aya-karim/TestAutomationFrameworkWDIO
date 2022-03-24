/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   */
  public open() {
    browser.url(`http://main.ctqatest.info/test.php`);
    return browser.maximizeWindow();
  }
  /**
   * Switch to Iframe to be able to select elements inside it
   */
  public async iframe() {
    const iframe = await browser.$(
      ".content > div:nth-child(1) > iframe:nth-child(1)"
    );
    browser.switchToFrame(iframe);
  }
}
