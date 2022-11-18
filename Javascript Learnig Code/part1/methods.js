
//  function inside objects is called methods 
let user={
    name:"abu bakar",
    age:21,
    about:function(){
        console.log(`Person name is ${this.name} and the age is ${this.age}`);
    }
}

user.about();