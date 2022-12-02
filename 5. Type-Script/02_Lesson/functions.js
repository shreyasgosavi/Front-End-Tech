// Here type-script take the type as any
function addTwo(num) {
    num.toUpperCase; //  <-- No restriction as type-restriction is not implemented
    return num + 1;
}
var ans = addTwo(2);
console.log("Result after addition is " + ans);
function stringOperations(val) {
    return val.toUpperCase();
}
var stringResult = stringOperations("b");
console.log("Upper Case " + stringResult);
var intDemo = stringOperations(3);
console.log("Int demo " + intDemo);
