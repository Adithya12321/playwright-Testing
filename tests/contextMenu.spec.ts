import { test, expect } from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('')
    await page.getByText('Context Menu').click()
})

test('to verify navigation to Context Menu', async({page}) => {
    await expect(page.getByRole('heading', {name : 'Context Menu'})).toBeVisible()
})

test('to verify context menu', async({page}) => {
    await page.locator('//*[@id="hot-spot"]').click({button : 'right'})
    await page.on('dialog', async(dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    })
})