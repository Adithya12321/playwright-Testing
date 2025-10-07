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
})