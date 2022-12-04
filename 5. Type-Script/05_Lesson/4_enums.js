"use strict";
//ENUMS
// Purpose of Enums is to give limited options where user can select only specified options
exports.__esModule = true;
var SEATS;
(function (SEATS) {
    SEATS[SEATS["AISLE"] = 0] = "AISLE";
    SEATS[SEATS["MIDDLE"] = 1] = "MIDDLE";
    SEATS[SEATS["WINDOW"] = 2] = "WINDOW";
})(SEATS || (SEATS = {}));
var planeSeat = SEATS.MIDDLE;
console.log(planeSeat);

var planeSeat2 = 1 /* SEATS2.MIDDLE */;
console.log(planeSeat);
