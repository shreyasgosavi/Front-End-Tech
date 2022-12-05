"use strict";
// Generics : Helps to avoid re-writing of same functions for different data-types
//Makes the component re-usable
exports.__esModule = true;
function getAgeN(age) {
    return age;
}
function getAgeS(age) {
    return age;
}
// let demoArray :Array<number> = [3,4,5,"VAL"]     //      Can't do here
var demoArray = [4, 4, 6];
var demoArrayS = ["d", 'd', 't'];
console.log(demoArray);
console.log(demoArrayS);
function returnValueOfAnyType(value) {
    console.log("Data-type of the passed parameter is " + typeof value);
    return "e";
}
returnValueOfAnyType(4);
returnValueOfAnyType("3");
returnValueOfAnyType({
    str: "HEHEHEH",
    id: 2
});
