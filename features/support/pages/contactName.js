'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/agent-name';
    }
}

module.exports = new itemType();
