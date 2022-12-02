// 
// Read-Only
// 

type sampleAlias = {
    name: string;
    mood: string;
    readonly num: number[]
}

let sampleVariable :sampleAlias= {
    name:"SHR",
    mood:"Happy",
    num: [2,3,4]
}

sampleVariable.num[1] = 3          
console.log(sampleVariable.num)

sampleVariable.mood = "Extremely Happy"
// sampleVariable.num = 2             //<-- Can't change the value (We need to specify the type of the variable)


// let arrayNum :number[] = [3,4,5]
// console.log(arrayNum)