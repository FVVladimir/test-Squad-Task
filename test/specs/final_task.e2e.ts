import { expect } from '@wdio/globals'


//git hub
// sign up
//чекаемо поки з'явиться інпут перевіряемо на відображення текст
//email continiue
//password continiue
//ркєстрація до кінця це перший тест кейс

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

describe('sign up on github and check if search work', () => {
    
    it('sign up on github', async () => {
        await browser.url("https://github.com");
        await $(".HeaderMenu-link--sign-up").click();
        await $("#signup-form-fields").isDisplayed();
        let input = $("#email");
        let password = $("#password");
        let username = $("#login");
        let button = $(".country-select-button");
        // let cuntry = $("#select-panel-5306d3c3-2b9d-4afd-8f4c-8f3481963c84-filter");
        let cuntry = $(".FormControl-input");
        await input.setValue("userName@i.ua");
        await password.setValue("superPasswor23!");
        await username.setValue("superuser");
        await button.click();        
        await browser.pause(3000);
        await cuntry.setValue("Ukraine");
        await browser.pause(3000);
        await input.clearValue();
        await password.clearValue();
        await username.clearValue();        
        await cuntry.clearValue();

    });

    it.only("check if copilot button is displayed and header is displayed", async () => {
    await browser.url("https://github.com");    
    let header = $(".Primer_Brand__Heading-module__Heading___IVpmp");
    let secondHeader = $(".text-center");
    let buttonCopilot = $("//span[contains(text(),'Try GitHub Copilot')]");
    let buttonTryNow = $("//span[contains(text(), 'Try now')]")
    await header.scrollIntoView();
    await header.isDisplayed();
    await browser.pause(3000);
    await buttonCopilot.isDisplayed();
    await browser.pause(3000);
    await buttonCopilot.click();
    await browser.pause(3000);
    await secondHeader.isDisplayed();
    await browser.pause(3000);
    await buttonTryNow.click();

    });
});