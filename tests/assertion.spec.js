import {test ,expect} from '@playwright/test'

test('Assertion test',async({page})=>{
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    //Assertion
    //check element present or not 
    await expect(page.locator('text=The kitchen')).toHaveCount(1)
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }
    //check element visible or hidden and soft assertion help to continue test execution even if  test is failed
    await expect(page.locator('text=The kitchen')).toBeVisible();
    await expect.soft(page.locator('text=The kitchen')).toBeHidden();
    //check element enabled or disabled
    await expect(page.locator('text=The kitchen')).toBeEnabled();
    await expect.soft(page.locator('text=The kitchen')).toBeDisabled();
    //check text content of element
    await expect(page.locator('text=The kitchen')).toHaveText('The kitchen');
    await expect.soft(page.locator('text=The kitchen')).toHaveText('The Kitchen');
    //check element have attribute value or not
    await expect(page.locator('text=The kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a');
    await expect.soft(page.locator('text=The kitchen')).toHaveAttribute('class','title1');
    //check page url
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The kitchen');
    //take screenshot of the page
    await expect(page).toHaveScreenshot() 


})