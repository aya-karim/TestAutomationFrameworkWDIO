import LoginPage from "../pageobjects/login.page";

describe("Login from LogIn page", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.iframe();
    await LoginPage.goToLoginPage();
  });

  it("Login with Invalid credentials", async () => {
    await LoginPage.SendLogInCredentials("test@test.com", "ThisIs@T3st");
    await expect(LoginPage.errormsg).toBeExisting();
    await expect(LoginPage.errormsg).toHaveTextContaining(
      "Invalid login or password."
    );
  });

  it("Login with empty credentials", async () => {
    await LoginPage.SendLogInCredentials("", "");
    await expect(LoginPage.missingEmailMsg).toHaveTextContaining(
      "This is a required field."
    );
    await expect(LoginPage.missingPasswordMsg).toHaveTextContaining(
      "This is a required field."
    );
  });
});
