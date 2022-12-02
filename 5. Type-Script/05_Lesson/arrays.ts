//Array Example

//Integer/Number Array
const intArray :number[] = [6,8]
intArray.push(4)
intArray.push(3)

console.log(intArray)

//------------------------------------------------------------------------/
//Alias array
type sampleA = {
    prop1: string,
    prop2: number
}


const aliasArray :sampleA[]= []
aliasArray.push({
    prop1:"value",
    prop2:3
})

//------------------------------------------------------------------------/
//Another way to define an array

const arrNumber :Array<number> = []
arrNumber.push(2)








