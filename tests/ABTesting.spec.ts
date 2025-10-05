import { test, expect } from '@playwright/test'

test('A/B Testing navigation test', async({page}) => {
    await page.goto('')
    await page.getByRole('link', {name : 'A/B Testing'}).click()
    await expect(page.getByRole('heading', {name : 'A/B Test'})).toBeVisible()
})
