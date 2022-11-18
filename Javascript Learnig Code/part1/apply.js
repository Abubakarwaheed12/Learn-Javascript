

// CALL Function is very important 
//  Call ,Apply , Bind 
 
// function hello(){
//     console.log("hello function");
// }
// hello.call();
function about(hobby , game){
    console.log(`Person name is ${this.name} and the age is ${this.age} , ${hobby} , ${game}`);
}

let user={
    name:"abu bakar",
    age:21,
    
}
let user1={
    name:"Muhammad Umar",
    age:14,
}
about.apply(user1 , ['asdas' , 'cricket']);


//  bind
// return the function
const func=about.bind(user , ['love' , 'footbal']);
func();