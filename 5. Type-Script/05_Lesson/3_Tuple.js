// 
// Tuples : syntax is  let varName :[dt1, dt2]
//          Here the order of data in the tuple matters.
//
var dataTuple;
dataTuple = ["SHR", 6, true];
// dataTuple = [6,true,"SHR"]      //<-- Error as the order of the type od data is different
//Strange tuple behaviour
var tupleData = ["Name", 2];
tupleData.push(3);
console.log(tupleData);
