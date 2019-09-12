'use strict';
// eslint-disable-next-line no-unused-vars
require('winston');
const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;
const itemTypePage = require('../support/pages/itemType.js');
const itemDescPage = require('../support/pages/itemDescription.js');
const ownerEmail = require('../support/pages/ownerEmail.js')
module.exports = function () {
    this.Given('I go to item type page', function () {
        itemTypePage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('I select a item type', function () {
        itemTypePage.clickSomething('#itemType-2')
    });
    this.Then('click Continue button', function () {
        itemTypePage.clickSomething('.govuk-button')
    });
    this.Then('I should be presented with description page', function () {
        itemDescPage.checkOpen()
    });

    this.When('I enter a description', function () {
        itemDescPage.enterFormText('#item-description','test')
    });

    this.Then('I enter a valid email Id', function () {
        ownerEmail.enterFormText('#email', 'joe.blog@gmail.com')
    });

    this.Then('I enter a valid name', function () {
        regPage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('I enter valid full details', function () {
        regPage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('I select an intent', function () {
        regPage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('click Confirm and continue button', function () {
        regPage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('I should be presented with owner email address page', function () {
        ownerEmail.checkOpen()
    });
};

