import { expect, Locator, Page, test } from "playwright/test";

export class RolePage{
    //page 
    readonly page : Page;

    //button element locators
    readonly primaryButton : Locator;
    readonly toggleButton : Locator;
    readonly divWithButtonRole : Locator;

    //form element locators
    readonly username : Locator;
    readonly acceptTerms : Locator;

    //navigation element locators
    readonly homeLink : Locator;
    readonly productsLink : Locator;
    readonly contactLink : Locator;

    //getByText element locators
    readonly importantText : Locator;
    readonly importantStrongText : Locator;
    readonly colouredText : Locator;
    readonly colouredRedText : Locator;
    readonly listText : Locator;
    readonly listText1 : Locator;
    readonly listText2 : Locator;
    readonly listText3 : Locator;
    readonly submitFormButton : Locator;

    constructor(page: Page){
        //page
        this.page = page;

        //button element locators xpath
        this.primaryButton = page.locator("//button[@role='button']")
        this.toggleButton = page.locator("//button[@aria-pressed='false']")
        this.divWithButtonRole = page.locator("//div[@role='button']")

        //form elemet locators xpath
        this.username = page.locator("//input[@role='textbox']")
        this.acceptTerms = page.getByRole('checkbox', {name : 'Accept terms'})

        //navigation element locators xpath
        this.homeLink = page.getByRole('menuitem', {name : 'Home'})
        this.productsLink = page.getByRole('menuitem', {name : 'Products'})
        this.contactLink = page.getByRole('menuitem', {name : 'Contact'})

        //getByText element locators xpath
        this.importantText = page.locator("p:has-text('This paragraph contains some') strong")
        this.importantStrongText = page.locator("p strong:has-text('important')")
        this.colouredText = page.getByText('Another paragraph with colored text for demonstration.')
        this.colouredRedText = this.colouredText.locator('span')
    }

    async goto() {
        await this.page.goto('')
    }
}
