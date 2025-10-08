import {expect,test, Page} from '@playwright/test'
import { RolePage } from './pages'

let page: Page;
let p: RolePage;

test.beforeEach(async({page: browser}) => {
    page = browser;
    p = new RolePage(page);
    await p.goto()
})
test.describe('1. getByRole() Locators tests', () => {
    test.describe('Button section tests', () => {
        test('buttons visibility test', async() => {
            await expect(p.primaryButton).toBeVisible()
            await expect(p.toggleButton).toBeVisible()
            await expect(p.divWithButtonRole).toBeVisible()
        })
    })

    test.describe('Form Elements test', () => {
        test('username input test', async() => {
            await p.username.fill('test123')
            await expect(p.username).toBeVisible()
        })

        test('checkbox test', async() => {
            await expect(p.acceptTerms).toBeVisible()
            await expect(p.acceptTerms).not.toBeChecked()
            await p.acceptTerms.setChecked(true)
            await expect(p.acceptTerms).toBeChecked()
        })
    })

    test.describe('Navigation test', () => {
        test('test 1', async() => {
            await expect(p.homeLink).toBeVisible()
            await expect(p.homeLink).toBeVisible()
            await expect(p.homeLink).toBeVisible()
        })
    })
})

test.describe('2. getByText() Locators tests', () => {
    test('test 1', async() => {
        await expect(p.importantText).toBeVisible()
        await expect(p.importantStrongText).toHaveText('important')
    })

    test('test 2', async() => {
        await expect(p.colouredText).toBeVisible()
        await expect(p.colouredRedText).toHaveText('colored text')
        await expect(p.colouredRedText).toHaveCSS('color', 'rgb(255, 0, 0)')
    })

    test('test 3', async() => {
        await expect(p.listText1).toBeVisible()
        await expect(p.listText2).toBeVisible()
        await expect(p.listText2).toContainText('link')
        await expect(p.listText3).toBeVisible()
        await expect(p.lisText2Link).toBeVisible()
    })

    test('test 4', async() => {
        await expect(p.submitFormButton).toBeVisible()
    })
})

test.describe('3. getByLabel() Locators tests', () => {
    test('test 1', async() => {
        await p.emailAdress.fill('example@gmail.com')
        await p.password.fill('password')
        await p.yourAge.fill('24')
        await p.shippingMethodStandard.setChecked(true)
        await expect(p.shippingMethodExpress).not.toBeChecked()
        await p.shippingMethodExpress.setChecked(true)
        await expect(p.shippingMethodExpress).toBeChecked()
    })
})

test.describe('4. getByPlaceholder() Locators tests', () => {
    test('test 1', async() => {
        await p.namePlaceholder.fill('username')
        await p.phoneNumberPlaceHolder.fill('1234567890')
        await p.messagePlaceHolder.fill('user message')
        await p.searchProdcutsPlaceHolder.fill('product')
        await p.searchButtonPlaceHolder.click()
    })
})

test.describe('5. getByAltText() Locators tests', () => {
    test('test 1', async() => {
        await expect(p.playwrightLogo).toBeVisible()
    })
})

test.describe('6. getByTitle() Locators tests', () => {
    test('test 1', async() => {
        await expect(p.homeTitle).toBeVisible()
        await expect(p.htmlTitle).toBeVisible()
        await expect(p.toolTipTitle).toBeVisible()
        await expect(p.saveButtonTitle).toBeVisible()
    })
})

test.describe('7. getByTestId() locators tests', () => {
    test('test 1', async() => {
        await expect(p.userNameTid).toHaveText('John Doe')
        await expect(p.userEmailTid).toHaveText('john.doe@example.com')
        await expect(p.editProfileTid).toHaveText('Edit Profile')
        await expect(p.productAPrice).toHaveText('$19.99')
        await expect(p.productBPrice).toHaveText('$29.99')
        await expect(p.productCPrice).toHaveText('$39.99')
    })
})