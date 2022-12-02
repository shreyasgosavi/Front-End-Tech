// 
// About Union
//      

let val :string | number;
val = "String val"
val = 43

//--------------------------------------//--------------------------------------
// Sample Example

type normalUser = {
    name: String,
    id: number
}

type Admin = {
    aName: String,
    id: number
}

let SHR :normalUser | Admin = {
    name: "SHR",
    id: 1
}

SHR = {
    aName : "ASHR",
    id:1
}


//--------------------------------------//--------------------------------------
// Union concept in arrays

let mixArray :(string | number)[] = ["s",2,4,1,"ding-dong"]     //Can have value of more than one type

console.log(mixArray)


