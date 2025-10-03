import { test , expect } from '@playwright/test'
const baseUrl = "https://the-internet.herokuapp.com/"
test('page has title',async ({page}) => {
    await page.goto(baseUrl)
    await expect(page).toHaveTitle("The Internet")
});

test('A/B Testing', async ({page}) => {
    await page.goto(baseUrl)
    await page.getByRole('link', {name: 'A/B Testing'}).click()
    await expect(page.getByRole('heading', {name : 'A/B Test'})).toBeVisible()
})

test('Add/Remove Elements', async ({page}) => {
    await page.goto(baseUrl)
    await page.getByRole('link', {name : 'Add/Remove Elements'}).click()
    await page.getByRole('button', {name : 'Add Element'}).click()
    expect(page.getByRole('button', { name : 'Delete'})).toBeVisible()
    await page.getByRole('button', {name : 'Add Element'}).click()
    await page.getByRole('button', {name : 'Delete'}).last().click()    
    expect(page.getByRole('button', { name : 'Delete'})).toBeVisible()
    await page.getByRole('button', {name : 'Delete'}).last().click()    
    expect(page.getByRole('button', { name : 'Delete'})).toBeHidden()
})