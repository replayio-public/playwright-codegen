import { test, expect } from "@playwright/test";

const ITERATIONS = 3;

test("View Top paths", async ({ page }) => {
  for (let i = 0; i < ITERATIONS; i++) {
    await page.goto("https://vercel.com/jlasters-projects");
    await page.getByRole("link", { name: "Usage" }).click();
    await page.getByRole("link", { name: "Top Paths", exact: true }).click();
    await page
      .getByRole("link", { name: "Fast Data Transfer", exact: true })
      .click();
    await page
      .getByRole("link", { name: "Fast Origin Transfer", exact: true })
      .click();
    await page
      .getByRole("link", { name: "Edge Requests", exact: true })
      .click();
    await page
      .getByRole("link", { name: "Edge Request CPU Duration", exact: true })
      .click();
    await page.getByTestId("usage/project-select-combobox/input").click();
    await page.getByText("react-compiler-demo-timer").click();
    await page.getByTestId("usage/project-select-combobox/input").click();
    await page.getByText("tests-runner").click();
    await page
      .locator("li")
      .filter({ hasText: /^Edge Request CPU Duration$/ })
      .locator("div")
      .click();
    await page
      .locator("li")
      .filter({ hasText: /^Fast Data Transfer$/ })
      .locator("div")
      .click();
    await page.getByRole("link", { name: "Top Paths", exact: true }).click();
  }
});
