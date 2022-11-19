

//  when we create a function then function provide us a free space this space is called prototype .
// Only functions provide prototype property 

// FUNCTIONS BEHAVE LIKE Objects 

function hello(){
    console.log("hello this function is created for to practice the prototype property");
}
hello.prototype.name1="world";
console.log(hello.prototype.name1);
//  we can add function also in function free space the free space is provided when we create any object 
//  proto and prototype is totally different 
// proto is chianing 

if(hello.prototype){
    console.log("function has prototype")
}
else{
    console.log("No prototype exists here");
}


