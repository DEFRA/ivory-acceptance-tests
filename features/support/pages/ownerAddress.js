'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/owner-full-address';
    }
}

module.exports = new itemType();
