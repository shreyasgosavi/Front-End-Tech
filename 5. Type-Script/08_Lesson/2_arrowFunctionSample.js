"use strict";
//Arrow Function 
exports.__esModule = true;
/*
Syntax :
    (parameters) :returnType => {
        body
    }
 */
//Arrow function with no parameters
var val = function () {
    return 3;
};
var seb = 2;
var val2 = function (a, b) {
    return a + b;
};
console.log(val2("d", "w"));
console.log(val2(3, 5));
var func = function (a) {
    if (typeof a === "string")
        return "s";
    return a + 2;
};
console.log(func(3));
console.log(func("3"));
