import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('[name="username"]');
    }

    public get inputPassword () {
        return $('[name="password"]');
    }

    public get btnSubmit () {
        return $('#loginBtn');
    }

    public get errormsg (){
        return $('#error_text');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public openLogInPage () {
        return super.open('login.php');
    }

    public async clickOnSubmitBtn(){
        await this.btnSubmit.click();
    }
 
}
export default new LoginPage();
