const User = {
    name:"Virat",
    role:"Batsman",
    age:33
}


//Padding an object as a parameter to the function
function createUser({name ,age}){

    console.log("Name is "+name);
    console.log("Age is "+age);
}

//calling the fuction with the help of the argument
createUser({name:"SHR",age:21})


