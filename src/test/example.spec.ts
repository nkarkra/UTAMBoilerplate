/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/MIT
 */

// Import a PageObject from within the package
import LwcDevHomePage from 'utam-oss-boilerplate/pageObjects/lwc-home';

describe('UTAM WDIO example', () => {
    it('has correct header - lwc.dev', async () => {
        const expectedHeader = 'Lightning Web Components';

        // Load the website
        await browser.url('https://lwc.dev');

        // Load the root Utam Page Object
        const lwcDevHomePage = await utam.load(LwcDevHomePage);
        
        // Check for all the methods (it should autocomplete for you)
        const header = await lwcDevHomePage.getHeader();
        const headerText = await header.getText();

        // Asser that the header title text is what we expect
        expect(headerText).toBe(expectedHeader);
    });
});