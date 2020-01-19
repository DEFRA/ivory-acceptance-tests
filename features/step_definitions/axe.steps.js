'use strict';
const {Given, Then, When} = require('cucumber');
const axeSource = require('axe-core').source;
const assert = require('assert');
var jsonToCSV = require('json-to-csv');
const axe = require('../support/pages/axe.js');

Given(/^I validate accessibility standards using AXE for (.*) with (.*)$/, function (url,report) {
    browser.url(url);

    // inject the script
    browser.execute(axeSource);
    // run inside browser and get results
    let results = browser.executeAsync(function(done){
        axe.run(function (err, results) {
            if(err) done(err)
            done(results);
        });
    });

    console.log(results.value);
    assert(results.value.violations.length===0,'passed the accessibility test');

    function assert(condition, message) {
        if(!condition){
            console.log("Failed accessibility, see the csv file");
            axe.generateAxeReport(results.value.violations, report);
        }
        else {
            console.log(message);
        }

    }
});

