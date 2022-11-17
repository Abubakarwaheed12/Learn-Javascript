let fruits=['banana' , 'mango', 'apple' , 'orange', 'amrood'];

// array destructing is used to  store the value of array in other array variables
// all remaining values store in myvar variable
let [myvar1 , myvar2 , ...myvar]=fruits;

console.log(myvar1);
console.log(myvar2);
console.log(myvar);