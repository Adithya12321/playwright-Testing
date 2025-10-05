import { test, expect } from '@playwright/test'

test('base url testing', async({page}) => {
    await page.goto('')
    await expect(page).toHaveTitle('The Internet')
})