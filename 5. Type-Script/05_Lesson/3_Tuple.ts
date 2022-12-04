// 
// Tuples : syntax is  let varName :[dt1, dt2]
//          Here the order of data in the tuple matters.
//

let dataTuple :[string, number, boolean]

dataTuple = ["SHR",6,true]  

// dataTuple = [6,true,"SHR"]      //<-- Error as the order of the type od data is different


//Strange tuple behaviour
let tupleData  :[string, number]= ["Name", 2]
tupleData.push(3)                   //  <-- Structure of data changes.    

console.log(tupleData)


//One way to solve the above issue :    Declare it as read-onlts

let tupleData1 :readonly[string, number] = ["Number", 2]
// tupleData1.push(2)          //  <-- Read-only








