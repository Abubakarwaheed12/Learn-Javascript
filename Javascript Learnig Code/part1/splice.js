
//  fill is the also a method of array it change the original array 

// Splice Method 
//  this method is used to delete and add  the element in array  

const my_Array=['item1','item2', 'item3' , 'item4'];

const Spliced_Array=my_Array.splice(0,1);

// for adding the value we insert a value on 3 point 
my_Array.splice(0,1 , 'new_item');

console.log(Spliced_Array);
// print the original array 
console.log(my_Array);
