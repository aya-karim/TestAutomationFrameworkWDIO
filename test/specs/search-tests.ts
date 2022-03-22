import LoginPage from  '../pageobjects/login.page';
import SearchPage from '../pageobjects/search.page';

describe('Tests in Search Page', () => {
   beforeEach(async () => {
        await SearchPage.openHomePage();
    });

    it('Search with an existing value', async () => {
            //await SearchPage.openHomePage();
          //   await browser.pause(20000);
            //await SearchPage.waitForSearchInput()
           // console.log(await (await (await SearchPage.sea).shadow$('#top')).isDisplayed())
            // expect( await SearchPage.searchBar().isDisplayed()).toBe();
           // console.log('::DEBUG::', await (await SearchPage.searchBar()).isExisting());
            //await SearchPage.searchWith("SHIRT");
            //await expect(LoginPage.errormsg).toBeExisting();
            //await expect(LoginPage.errormsg).toHaveTextContaining('User should be filled out');
        });

    it('Assert on info Text', async () => {
        expect(await SearchPage.infoText).toBeExisting();
        expect(await SearchPage.getinfoText()).toHaveTextContaining('This is a demo website for testing purpose');
    });
});