
// Sort method 
// sort is a array methood 

// sort method changes the originl array 

const numbers=[3,343,1,5,3,4,15];
// in numbers case he cannot print clearly asscending order 
// but in charachet case he print in acsending order 
// so the solution is 
const sorted_Array=numbers.sort((a,b) => a-b);
// now the numbers array is sorted in good way 
console.log(sorted_Array);
//  capital letter exist in array then it will come first in sorted array
const names=['saad jutt','abu bakar' , 'waheed ahamad', 'ubaidullah', 'talha'];

const sorted_names=names.sort();

console.log(sorted_names);