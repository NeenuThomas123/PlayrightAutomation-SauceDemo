import {test, expect} from '@playwright/test';
test('test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    //using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('secret_sauce');
    //using CSS selector
    await page.locator('#login-button').click();
    await page.pause();
    //using xpath selector
    await page.locator('//input[@id="error-user"]').fill('secret_sauce');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
})