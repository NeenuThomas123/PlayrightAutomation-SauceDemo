import { test, expect } from "@playwright/test";

test("Demo login test1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  //   await page.pause();
  await page.locator('input[placeholder="Enter your username"]').fill("neenu");
  await page
    .locator('input[placeholder="Enter your password"]')
    .fill("neenu@123");
  await page.locator("text=Sign in").click();
  await page.locator("text=ACME").isVisible();
});

test("Demo login test2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
    // await page.pause();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole('listitem').filter({ hasText: 'uQeIqLnJEh user' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test("Demo login test3", async ({ page }) => {
  // await page.pause();
  await page.goto("https://admin-demo.nopcommerce.com/login");
  await page.getByRole("textbox", { name: "Email:" }).click();
  await page.getByRole("textbox", { name: "Email:" }).dblclick();
  await page.getByRole("textbox", { name: "Email:" }).click();
  await page.getByRole("textbox", { name: "Email:" }).click();
  await page.getByRole("textbox", { name: "Email:" }).press("ControlOrMeta+a");
  await page.getByRole("textbox", { name: "Email:" }).press("ControlOrMeta+c");
  await page
    .getByRole("textbox", { name: "Email:" })
    .fill("admin@yourstore.com");
  await page.getByRole("textbox", { name: "Password:" }).click();
  await page
    .getByRole("textbox", { name: "Password:" })
    .press("ControlOrMeta+a");
  await page
    .getByRole("textbox", { name: "Password:" })
    .press("ControlOrMeta+c");
  await page
    .getByRole("textbox", { name: "Password:" })
    .fill("admin@yourstore.com");
  await page.getByRole("button", { name: "Log in" }).click();
});
