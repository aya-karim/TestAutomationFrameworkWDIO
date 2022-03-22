import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    public searchBar (): ChainablePromiseElement<WebdriverIO.Element>{
       // $('input#search').waitForExist({timeoutMsg: "Search bar element is not found existing!!"});
        return this.element.shadow$('>>>input[id="search"]');
        //return $("//input[@id='search']");
       // return this.element.shadow$('#search');
       //input[@id='search']
    }
    public get element()
    {
        return $('iframe[src="https://main.ctqatest.info/ecom/"]');
    }
    public get searchBtn (){
        return $('>>>#search_mini_form button');
    }
    public get infoText (){
        return $('>>>span[data-qa-value="This is a demo website for testing purpose"]');
        //return $("//div[@id='site-info']").shadow$('span');
    }

  
    public async searchWith(product: string){
        await (await this.searchBar()).setValue(product);
        await (await this.searchBtn).click();
    }

    public async waitForSearchInput(){
        this.searchBar().isDisplayed()
         await browser.waitUntil(async ()=> this.searchBar().isDisplayed(),{
            timeout: 30000,
            timeoutMsg:'expected serachbar to be visible before 30s'
        }     
    );
    }

    public openHomePage () {
        return super.open('test.php');
    }
    
    public async getinfoText(): Promise<string>  {
      return await this.infoText.getText();
    }
}

export default new SearchPage();
