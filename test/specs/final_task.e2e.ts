import { expect } from '@wdio/globals';

describe('sign up on github and check if search work', () => {

    beforeEach(async () => {
        await browser.url("https://github.com");
    });
    
    it('sign up on github', async () => {
        
        const signUpButton = $(".HeaderMenu-link--sign-up");
        const signUpFormHeader = $("#signup-form-fields");
        const emailField = $("#email");
        const passwordField = $("#password");
        const userName = $("#login");
        const selectCuntryButton = $(".country-select-button");       
        const cuntryInput = $(".FormControl-input");
           
            await expect(signUpButton).toBeDisplayed();
            await expect(signUpButton).toBeClickable();
            await signUpButton.click();
            
            await expect(signUpFormHeader).toBeDisplayed();
            await expect(signUpFormHeader).toHaveText("Sign up for GitHub");
            
            await emailField.setValue("userName@i.ua");
            await passwordField.setValue("superPasswor23!");
            await userName.setValue("superuser");
            
            await expect(selectCuntryButton).toBeDisplayed();
            await expect(selectCuntryButton).toBeClickable();
            await selectCuntryButton.click();        
            await browser.pause(3000);
            
            await cuntryInput.setValue("Ukraine");
            await browser.pause(3000);
            
            await emailField.clearValue();
            await passwordField.clearValue();
            await userName.clearValue();        
            await cuntryInput.clearValue();

    });

    it("check if copilot button is displayed and header is displayed", async () => {
          
        const header = $(".Primer_Brand__Heading-module__Heading___IVpmp");
        const secondHeader = $(".text-center");
        const buttonCopilot = $("//span[contains(text(),'Try GitHub Copilot')]");
        const buttonTryNow = $("//span[contains(text(), 'Try now')]")
            
            await header.scrollIntoView();
            await expect(header).toBeDisplayed();
            await browser.pause(3000);
           
            await expect(buttonCopilot).toBeDisplayed();
            await expect(buttonCopilot).toBeClickable();
            await browser.pause(3000);
            
            await buttonCopilot.click();
            await browser.pause(3000);
            await expect(secondHeader).toBeDisplayed();
            await browser.pause(3000);
            
            await expect(buttonTryNow).toBeDisplayed();
            await expect(buttonTryNow).toBeClickable();
            await buttonTryNow.click();
    });

    it("check button subscribe and form work", async () => {
        
        const linkSubscribe = $("//a[@class = 'btn-mktg mb-4 btn-muted-mktg']");
        const headerSubscribe = $("#hero-section-brand-heading");
        const inputEmail = $("#\\:R11h76\\:");
        const checkBox = $("#gated-agree-marketingEmailOptin1");
        const selectCuntry = $("#country");
        const subscribeButton = $("//button[@class='Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4']");
        const thanksHeader = $("#hero-section-brand-heading");
            
            await linkSubscribe.scrollIntoView();
            
            await expect(linkSubscribe).toBeDisplayed();
            await linkSubscribe.click();
            
            await expect(headerSubscribe).toBeDisplayed();
            
            await inputEmail.setValue("emir@ua.fm");
            await selectCuntry.selectByAttribute("value", "UA");
            
            await expect(checkBox).toBeDisplayed();
            await expect(checkBox).toBeClickable();
            await checkBox.click();
            
            await expect(subscribeButton).toBeDisplayed();
            await expect(subscribeButton).toBeClickable();
            await subscribeButton.click();
            await browser.pause(2000);
            
            await thanksHeader.isDisplayed();
    });
    
    it("check the search results", async () => {
        
        const searchButton = $("//button[@data-action='click:qbsearch-input#handleExpand']");
        const inputField = $("#query-builder-test");
        const searchAllButton = $("//span[contains(text(), 'Search all of GitHub')]");
        const link = $("//a[@href = '/nektos/act']");
            
            await expect(searchButton).toBeDisplayed();
            await expect(searchButton).toBeClickable();
            await searchButton.click();
            await browser.pause(2000);
            
            await inputField.setValue("act");
            await browser.pause(2000);
            
            await expect(searchAllButton).toBeDisplayed();
            await expect(searchAllButton).toBeClickable();
            await searchAllButton.click();
            await browser.pause(2000);
            
            await expect(link).toHaveText("nektos/act");
    });

    it("check ability compare all features", async () => {
        const pricingLink = await $("//a[@href = 'https://github.com/pricing']");
        const compareAllFeatures = await $("//a[@href = '#compare-features']");
        const compareFeaturesHeader = await $(".h1");
            
            await expect(pricingLink).toBeDisplayed();
            await expect(pricingLink).toBeClickable();
            await pricingLink.click();
            await browser.pause(2000);
            
            await compareFeaturesHeader.waitForDisplayed({timeout:5000});
            await compareAllFeatures.scrollIntoView();
            await expect(compareAllFeatures).toBeDisplayed();
            await expect(compareAllFeatures).toBeClickable();
            await compareAllFeatures.click();
            await browser.pause(2000);

            await compareFeaturesHeader.waitForDisplayed({timeout:3000});
            await expect(compareFeaturesHeader).toBeDisplayed();
            await browser.pause(2000);
    });
});