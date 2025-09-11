import { expect } from '@wdio/globals'

// зайти на сторінку
// натиснути на api
// проскролити до футора
// перевірити віконце enable
// click по ньому
// awte until дочекаемось появи заголовку

describe('home work 2', () => {
    it('check title', async () => {
        await browser.url('https://webdriver.io/');
          const title  = await browser.getTitle();  
           await expect(browser).toHaveTitle( "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")   
    });
    it('tap api link', async () => {        
           let APIlink = $('[href="/docs/api"]');
            await APIlink.click();
            await browser.pause(2000) ;      
    });
    it('scroll to footer', async () => {        
           let window = $('.pagination-nav__link');
            await window.scrollIntoView();
            await browser.pause(2000) ;      
            await window.isDisplayed();
            await window.isClickable();
            await window.click();
    });
    it('check if h1 displayed', async () => {        
           let window = $('.pagination-nav__link');           
           await window.click();
           let title = $('H1');
           await title.isDisplayed();
    });
    
})