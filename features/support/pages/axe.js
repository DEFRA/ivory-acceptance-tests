'use strict';
const assert = require('assert');
var jsonToCSV = require('json-to-csv');

class axe{

    generateAxeReport(violationsObj,report) {

        var element = {}, violations = [];

        for(var i=0;i<violationsObj.length;i++){

            element.description = violationsObj[i].description;
            element.help = violationsObj[i].help;
            element.helpUrl = violationsObj[i].helpUrl;
            element.id = violationsObj[i].id;
            element.impact = violationsObj[i].impact;
            element.nodes = violationsObj[i].nodes;
            element.tags = violationsObj[i].tags;

            violations.push(cloneMessage(element));

        };

        function cloneMessage(element) {
            var clone ={};
            for( var key in element){
                if(element.hasOwnProperty(key)) //ensure not adding inherited props
                    clone[key]=element[key];
            }
            return clone;
        }

        jsonToCSV(violations,report)
            .then(() => {
                // success
                console.log("SUCCESS");
            })
            .catch(error => {
                // handle error
                console.log("FAILURE");
            })
    }

}

module.exports = new axe();
