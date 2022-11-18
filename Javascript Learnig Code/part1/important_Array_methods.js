// foreach
// Map         this is very useful function 
// filter
// reduce 


// foreach takes input as a callback  
let num=[1,2,3,4,5,6,7];

function mul(number , index){
    console.log(`number is ${number} and the index is ${index}`);
    console.log(`${number} *2 == ` , number*2 );
}
num.forEach(mul);

const users=[
    {name:'abubakar'},
    {name:'talha'},
    {name:'ubaid'},
]

users.forEach((user , index)=>{
    console.log(user.name , index);
})