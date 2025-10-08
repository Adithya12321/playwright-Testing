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
    readonly listText1 : Locator;
    readonly listText2 : Locator;
    readonly listText3 : Locator;
    readonly lisText2Link : Locator;
    readonly submitFormButton : Locator;

    //getByLabel element locators
    readonly emailAdress : Locator;
    readonly password : Locator;
    readonly yourAge : Locator;
    readonly shippingMethodStandard : Locator;
    readonly shippingMethodExpress : Locator;

    //getByPlaceholder element locators
    readonly namePlaceholder : Locator;
    readonly phoneNumberPlaceHolder : Locator;
    readonly messagePlaceHolder : Locator;
    readonly searchProdcutsPlaceHolder : Locator;
    readonly searchButtonPlaceHolder : Locator;

    //getByAltText element locators
    readonly playwrightLogo : Locator;

    //getByTitle element locators
    readonly homeTitle : Locator;
    readonly htmlTitle : Locator;
    readonly toolTipTitle : Locator;
    readonly saveButtonTitle : Locator;

    //getByTestId() element locators
    readonly userNameTid : Locator;
    readonly userEmailTid : Locator;
    readonly editProfileTid : Locator;
    readonly productAPrice : Locator;
    readonly productBPrice : Locator;
    readonly productCPrice : Locator;
 
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
        this.listText1 = page.getByText('List item 1')
        this.listText2 = page.getByText('List item 2 with link')
        this.listText3 = page.getByText('Special: Unique text identifier')
        this.lisText2Link = this.listText2.getByRole('link', {name : 'link'})
        this.submitFormButton = page.getByRole('button', {name : 'Submit Form'})

        //getByLabel element locators xpath
        this.emailAdress = page.getByLabel('Email Address:')
        this.password = page.getByLabel('Password:')
        this.yourAge = page.getByLabel('Your age:')
        this.shippingMethodStandard = page.getByLabel('Standard')
        this.shippingMethodExpress = page.getByLabel('Express')

        //getByPlaceholder element locators xpath
        this.namePlaceholder = page.getByPlaceholder('Enter your full name')
        this.phoneNumberPlaceHolder = page.getByPlaceholder('Phone number (xxx-xxx-xxxx')
        this.messagePlaceHolder = page.getByPlaceholder('type your message here...')
        this.searchProdcutsPlaceHolder = page.getByPlaceholder('Search Products...')
        this.searchButtonPlaceHolder = page.getByRole('button', {name : 'Search'})

        //getByImage element locators xpath
        this.playwrightLogo = page.getByAltText('logo image')

        //getByTitle element lcoators xpath
        this.homeTitle = page.getByTitle('Home page link')
        this.htmlTitle = page.getByTitle('HyperText Markup Language')
        this.toolTipTitle = page.getByTitle('Tooltip text')
        this.saveButtonTitle = page.getByTitle('Click to save your changes')

        //getByTestId element lcoators xpath
        this.userNameTid = page.getByTestId('profile-name')
        this.userEmailTid = page.getByTestId('profile-email')
        this.editProfileTid = page.getByTestId('edit-profile-btn')
        this.productAPrice = page.getByTestId('product-card-1').getByTestId('product-price')
        this.productBPrice = page.getByTestId('product-card-2').getByTestId('product-price')
        this.productCPrice = page.getByTestId('product-card-3').getByTestId('product-price')
    }

    async goto() {
        await this.page.goto('')
    }
}
