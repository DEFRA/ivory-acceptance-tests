'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/remove-photograph/';
    }
}

module.exports = new itemType();
