'use strict';
require('winston');
const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;
const path = require('path');
const axe = require('../../axe_config');

    When(/^I validate accessibility standard A and AA using AXE for (.*)$/, function (url) {

        browser.url(url);
        browser.pause(5000);
        // browser.saveScreenshot('./remo.png');
        return axe.testAccessibility(browser);

    });


