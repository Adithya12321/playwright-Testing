import {expect,test} from '@playwright/test'


test.beforeEach(async({page}) => {
    await page.goto('')
})

test.describe('Buttons test', () => {

    test('test1', async({page}) => {
        await page.getByRole('button', {name : 'Primary Action'}).click()
        await expect(page.getByRole('button', {name : 'Primary Action'})).toBeVisible()
    })

    test('test 2', async({page}) => {
        await expect(page.getByRole('button', {name : 'Toggle Button'})).toBeVisible()
    })

    test('test 3', async({page}) => {
        await expect(page.getByRole('button', {name : 'Div with button role'})).toBeVisible()
    })
})

test.describe('Form Elements test', () => {
    test('test 1', async({page}) => {
        await page.getByRole('textbox', {name : 'Username'}).fill('test123')
        await expect(page.getByRole('textbox', {name : 'Username'})).toBeVisible()
    })

    test('test 2', async({page}) => {
        await page.locator('//*[@id="role-locators"]/div/div[2]/label[2]').isVisible()
        await page.locator('//*[@id="role-locators"]/div/div[2]/label[2]').click()
        await expect(page.locator('//*[@id="role-locators"]/div/div[2]/label[2]')).toBeChecked()
    })
})

test.describe('Navigation', () => {
    test('test 1', async({page}) => {
        await expect(page.getByRole('menuitem', {name : 'Home'})).toBeVisible()
        await expect(page.getByRole('menuitem', {name : 'Products'})).toBeVisible()
        await expect(page.getByRole('menuitem', {name : 'Contact'})).toBeVisible()
        await expect(page.getByRole('alert')).toBeVisible()
    })
})
