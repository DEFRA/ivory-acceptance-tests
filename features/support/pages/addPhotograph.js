'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/add-photograph';
    }
}

module.exports = new itemType();
