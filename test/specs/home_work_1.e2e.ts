import { expect } from '@wdio/globals'

// зайти на сторінку
// перейти на API
// перевірити url ../api
// introdaction h1 isdisplayed
// introduction bred cramps
// web driver link 
//search type all is done and delete

describe('home work 1', () => {
    
    it('compare title', async () => {
        await browser.url('https://webdriver.io/');
          const title  = await browser.getTitle();  
           await expect(browser).toHaveTitle( "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")   
    });
    it('tap api link', async () => {
        await browser.url('https://webdriver.io/');
           let APIlink = await $('[href="/docs/api"]');
            await APIlink.click();
            await browser.pause(2000) ;      
    });
    it('h1 header is visible', async () => {
        await browser.url('https://webdriver.io/');
           let header = await $('H1');
            await header.isDisplayed();
            await browser.pause(2000) ;      
    });
    it('h1 breadcrumbs is displayed', async () => {
        await browser.url('https://webdriver.io/');
           let breadcrumbs = await $('.breadcrumbs__link');
            await breadcrumbs.isDisplayed();
            await browser.pause(2000) ;      
    });
    it('webdriver link is displayed', async () => {
        await browser.url('https://webdriver.io/');
           let WebDriverlink = await $('[href="/docs/api/webdriver"]');
            await WebDriverlink.isClickable();
            await WebDriverlink.isDisplayed();
            await browser.pause(2000) ;      
    });
    it('type in search field', async () => {
        await browser.url('https://webdriver.io/');
           let searchField = await $('.DocSearch-Button-Placeholder');
           await searchField.click();            
           await browser.pause(2000) ;      
           let searchInput = await $('#docsearch-input');
           await searchInput.addValue('all is done');
           await $('.DocSearch-Reset').click();
    });
});

