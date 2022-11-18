

// CALL Function is very important 
//  Call ,Apply , Bind 
 
// function hello(){
//     console.log("hello function");
// }
// hello.call();

let user={
    name:"abu bakar",
    age:21,
    about:function(){
        console.log(`Person name is ${this.name} and the age is ${this.age}`);
    }
}
let user1={
    name:"Muhammad Umar",
    age:14,
}
user.about.call(user1);
//  when we use call function then it is compulsory to we can define the object in call function
// we can also pass the parameters in function 
// we can declare the function outside the object 