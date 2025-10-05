import { test, expect } from '@playwright/test'

test.use({
    httpCredentials: {
        username : 'admin',
        password : 'admin'
    }
})

test('Basic Auth valid credentials test', async({page}) => {
    await page.goto('')
    await page.goto('/basic_auth')
    await expect(page.locator('p')).toContainText('Congratulations! You must have the proper credentials.')
})

test('Basic Auth invalid credentials test', async({page}) => {
    await page.goto('')
    await page.goto('https://admin1:admin@the-internet.herokuapp.com/basic_auth')
    await expect(page.locator('h3')).toBeHidden()
})