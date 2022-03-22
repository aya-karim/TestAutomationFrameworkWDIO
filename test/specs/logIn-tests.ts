import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/search.page';

describe('Log in from LogIn page', () => {
    it('should login with Invalid credentials', async () => {
        await LoginPage.openLogInPage();
        await LoginPage.login('test@test.com', 'ThisIs@T3st');
        await expect(LoginPage.errormsg).toBeExisting();
        await expect(LoginPage.errormsg).toHaveTextContaining('Your Login Name or Password is invalid');
    });
});

describe('Log in from LogIn page', () => {
    it('should login with empty credentials', async () => {
        await LoginPage.openLogInPage();
        await LoginPage.login('', '');
        await LoginPage.clickOnSubmitBtn();
        await expect(LoginPage.errormsg).toBeExisting();
        await expect(LoginPage.errormsg).toHaveTextContaining('User should be filled out');
    });
});
