import { test, expect } from '@playwright/test'

test('to verify number of images', async({page}) => {
  await page.goto('');
  await page.getByRole('link', { name: 'Broken Images' }).click();
  const images = page.getByRole('img')
  const count = await images.count()
  for (let i = 0; i < count; i++) {
    const img = images.nth(i)
    const isBroken = await img.evaluate((el: HTMLImageElement) => el.naturalWidth === 0);
    if (isBroken) {
        console.log(`${i+1}th image is broken`)
    }
  }
})