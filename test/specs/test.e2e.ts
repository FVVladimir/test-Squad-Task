import { expect } from '@wdio/globals'

// зайти на сторінку
// перейти на API
// перевірити url ../api
// introdaction h1 isdisplayed
// introduction bred cramps
// web driver link 
//search type all is done and delete

describe('webdriwerio main page', () => {
    
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

//---------------------------------

//зайти на сторінку
//натиснути на api
//проскролити до футора
//перевірити віконце enable
//click по ньому
// awte until дочекаемось появи заголовку

// describe('webdriver io main page', () => {
//     it('should have correct title   ', async () => {
//         await browser.url('https://webdriver.io/');
//           const title  = await browser.getTitle();
//             console.log(title);

//         await expect(browser).toHaveTitle( "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")   
//     })
// })

//------------------------------


//git hub
// sign up
//чекаемо поки з'явиться інпут перевіряемо на відображення текст
//email continiue
//password continiue
//ркєстрація до кінця це перший ькст кейс

//second git hub scloll till tekst
// ceck if is visible
//statrt free triasl button cechk if it visible and click
//pick you trial plan check if it visible
//enterprise cloud click

//therd git hub
//scroll down
// button subscribe in footer is visible
//click
//../newsletter 
// h1 is visible
//enter email
// chose contry
//clis=ck chackbox
//subscribe click
//thanks for subscribe chick if it visble

//fourth github
//input search tot jamp
//text act 
// press theline below
//перевірити що те шо ми ввели е у списку відображеному по href

//fifth git hub
//pricing click
//get the complit..... is visible
//scroll to compare all features
//click
// compare features is visiblу