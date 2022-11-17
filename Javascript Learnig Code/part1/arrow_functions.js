//  Arrow functions 

const hello = () =>{
    console.log("this is arrow function");
}
hello();
// Sum function with  arrow function 

const sum=(a1,b1,c1) =>{
    return a1+b1+c1;
}

console.log(sum(1,1,1));
// is even 

const is_even= (n) =>{
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

let ans=is_even(2);
console.log(ans);