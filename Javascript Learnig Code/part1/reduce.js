

// Reduce method 
// input a callback function 

const numbers=[1,2,3,4,5,6,7,8,9];

// sum all of the numbers of the array 
const Reduce_Array=numbers.reduce((accumulaotr , current_value) =>{
    return accumulaotr + current_value;
})

console.log(Reduce_Array);

//  another example 
const usercart=[
    {productname:'vivo', model:'1231', price:32121},
    {productname:'infinix', model:'1231', price:1212},
    {productname:'poco', model:'1231', price:22222},
];

const totalprice=usercart.reduce((productprice, totalprice)=>{
    return productprice + totalprice.price; 
} , 0);

console.log(totalprice);