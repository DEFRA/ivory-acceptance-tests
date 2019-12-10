'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/apply-to-register-to-sell-an-item-to-a-museum';
    }
}

module.exports = new itemType();
