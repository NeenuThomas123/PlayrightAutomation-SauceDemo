import {test} from '@playwright/test';

test('Test1',async({page})=>{
  console.log('..I am Test1')
  await page.goto('https://playwright.dev/');
})
test('Test2',async({page})=>{
  console.log('..I am Test2')
  await page.goto('https://www.saucelabs.com/');
})