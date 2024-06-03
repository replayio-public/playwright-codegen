import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://www.faire.com/');
  await page.getByRole('button', { name: 'Return to Top' }).click();
  await page.locator('#bootstrap-styles-3').click();
});