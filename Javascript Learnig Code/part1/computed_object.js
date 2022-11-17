
const key1='key1'
const key2='key2'

const val1='val1'
const val2='val2'

const obj={
    [key1] : val1,
    [key2] : val2,
}

console.log(obj);
// object destructing 

let {key1: va1 , key2: var2 }=obj;
console.log(var2);
// spred operaotor 
// program to check the positions of charachters in n object 
let n={..."abcassdcsdfrfsdewewf"};

console.log(n);