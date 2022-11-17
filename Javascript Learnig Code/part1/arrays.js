// ARRAYS IN JAVASCRIPT 
// Array is reference type
// reference types is object in javascript
let fruits=['banana' , 'mango', 'apple' , 'orange', 'amrood'];

console.log(typeof(fruits));

console.log(fruits);

// array indexing 

console.log(fruits[0])

//  shift, unshift , push , pop   in arrays 
fruits.push("guawava");
console.log(fruits);
let poppedElement=fruits.pop();
console.log(poppedElement);

// shift  && unshift 

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("safhud"));
console.log(fruits);

// 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('adil'));