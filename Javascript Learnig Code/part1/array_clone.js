// methods to clone an array 
let array1=['abu bakar' , ' waheed' , 'jutt', 'adfds'];
// let array2=array1.slice(0);
// let array2=[].concat(array1);

// the mostly used way is spread operator 

let array2=[...array1]

console.log(array1===array2);
console.log(array1);
console.log(array2);