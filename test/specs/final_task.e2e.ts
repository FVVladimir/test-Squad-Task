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
        const emailField = $("#email");
        const passwordField = $("#password");
        const username = $("#login");
        const button = $(".country-select-button");       
        const cuntry = $(".FormControl-input");
        await $(".HeaderMenu-link--sign-up").click();
        await $("#signup-form-fields").isDisplayed();
        await emailField.setValue("userName@i.ua");
        await passwordField.setValue("superPasswor23!");
        await username.setValue("superuser");
        await button.click();        
        await browser.pause(3000);
        await cuntry.setValue("Ukraine");
        await browser.pause(3000);
        await emailField.clearValue();
        await passwordField.clearValue();
        await username.clearValue();        
        await cuntry.clearValue();

    });

    it("check if copilot button is displayed and header is displayed", async () => {
    await browser.url("https://github.com");    
    const header = $(".Primer_Brand__Heading-module__Heading___IVpmp");
    const secondHeader = $(".text-center");
    const buttonCopilot = $("//span[contains(text(),'Try GitHub Copilot')]");
    const buttonTryNow = $("//span[contains(text(), 'Try now')]")
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

    it.only("check button subscribe and form work", async () => {
        await browser.url("https://github.com");
        const linkSubscribe = $("//a[@class='btn-mktg mb-4 btn-muted-mktg']");
        const headerSubscribe = $("#hero-section-brand-heading");
        const inputEmail = $("#\\:R11h76\\:");
        const checkBox = $("#gated-agree-marketingEmailOptin1");
        const selectCuntry = $("#country");
        const subscribeButton = $("//button[@class='Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4']");
        const thanksHeader = $("#hero-section-brand-heading");
        await linkSubscribe.scrollIntoView();
        await linkSubscribe.isDisplayed();
        await linkSubscribe.click();
        await headerSubscribe.isDisplayed();
        await inputEmail.setValue("emir@ua.fm");
        await selectCuntry.selectByAttribute("value", "UA");
        await checkBox.click();
        await subscribeButton.click();
        await browser.pause(2000);
        await thanksHeader.isDisplayed();
    });
});