import { expect, test } from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('')
    await page.getByText('Digest Authentication').click()
})

test('to verify digest auth', async({page}) =>{
    
})