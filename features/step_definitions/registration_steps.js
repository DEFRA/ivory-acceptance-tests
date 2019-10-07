'use strict';
// eslint-disable-next-line no-unused-vars
require('winston');
const {Given, Then, When, And} = require('cucumber');
const expect = require('chai').expect;
const itemTypePage = require('../support/pages/itemType.js');
const itemDescPage = require('../support/pages/itemDescription.js');
const ownerEmail = require('../support/pages/ownerEmail.js');
const ownerName = require('../support/pages/ownerName.js');
const ownerAddress = require('../support/pages/ownerAddress');
const dealingIntent = require('../support/pages/dealingIntent');
const checkYourAnswer = require('../support/pages/checkYourAnswer');
const registrationConfirmation = require('../support/pages/registrationConfirmation');
const payment = require('../support/pages/paymentPage');
const confirmPayment = require('../support/pages/confirmPayment');
const ageExemption = require('../support/pages/ageExemption');
const volumeExemption = require('../support/pages/volumeExemption');
const addPhotograph = require('../support/pages/addPhotograph');
const thisIsYourPhoto = require('../support/pages/thisIsYourPhoto');
const whoOwnsItem = require('../support/pages/whoOwnsItem');
const contactName = require('../support/pages/contactName');
const agentAddress = require('../support/pages/agentAddress');
const agentEmail = require('../support/pages/agentEmail')

module.exports = function () {
    this.Given('I go to item type page', function () {
        itemTypePage.open()
        browser.pause(process.env.WAIT_TIME);
    });

    this.Then('I should see error message in item type page', function () {
        itemTypePage.checkOpen()
        browser.pause(1000)
    });

    this.Then('I select a item type', function () {
        itemTypePage.clickSomething('#itemType-1')
        browser.pause(1000)
    });

    this.Then('I select a item type 2', function () {
        itemTypePage.clickSomething('#itemType-2')
        browser.pause(1000)
    });

    this.Then('click Continue button', function () {
        itemTypePage.clickSomething('.govuk-button')
    });

    this.Then('I should be presented with add photograph page', function () {
        addPhotograph.checkOpen()
        browser.pause(1000)
    });

    this.Then('I should see error message in add photograph page', function () {
        addPhotograph.checkOpen()
        browser.pause(1000)
    });

    this.When('I choose file in add photograph page', function () {
        browser.chooseFile('#photograph', '/Users/harish/Desktop/application/ivory-acceptance-tests/features/testFile/Ivory1.jpeg')
        browser.pause(1000)
    });

    this.Then('I should be presented with this is your photo page', function () {
        thisIsYourPhoto.checkOpen()
        browser.pause(1000)
    });

    this.Then('click Use this photo', function () {
        thisIsYourPhoto.clickSomething('.govuk-button')
    });

    this.Then('I should be presented with description page', function () {
        itemDescPage.checkOpen()
        browser.pause(1000)
    });

    this.Then('I should see error message in description page', function () {
        itemDescPage.checkOpen()
        browser.pause(1000)
    });

    this.When('I enter a description', function () {
        itemDescPage.enterFormText('#item-description','Automation Functional Test')
        browser.pause(1000)
    });

    this.Then('I should be presented with age exemption page', function () {
        ageExemption.checkOpen()
        browser.pause(1000)
    });

    this.When('I enter a description in age exemption page', function () {
        ageExemption.enterFormText('#description','Age Exemption Automation Functional Test')
        browser.pause(1000)
    });

    this.Then('I should see error message in age exemption page', function () {
        ageExemption.checkOpen()
        browser.pause(1000)
    });

    this.When('I select the age declaration', function () {
        const checkboxesLabels = browser.elements('#declaration-1');
        checkboxesLabels.value.forEach((label) => label.click());
        browser.pause(1000)
    });

    this.Then('I should be presented with volume exemption page', function () {
        volumeExemption.checkOpen()
        browser.pause(1000)
    });

    this.Then('I should see error message in volume exemption page', function () {
        volumeExemption.checkOpen()
        browser.pause(1000)
    });

    this.When('I select the volume declaration', function () {
        const checkboxesLabels = browser.elements('#declaration-1');
        checkboxesLabels.value.forEach((label) => label.click());
        browser.pause(1000)
    });

    this.When('I enter a description in volume exemption page', function () {
        volumeExemption.enterFormText('#description','Volume Exemption Automation Functional Test')
        browser.pause(1000)
    });

    this.Then('I should be presented with who owns the item page', function () {
        whoOwnsItem.checkOpen()
        browser.pause(1000)
    });

    this.Then('I should see error message in who owns the item page', function () {
        whoOwnsItem.checkOpen()
        browser.pause(1000)
    });

    this.Then('I select owner', function () {
        whoOwnsItem.clickSomething('#ownerType-1')
        browser.pause(1000)
    });

    this.Then('I select agent', function () {
        whoOwnsItem.clickSomething('#ownerType-2')
        browser.pause(1000)
    });

    this.Then('I should be presented with owner email address page', function () {
        ownerEmail.checkOpen()
    });

    this.Then('I should be presented with your email address page', function () {
        agentEmail.checkOpen()
    });

    this.Then('I should see error message in owner email address page', function () {
        ownerEmail.checkOpen()
        browser.pause(1000)
    });

    this.Then('I enter a valid email Id', function () {
        ownerEmail.enterFormText('#email', 'joe.blog@test.com')
        browser.pause(1000)
    });

    this.Then('I should be presented with owner name page', function () {
        ownerName.checkOpen()
    });

    this.Then('I should be presented with contact name page', function () {
        contactName.checkOpen()
    });

    this.Then('I should see error message in owner name page', function () {
        ownerName.checkOpen()
        browser.pause(1000)
    });

    this.Then('I enter a valid name', function () {
        ownerName.enterFormText('#full-name','Bruce lee')
        browser.pause(1000)
    });

    this.Then('I should be presented with owner address page', function () {
        ownerAddress.checkOpen()
    });

    this.Then('I should see error message in owner address page', function () {
        ownerAddress.checkOpen()
        browser.pause(1000)
    });

    this.Then('I enter valid full details', function () {
        ownerAddress.enterFormText('#address-line-1','Ivory Functional Test')
        ownerAddress.enterFormText('#address-line-2','Automation address')
        ownerAddress.enterFormText('#address-town','London')
        ownerAddress.enterFormText('#address-county','Essex')
        ownerAddress.enterFormText('#address-postcode','L3 3EE')
        browser.pause(1500)
    });

    this.Then('I should be presented with your address page', function () {
       agentAddress.checkOpen()
    });

    this.Then('I enter valid full address', function () {
        agentAddress.enterFormText('#business-name','Agent Journey Automation')
        agentAddress.enterFormText('#address-line-1','Agent Building')
        agentAddress.enterFormText('#address-line-2','Automation address')
        agentAddress.enterFormText('#address-town','London')
        agentAddress.enterFormText('#address-county','Sussex')
        agentAddress.enterFormText('#address-postcode','SW3 3EE')
        browser.pause(1500)
    });

    this.Then('I should be presented with dealing intent page', function () {
        dealingIntent.checkOpen()
        browser.pause(1500)
    });

    this.Then('I should see error message in dealing intent page', function () {
        dealingIntent.checkOpen()
        browser.pause(1000)
    });

    this.Then('I select an intent', function () {
        dealingIntent.clickSomething('#dealingIntent-1')
    });

    this.Then('I should be presented with summary page', function () {
        checkYourAnswer.checkOpen()
        browser.pause(1000)
    });

    this.Then('click Confirm and continue button', function () {
        itemTypePage.clickSomething('.govuk-button')
        browser.pause(1000)
    });

    this.Then('I should be presented with payments page', function () {
        payment.checkOpen()
        browser.pause(1000)
    });

    this.Then('I should see error message in payments page', function () {
        payment.checkOpen()
        browser.pause(1000)
    });

    this.Then('I enter valid details', function () {
        payment.enterFormText('#card-no', '4242424242424242')
        payment.enterFormText('#expiry-month', '01')
        payment.enterFormText('#expiry-year', '29')
        payment.enterFormText('#cardholder-name', 'MR Automation Ivory')
        payment.enterFormText('#cvc', '299')
        payment.enterFormText('#address-line-1', '29')
        payment.enterFormText('#address-line-2', 'Downing Street')
        payment.enterFormText('#address-city', 'London')
        payment.enterFormText('#address-postcode', 'S1 2WW')

        browser.pause(1000)
    });

    this.Then('I should be presented with payment confirm page', function () {
        confirmPayment.checkOpen()
        browser.pause(1000)
    });

    this.Then('click Confirm payment button', function () {
        itemTypePage.clickSomething('.govuk-button')
        browser.pause(1000)
    });
    this.Then('I should be presented with confirmation page', function () {
         registrationConfirmation.checkOpen()
        browser.pause(1000)
    });
};

