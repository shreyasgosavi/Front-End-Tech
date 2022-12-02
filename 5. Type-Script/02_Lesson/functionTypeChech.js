"use strict";
exports.__esModule = true;
function addTwoToIt(num) {
    // num.toUpperCase()               //  <-- Not allowed
    return num + 3;
}
var result = addTwoToIt(2); //  <-- Type is number  \\
console.log("Number after operation " + result);
function stringOperation(val) {
    return val.toUpperCase();
}
var resultString = stringOperation("hu");
console.log("String after operation " + resultString);
