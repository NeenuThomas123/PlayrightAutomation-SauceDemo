//Add modules 
const {test , expect} = require('@playwright/test');

//writing the test case 

test('Opening the URL ', async({page})=>{
    await page.goto('https://www.google.com/');

    //checking the title of the page
    await expect(page).toHaveTitle('Google');
})