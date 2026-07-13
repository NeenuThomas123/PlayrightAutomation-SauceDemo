const { test, expect, chromium } = require('@playwright/test');

test('Slow motion video recording demo', async () => {
  const browser = await chromium.launch({
    slowMo: 1000,
    headless: false,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

  try {
    await page.goto('https://demo.applitools.com/');
    await page.locator('input[placeholder="Enter your username"]').fill('neenu');
    await page.locator('input[placeholder="Enter your password"]').fill('neenu@123');
    await page.locator('text=Sign in').click();
    await expect(page.locator('text=ACME')).toBeVisible();
  } finally {
    await context.close();
    await browser.close();
  }
});
