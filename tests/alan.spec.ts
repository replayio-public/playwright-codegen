import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://vercel.com/jlasters-projects");
  await page.getByRole("link", { name: "Integrations" }).click();
  await page.getByRole("link", { name: "Browse Marketplace" }).first().click();
  await page
    .locator("li")
    .filter({ hasText: /^AI$/ })
    .getByRole("link")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "DevTools" })
    .getByRole("link")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Logging" })
    .getByRole("link")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Messaging" })
    .getByRole("link")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Monitoring" })
    .getByRole("link")
    .click();
  await page.getByPlaceholder("Search…").click();
  await page.getByPlaceholder("Search…").fill("dev");
  await page.getByPlaceholder("Search…").press("ControlOrMeta+a");
  await page.getByPlaceholder("Search…").fill("chec");
  await page.getByRole("link", { name: "Checkly Test & monitor your" }).click();
});
