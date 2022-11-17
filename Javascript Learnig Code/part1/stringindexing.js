// string indexing 

let fname="   abu bakar waheed   ";
console.log(fname.trim());
console.log(fname.toLowerCase())
console.log(fname.toUpperCase())
console.log(fname.slice())
console.log(fname[5]);
console.log(fname.length-1);

// slice method 

let newname=fname.slice(0, 10);
console.log(newname)

console.log(typeof(newname))

// change the data type 
console.log(+newname)

// Template  String 

let first_name="abu bakar";
let age=21;

console.log(`my name is ${first_name} and age is ${age}`)

