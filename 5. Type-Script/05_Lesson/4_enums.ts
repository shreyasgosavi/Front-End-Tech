//ENUMS
// Purpose of Enums is to give limited options where user can select only specified options

enum SEATS{
    AISLE,
    MIDDLE,
    WINDOW 
}

const planeSeat = SEATS.MIDDLE;
console.log(planeSeat)

//Javascript really generates a long code for enum part. In order to make it simple in javascript part just make the enum constant.
//What it will do is just assign "number" or "string" value to the variable and will add some comment for identifying in typeScript part.
//What matters is adding restriction in typescript part where we make changes.

//Lets make an enum constant and then look at the generated js code
const enum SEATS2{
    AISLE,
    MIDDLE,
    WINDOW 
}

const planeSeat2 = SEATS2.MIDDLE;
console.log(planeSeat)

/* 
    var planeSeat2 = 1 / SEATS2.MIDDLE /;
    console.log(planeSeat);
 */
export{}