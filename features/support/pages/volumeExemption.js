'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/item-volume-exemption-declaration';
    }
}

module.exports = new itemType();
