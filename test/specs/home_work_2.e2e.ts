import { expect } from '@wdio/globals';

// зайти на сторінку
// натиснути на api
// проскролити до футора
// перевірити віконце isVisible
// перевірити віконце isClickible
// click по ньому
// waitUntil дочекаемось появи заголовку webdriver protokol

describe('home work 2', () => {
       
    it('go to the page webdriver.io', async () => {
        
       await browser.url('https://webdriver.io/');       
       await expect(browser).toHaveTitle( "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")   
    });
    
    it('tap api link', async () => {        
           const APIlink = $('[href="/docs/api"]');
            
            await APIlink.click();
            await browser.pause(2000);      
    });
    
    it('scroll to footer', async () => {        
           
       const button = $('.pagination-nav__link');            
         await button.scrollIntoView();           
    });
    
    it('check if button visible', async () => {        
           const button = $('.pagination-nav__link');                
            await expect(button).toBeDisplayed();
            await browser.pause(2000);            
    });
    
    it('check if button clicable', async () => {        
           const button = $('.pagination-nav__link');            
             const clicable = await button.isClickable();
              await expect(clicable).toBe(true);       
    });
    
    it('click on the button', async () => {        
           const button = $('.pagination-nav__link');           
            await button.click();
    });
    
    it('check if h1 displayed', async () => {           
         const header = $('H1');
           await header.waitForDisplayed({timeout:3000});
           await expect(header).toBeDisplayed();
    });    
});