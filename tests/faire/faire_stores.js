import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://www.faire.com/retailer/settings/stores');
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.locator('[data-test-id="modalCloseButton"]').click();
  await page.getByRole('button', { name: 'Add store' }).click();
  await page.locator('[data-test-id="store-name-input"]').click();
  await page.locator('[data-test-id="store-name-input"]').fill('new store');
  await page.getByRole('button', { name: 'Store type' }).click();
  await page.locator('[data-test-id="dropdownItem_Gift Store"]').click();
  await page.locator('[data-test-id="opening-year-dropdown"]').click();
  await page.locator('[data-test-id="dropdownItem_STARTED_THIS_YEAR"]').click();
  await page.getByPlaceholder('Select all that apply').click();
  await page.locator('[id="checkbox-label-\\:r14\\:"]').check();
  await page.locator('[data-test-id="stores-basic-details-modal"]').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('div').filter({ hasText: /^new storeGift StoreSales channelsOnlineReseller IDAdd IDEditEdit$/ }).nth(1).click();
  await expect(page.locator('div').filter({ hasText: /^new storeGift StoreSales channelsOnlineReseller IDAdd IDEditEdit$/ }).nth(1)).toBeVisible();
});