'use strict';
// eslint-disable-next-line no-unused-vars
require('winston');
const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;
const path = require('path');
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
const agentEmail = require('../support/pages/agentEmail');
const registerToMuseum = require('../support/pages/registerToMuseum');
const removePhotograph = require('../support/pages/removePhotograph');

    Given('I go to item type page', function () {
        itemTypePage.open();
        (process.env.WAIT_TIME);
    });

    Then('I should see error message in item type page', function () {
        itemTypePage.checkOpen();

    });

    Then('I select a item type', function () {
        itemTypePage.clickSomething('#itemType');

    });

    Then('I select a item type 2', function () {
        itemTypePage.clickSomething('#itemType-2');

    });

    Then('I select a item type 3', function () {
        itemTypePage.clickSomething('#itemType-3');

    });

    Then('I select a item type 4', function () {
        itemTypePage.clickSomething('#itemType-4');

    });

    Then('I should be presented with register to museum page', function () {
    registerToMuseum.checkOpen()

    });

    Then('click Continue button', function () {
        itemTypePage.clickSomething('.govuk-button')
    });

    Then('I should be presented with add photograph page', function () {
        addPhotograph.checkOpen();

    });

    Then('I should see error message in add photograph page', function () {
        addPhotograph.checkOpen();

    });

    When('I choose file in add photograph page', function () {
        const fileUpload = $('#photograph');
        const filePath = path.join('Ivory1.jpeg');
        fileUpload.chooseFile(filePath);
    });

    When('I choose another file in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('e3f27b13-2931-4d17-86a1-89c43456f7e6.jpg');
    fileUpload.chooseFile(filePath);
    });

    When('I choose multiple file in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('e3f27b13-2931-4d17-86a1-89c43456f7e6.jpg, image 3.jpg, image 6.jpg, image 9.jpg, Ivory1.jpeg,');
    fileUpload.chooseFile(filePath);

    });

    When('I choose another file2 in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('image 3.jpg');
    fileUpload.chooseFile(filePath);
    });

    When('I choose another file3 in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('image 6.jpg');
    fileUpload.chooseFile(filePath);

    });

    When('I choose another file4 in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('image 9.jpg');
    fileUpload.chooseFile(filePath);

    });

    When('I choose another file5 in add photograph page', function () {
    const fileUpload = $('#photograph');
    const filePath = path.join('Ivory1.jpeg');
    fileUpload.chooseFile(filePath);

    });

    Then('I should be presented with this is your photo page', function () {
        thisIsYourPhoto.checkOpen();

    });

     When('I click remove photo link', function () {
    thisIsYourPhoto.clickSomething('#remove-photo-1')

     });

     When('I click remove this photo button', function () {
      removePhotograph.clickSomething('.govuk-button')

      });

    Then('I should be presented with removePhotograph page', function () {
    removePhotograph.checkOpen();

    });


    Then('click Add another Photo link', function () {
        thisIsYourPhoto.clickSomething('#add-another-photo-link')
    });

    Then('I should be presented with description page', function () {
        itemDescPage.checkOpen();

    });

    Then('I should see error message in description page', function () {
        itemDescPage.checkOpen();

    });

    When('I enter a description', function () {
        itemDescPage.enterFormText('#item-description','Automation Functional Test')

    });

    When('I change the description', function () {
    itemDescPage.enterFormText('#item-description','Automation Functional Test for change links')

    });

    Then('I should be presented with age exemption page', function () {
        ageExemption.checkOpen();

    });

    When('I enter a description in age exemption page', function () {
        ageExemption.enterFormText('#description','Age Exemption Automation Functional Test')

    });

    Then('I should see error message in age exemption page', function () {
        ageExemption.checkOpen();

    });

    When('I select the age declaration', function () {
        const checkboxesLabels = browser.elements('#declaration');
        checkboxesLabels.value.forEach((label) => label.click());

    });

    Then('I should be presented with volume exemption page', function () {
        volumeExemption.checkOpen();

    });

    Then('I should see error message in volume exemption page', function () {
        volumeExemption.checkOpen();

    });

    When('I select the volume declaration', function () {
        const checkboxesLabels = browser.elements('#declaration');
        checkboxesLabels.value.forEach((label) => label.click());

    });

    When('I enter a description in volume exemption page', function () {
        volumeExemption.enterFormText('#description','Volume Exemption Automation Functional Test');

    });

    Then('I should be presented with who owns the item page', function () {
        whoOwnsItem.checkOpen();

    });

    Then('I should see error message in who owns the item page', function () {
        whoOwnsItem.checkOpen();

    });

    Then('I select owner', function () {
        whoOwnsItem.clickSomething('#ownerType');

    });

    Then('I select agent', function () {
        whoOwnsItem.clickSomething('#ownerType-2');

    });

    Then('I should be presented with owner email address page', function () {
        ownerEmail.checkOpen()
    });

    Then('I should be presented with your email address page', function () {
        agentEmail.checkOpen()
    });

    Then('I should see error message in your email address page', function () {
        agentEmail.checkOpen();

    });

    Then('I enter a valid agent email Id', function () {
        agentEmail.enterFormText('#email', 'james.bond@agent007.com');

    });

    Then('I should see error message in owner email address page', function () {
        ownerEmail.checkOpen();

    });

    Then('I enter a valid email Id', function () {
        ownerEmail.enterFormText('#email', 'joe.blog@test.com');

    });

    Then('I should be presented with owner name page', function () {
        ownerName.checkOpen()
    });

    Then('I should be presented with contact name page', function () {
        contactName.checkOpen()
    });

    Then('I should see error message in owner name page', function () {
        ownerName.checkOpen();

    });

    Then('I should see error message in contact name page', function () {
        contactName.checkOpen();

    });

    Then('I enter a valid name', function () {
        ownerName.enterFormText('#full-name','Bruce lee');
        contactName.enterFormText('#full-name', 'Agent James Bond 007');

    });

    Then('I should be presented with owner address page', function () {
        ownerAddress.checkOpen()
    });

    Then('I should see error message in owner address page', function () {
        ownerAddress.checkOpen();

    });

    Then('I enter valid full details', function () {
        ownerAddress.enterFormText('#address-line-1','Ivory Functional Test');
        ownerAddress.enterFormText('#address-line-2','Automation address');
        ownerAddress.enterFormText('#address-town','Bristol');
        ownerAddress.enterFormText('#address-county','Essex');
        ownerAddress.enterFormText('#address-postcode','B3 3EE');

    });

    Then('I should be presented with your address page', function () {
       agentAddress.checkOpen()
    });

    Then('I should see error message in your address page', function () {
        agentAddress.checkOpen();

    });

    Then('I enter valid full address', function () {
        agentAddress.enterFormText('#business-name','Agent Journey Automation');
        agentAddress.enterFormText('#address-line-1','Agent Building');
        agentAddress.enterFormText('#address-line-2','Automation address');
        agentAddress.enterFormText('#address-town','London');
        agentAddress.enterFormText('#address-county','Sussex');
        agentAddress.enterFormText('#address-postcode','SW3 3EE');

    });

    Then('I should be presented with dealing intent page', function () {
        dealingIntent.checkOpen();

    });

    Then('I should see error message in dealing intent page', function () {
        dealingIntent.checkOpen();

    });

    Then('I select an intent', function () {
        dealingIntent.clickSomething('#dealingIntent')
    });

    Then('I should be presented with summary page', function () {
        checkYourAnswer.checkOpen();
    });

    When('I click on Item type Change button', function () {
        checkYourAnswer.clickSomething('#change-item-type');

    });

    When('I click on Item description Change button', function () {
         checkYourAnswer.clickSomething('#change-item-description');

      });

     When('I click change photograph link', function () {
       checkYourAnswer.clickSomething('#change-manage-photographs');

     });

     When('I click change who owns the item link', function () {
       checkYourAnswer.clickSomething('#change-who-owns-item');

      });

     When('I click change dealing intent link', function () {
       checkYourAnswer.clickSomething('#change-dealing-intent');

     });

     When('I click change your name link', function () {
       checkYourAnswer.clickSomething('#change-owner-name');

      });

     When('I click change item age declaration link', function () {
         checkYourAnswer.clickSomething('#change-item-age-exemption-declaration');

      });

     When('I click change owner address link', function () {
        checkYourAnswer.clickSomething('#change-owner-address-find');

      });

    Then('click Confirm and continue button', function () {
        itemTypePage.clickSomething('.govuk-button');

    });

    Then('I should be presented with payments page', function () {
        payment.checkOpen();

    });

    Then('I should see error message in payments page', function () {
        payment.checkOpen();

    });

    Then('I enter valid details', function () {
        payment.enterFormText('#card-no', '4242424242424242');
        payment.enterFormText('#expiry-month', '01');
        payment.enterFormText('#expiry-year', '29');
        payment.enterFormText('#cardholder-name', 'MR Automation Ivory');
        payment.enterFormText('#cvc', '299');
        payment.enterFormText('#address-line-1', '29');
        payment.enterFormText('#address-line-2', 'Downing Street');
        payment.enterFormText('#address-city', 'London');
        payment.enterFormText('#address-postcode', 'S1 2WW');


    });

    Then('I should be presented with payment confirm page', function () {
        confirmPayment.checkOpen();

    });

    Then('click Confirm payment button', function () {
        itemTypePage.clickSomething('.govuk-button');

    });
    Then('I should be presented with confirmation page', function () {
         registrationConfirmation.checkOpen();

    });


