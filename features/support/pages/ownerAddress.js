'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/owner-address-full';
    }
}

module.exports = new itemType();
