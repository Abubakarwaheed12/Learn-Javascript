// every is the method of array 


const numbers =[2,4,6,8,10];

// callback function return boolen value True Or False 

const res=numbers.every((num)=>num%2==0)

console.log(res);

const usercart=[
    {productname:'vivo', model:'1231', price:32121},
    {productname:'infinix', model:'1231', price:1212},
    {productname:'poco', model:'1231', price:22222},
];

// check all THE PRODUCT PRICE IS LESS THAN 30K WIT EVERY METHOD OF JAVASCRIPT 

const userfind=usercart.every((user)=>user.price<30000);

console.log(userfind);