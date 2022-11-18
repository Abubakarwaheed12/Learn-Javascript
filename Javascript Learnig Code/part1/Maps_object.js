
//  map is iterable object in javascript 

const person=new Map();

person.set("NAME" , "abu bakar waheed");
person.set("AGE" , 23);
person.set("GENDER" , "MALE");

console.log(person);
for([key,value] of person){
    console.log(key, value );
}