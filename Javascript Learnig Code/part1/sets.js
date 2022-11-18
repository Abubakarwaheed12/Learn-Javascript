

// sets is iterable in javascript 
// string are also iterable in javascript 
// array is iterable in javascript 
//  iterable means we can play for loop or any loop with the iterbles 

const numbers=new Set([1,2,3,4]);
// duplicates not allow in sets 
// no index based access
console.log(numbers);

numbers.add(12);


// hence proved the set is iterable 
for(a of numbers){
    console.log(a);
}

//  number check in sets 

numbers.has(3);