// 
// Optional Field
// 

type demoAlias = {
    name: string;
    age: number;
    about ?: string;        //<--   ? makes the field optional
}

let var1 :demoAlias= {
    name:"VAR1",
    age:22
} 

console.log(var1)

let var2 :demoAlias = {
    name:"VAR2",
    age:24,
    about:"This is just another variable"
}

console.log(var2)