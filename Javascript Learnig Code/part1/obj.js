
//  Create Object with another  object 

const obj1={
    key1:"val1",
    key2:"val2",
}

const obj2=Object.create(obj1);

console.log(obj2.key2);
console.log(obj2);
// __proto__ is called dunder 
console.log(obj2.__proto__);