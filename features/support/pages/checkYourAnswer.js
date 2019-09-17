'use strict';
const winston = require('winston');
const Page = require('./page');
class itemType extends Page {
    get url () {
        return '/check-your-answers';
    }
}

module.exports = new itemType();
