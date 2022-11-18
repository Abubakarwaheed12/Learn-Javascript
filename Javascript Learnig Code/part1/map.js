const numbers=[1,2,3,4,5,6];

function sq(num){
    return num**2;
}

//  map is callbacl 
// map function return an Array if function return the value otherwise the array will be undefined
const newarray=numbers.map(sq);

console.log(newarray);