import { expect, test } from "@playwright/test";

test.beforeEach(async({page}) => {
    await page.goto('')
    await page.getByText('Disappearing Elements').click()
})

test('to verify if any diappearing elements', async({page}) => {
    const links = page.locator('li')
    const count = await links.count()
    console.log(count)
})