import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get account() {
    return $('a[href="http://main.ctqatest.info/ecom/customer/account/"]');
  }

  public get LogInBtn() {
    return $(
      'a[href="http://main.ctqatest.info/ecom/customer/account/login/"]'
    );
  }

  public get inputUsername() {
    return $("#email");
  }

  public get inputPassword() {
    return $("#pass");
  }

  public get btnSubmit() {
    return $("#send2");
  }

  public get errormsg() {
    return $(".error-msg");
  }

  public get missingEmailMsg() {
    return $("#advice-required-entry-email");
  }

  public get missingPasswordMsg() {
    return $("#advice-required-entry-pass");
  }
  /**
   * Methods
   */
  public async SendLogInCredentials(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  public async goToLoginPage() {
    await this.account.click();
    await this.LogInBtn.click();
  }

  public async clickOnSubmitBtn() {
    await this.btnSubmit.click();
  }
}
export default new LoginPage();
