
//  Array Method 
//  that is used  to filter the array 


const numbers=[1,2,3,4,5,6,78,8,];


const filtered_array=numbers.filter((user) => {
    return  user%2 !==0;
})
console.log(filtered_array);