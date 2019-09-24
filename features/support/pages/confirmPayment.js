'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return 'https://www.payments.service.gov.uk/card_details/';
    }
}

module.exports = new itemType();
