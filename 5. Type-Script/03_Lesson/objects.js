var User = {
    name: "Virat",
    role: "Batsman",
    age: 33
};
function createUser(_a) {
    var name = _a.name, age = _a.age;
    console.log("Name is " + name);
    console.log("Age is " + age);
}
createUser({ name: "SHR", age: 21 });
