import { test, expect } from '@playwright/test';

test('search box', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByLabel('Select a category for search').selectOption('888');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('pickle ball');
  await page.getByPlaceholder('Search for anything').press('Enter');
});


test('search filters', async ({ page }) => {
  await page.goto('https://www.ebay.com/e/fashion/travis-scott-x-jordan-1-retro-low-canary-wmns');
  await page.locator('div').filter({ hasText: /^8$/ }).click();
  // await page.getByLabel('7', { exact: true }).check();
  await page.getByLabel('Air Jordan 1', { exact: true }).check();
  await page.getByLabel('View: Gallery View').click();
  await page.getByLabel('View: Gallery View').click();
  await page.getByLabel('Sort: Best Match').click();
  await page.getByRole('link', { name: 'Lowest Price' }).click();
});