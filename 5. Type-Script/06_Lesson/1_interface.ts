interface Interface1 {

    readonly id:number;
    name :String;
    age :number;
    function1() : string;       //<--   String is the return type of the function
    optionalProperty ?: number,
}

const implement :Interface1 = {

    id :1,
    name :"MH",
    age :21,
    function1: () => {
        return "VAL"
    }

    // optionalProperty:2,

}

console.log(implement.id)

////--------------------------------------------------------
// Lets look at the alias example

type AliasCompare  = {

    readonly id_A:number;
    name_A :String;
    age_A :number;
    function1_A() : string;       //<--   String is the return type of the function
    optionalProperty_A ?: number,
}

const demoA :AliasCompare = {
    id_A : 2,
    name_A :"ALias",
    age_A : 22,
    function1_A: () => {
        return "This is Alias"
    }, 
    optionalProperty_A:3
}


export{}