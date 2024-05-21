import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://vercel.com/");
  await page.getByRole("link", { name: "Domains" }).click();
  await page.getByRole("link", { name: "Activity" }).click();
  await page.getByRole("link", { name: "Integrations" }).click();
  await page.getByRole("link", { name: "Overview" }).click();
});

test.skip("Navigate to all of the pages", async ({ page }) => {
  await page.goto("https://vercel.com/jlasters-projects");
  await page.getByTestId("scope-switcher/toggle").click();

  await page
    .getByTestId("project-switcher/dropdown")
    .getByText("router-start-basic")
    .click();
  await page
    .locator("li")
    .filter({ hasText: "jlaster's projectsPro" })
    .getByTestId("scope-switcher/toggle")
    .click();
  await page
    .getByRole("option", { name: "Vite react-compiler-demo-" })
    .locator("div")
    .first()
    .click();
  await page.getByRole("link", { name: "Deployments" }).click();
  await page.getByRole("link", { name: "Analytics" }).click();
  await page.getByRole("link", { name: "Speed Insights" }).click();
  await page.getByRole("link", { name: "Logs" }).click();
  await page.getByRole("link", { name: "Storage" }).click();
  await page.getByRole("link", { name: "Settings" }).click();
  await page.getByTestId("settings/sidebar/general").click();
  await page.getByTestId("settings/sidebar/domains").click();
  await page.getByTestId("settings/sidebar/environment-variables").click();
  await page.getByTestId("settings/sidebar/git").click();
  await page.getByTestId("settings/sidebar/integrations").click();
  await page.getByTestId("settings/sidebar/deployment-protection").click();
  await page.getByTestId("settings/sidebar/functions").click();
  await page.getByTestId("settings/sidebar/data-cache").click();
  await page.getByTestId("settings/sidebar/cron-jobs").click();
  await page.getByTestId("settings/sidebar/webhooks").click();
  await page.getByTestId("settings/sidebar/log-drains").click();
  await page.getByTestId("settings/sidebar/functions").click();
  await page.getByTestId("settings/sidebar/security").click();
  await page.getByTestId("settings/sidebar/advanced").click();
});

test("View all of the settings", async ({ page }) => {
  await page.goto("https://vercel.com/jlasters-projects");

  await page.getByTestId("scope-switcher/toggle").click();
  await page
    .getByRole("option", { name: "Vite react-compiler-demo-" })
    .locator("div")
    .first()
    .click();

  await page.getByRole("link", { name: "Settings" }).click();
  await page.getByTestId("settings/sidebar/general").click();
  await page.getByTestId("settings/sidebar/domains").click();
  await page.getByTestId("settings/sidebar/environment-variables").click();
  await page.getByTestId("settings/sidebar/git").click();
  await page.getByTestId("settings/sidebar/integrations").click();
  await page.getByTestId("settings/sidebar/deployment-protection").click();
  await page.getByTestId("settings/sidebar/functions").click();
  await page.getByTestId("settings/sidebar/data-cache").click();
  await page.getByTestId("settings/sidebar/cron-jobs").click();
  await page.getByTestId("settings/sidebar/webhooks").click();
  await page.getByTestId("settings/sidebar/log-drains").click();
  await page.getByTestId("settings/sidebar/functions").click();
  await page.getByTestId("settings/sidebar/security").click();
  await page.getByTestId("settings/sidebar/advanced").click();
});

test.only("View first deployment", async ({ page }) => {
  await page.goto("https://vercel.com/jlasters-projects");

  await page.getByTestId("scope-switcher/toggle").click();
  await page
    .getByRole("option", { name: "nextjs-docs" })
    .locator("div")
    .first()
    .click();

  await page.getByRole("link", { name: "Deployments" }).click();
  await page.getByRole("link", { name: "l195d2zd7" }).click();
  await page.waitForTimeout(5_000);
});
