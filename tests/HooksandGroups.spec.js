import { test, expect } from "@playwright/test";

test.beforeEach("login test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("problem_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test("homepage", async ({ page }) => {
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-1-img-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="inventory-item-price"]').nth(2).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="footer-copy"]').click();
});

test("logout", async ({ page }) => {
   await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});