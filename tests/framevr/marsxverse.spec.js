// @ts-check
const { test, expect } = require('@playwright/test');
const A = require('../../src/aframe-pw-utils.js');

// Example test.
// Timeouts between steps in the tests are primarily for the benefit of people 
// watching the test in headed mode.
// Timeouts are deliberately positioned *before* inputs so that they don't interfere with timing of test simtmuli/responses.
// Set slowMotion to false to skip timeouts.
const slowMotion = true;

test('Test A-Frame Responsive UI Example - in VR', async({ page }) => {


    await page.goto('https://framevr.io/marsx');

    // A.setCursorEntity('a-scene');

    if (slowMotion) await page.waitForTimeout(21000);

    // Enter VR
    // A.setPage(page);
    // await page.locator('#renderCanvas').type("ronco");

    await page.locator('div.wrapper-menu').click();
    await page.waitForTimeout(1000);
    // await A.enterVR()
    // Just checking scene is loaded. 
    // TODO - write test to check that scene is loaded.
    // await page.keyboard.press('w');


});