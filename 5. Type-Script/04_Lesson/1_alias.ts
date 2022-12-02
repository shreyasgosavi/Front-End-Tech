// 
// Alias
// 

type Human = {
    name :String,
    height :number,
    age :number,
    country :string
}

function aliasDemo(human :Human) :Human {

    console.log(human);
    return human;
}

aliasDemo({name:"SHR", height: 168, age:21, country:"IND"})

export{}