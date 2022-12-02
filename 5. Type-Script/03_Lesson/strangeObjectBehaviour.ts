//Here we will see one strange behaviour of object


//This function accepts an object having name and id as the properties
function acceptsObject({name, id}){}
    
//calling the function with the expected object
acceptsObject({name:"SHR", id:1})


//calling the function with the object having extra content
// acceptsObject({name:"SHR", id:1, age:21})   //<--   Error

let sampleObject = {name:"SHR", id:1, age:21};
acceptsObject(sampleObject)                 //<==   BOOM No Error !!! Thats the strange behaviour


