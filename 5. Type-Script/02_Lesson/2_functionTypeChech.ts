function addTwoToIt(num :number){
    
    // num.toUpperCase()               //  <-- Not allowed
    return num+3
}

const result = addTwoToIt(2)           //  <-- Type is number  \\

console.log("Number after operation "+result)

function stringOperation(val :string){
    return val.toUpperCase()
}


const resultString = stringOperation("hu")

console.log("String after operation "+resultString)

export{}
