import { expect } from '@wdio/globals';

describe('home work 1', () => {
    
    it('go to page webdriver.io', async () => {        
          
           await browser.url('https://webdriver.io/');
           await expect(browser).toHaveTitle( "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO");  
    });
    
    it('press api link', async () => {
        
           const APIlink = $('[href="/docs/api"]');
              
              await APIlink.click();
              await browser.pause(2000);          
        });
    
        it('check current url', async () => {
        
            const currentUrl = await browser.getUrl();            
               
               await expect(currentUrl).toContain('webdriver.io/docs/api');
               await browser.pause(2000);                
        });
    
    it('h1 header is displayed', async () => {
        
           const header = $('h1');
            
            await header.waitForDisplayed({timeout:3000});
            await expect(header).toBeDisplayed();
            await expect(header).toHaveText("Introduction");
            await browser.pause(2000);      
    });
    
    it('h1 breadcrumbs is displayed', async () => {
        
           const breadcrumbs = $('.breadcrumbs__link');
           
            await expect(breadcrumbs).toBeDisplayed();
            await browser.pause(2000);      
    });
    
    it('webdriver link is displayed', async () => {
        
           const WebDriverlink = $('[href="/docs/api/webdriver"]');
              
              await expect(WebDriverlink).toBeDisplayed();
              await browser.pause(2000);               
    });
    
    it('webdriver link is clickable', async () => {
        
           const WebDriverlink = $('[href="/docs/api/webdriver"]');
            
            const clicable = await WebDriverlink.isClickable();
            await expect(clicable).toBe(true);
            await browser.pause(2000);   
    });
    
    it('type in search field and delete text', async () => {
        
           const searchField = $('.DocSearch-Button-Placeholder');
           const searchInput = $('#docsearch-input');
           
            await searchField.click();            
            await browser.pause(2000) ;      
            await searchInput.addValue('all is done');
            await $('.DocSearch-Reset').click();
    });
});