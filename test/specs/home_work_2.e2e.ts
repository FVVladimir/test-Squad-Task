import { expect } from '@wdio/globals'

// зайти на сторінку
// натиснути на api
// проскролити до футора
// перевірити віконце enable
// click по ньому
// awte until дочекаемось появи заголовку

describe('home wirk 2', () => {
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
    
})