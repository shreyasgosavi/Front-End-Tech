// Generics : Helps to avoid re-writing of same functions for different data-types
//Makes the component re-usable

function getAgeN(age :number) :number{
    return age
}

function getAgeS(age :any) :string{
    return age
} 


// let demoArray :Array<number> = [3,4,5,"VAL"]     //      Can't do here
let demoArray :Array<number> = [4,4,6]
let demoArrayS :Array<string> = ["d",'d','t']
 

console.log(demoArray) 
console.log(demoArrayS) 



//...............................................................................

interface sampleI {
    str :string,
    readonly id :number
}

function returnValueOfAnyType<T>(value :T) :T{  
    console.log("Data-type of the passed parameter is "+typeof value)
    return value;
}

returnValueOfAnyType(4)
returnValueOfAnyType<string>("3")

returnValueOfAnyType<sampleI>(
    {
        str:"HEHEHEH",
        id:2
    }
)

export{}





