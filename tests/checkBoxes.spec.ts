import { test, expect} from '@playwright/test'



test('to verify checkboxes are visible', async({page}) => {
    await page.goto('')
    await page.getByRole('link', {name : 'Checkboxes'}).click()
    const checkBoxes = page.getByRole('checkbox')
    const count = await checkBoxes.count()
    for (let i = 0; i < count; i++){
        await expect(page.getByRole('checkbox').nth(i)).toBeVisible()
    }
})

test('to verify default state of checkboxes', async({page}) => {
    await page.goto('')
    await page.getByRole('link', {name : 'Checkboxes'}).click()
    await expect(page.getByRole('checkbox').first()).not.toBeChecked()
    await expect(page.getByRole('checkbox').last()).toBeChecked()
})

test('to verify checkbox to be checked', async({page}) => {
    await page.goto('')
    await page.getByRole('link', {name : 'Checkboxes'}).click()
    await page.getByRole('checkbox').first().setChecked(true)
    await expect(page.getByRole('checkbox').first()).toBeChecked()
})

test('to verify checkbox to be unChecked', async({page}) => {
    await page.goto('')
    await page.getByText('Checkboxes').click()
    await page.getByRole('checkbox').last().setChecked(false)
    await expect(page.getByRole('checkbox').last()).not.toBeChecked()
})