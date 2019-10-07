'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/who-owns-item';
    }
}

module.exports = new itemType();
