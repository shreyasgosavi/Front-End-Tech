//Arrow Function 

/* 
Syntax :
    (parameters) :returnType => { 
        body 
    }
 */

//Arrow function with no parameters
const val = () :number => {
    return 3
}

const seb :number = 2
const val2 = (a ,b) :number=> { 
                return a+b
            }

console.log( val2("d","w"));
console.log( val2(3,5));


const func = (a :number | string) => { 
    if(typeof a === "string") 
        return "s" 
    
    return a+2
}

console.log(func(3));
console.log(func("3"));



export{}