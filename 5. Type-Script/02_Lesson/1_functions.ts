
// Here type-script take the type as any
function addTwo(num){

    num.toUpperCase          //  <-- No restriction as type-restriction is not implemented
    return num+1
}

let ans = addTwo(2)
console.log("Result after addition is "+ans)

function stringOperations(val){     //  <--     Type is any
    return val.toUpperCase()
}

const stringResult = stringOperations("b")
console.log("Upper Case "+stringResult)

const intDemo = stringOperations(3)
console.log("Int demo "+intDemo)