import {test, expect} from '@playwright/test';
//annotations
test.skip('test with annotation', async ({page}) => {

})

test('not yet ready ',async({page})=>{
    test.fail();
})

test.fixme('test to be fixed',async({page})=>{

})

test('slow test',async({page})=>{
    test.slow();
})

//Tags
test('test login page @smoke', async ({page}) => {
   
});