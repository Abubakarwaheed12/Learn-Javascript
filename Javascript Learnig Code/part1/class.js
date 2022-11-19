//  Classes are fake in javascript 

class create_user{

    
    constructor(name, last_name,age,address,){
        //when we create any object our constructer is automatically called  
        console.log("constructer called");
        this.name=name;
        this.last_name=last_name;
        this.address=address;
        this.age=age;
    }
    about(){
        return (`${this.name} ${this.last_name} is ${this.age} year old  `);
    }

    is18(){
        return this.age>18;
    }
}
//  now we wil create the object of class 
const user=new create_user("abu bakar" , "waheed", 20 , "muridkey pakistan")
console.log(user);
// if function return the value then we will call the function  
console.log(user.about());
console.log(user.is18());

console.log(user.name);

// check the prototype of user 
console.log(Object.getPrototypeOf(user));


 // Other way 
// function create_user(name, last_name,age,address,){
//      const obj=Object.create(create_user.prototype);
//     this.name=name;
//     this.last_name=last_name;
//     this.address=address;
//     this.age=age;
// }
//  here will create above methods in funcion prototype 
// create_user.prototype.about=function(){
//             return (`${this.name} ${this.last_name} is ${this.age} year old  `);
//         }
// create_user.prototype.is18=function(){
//     return this.age>18;
// }


// const new_user= new create_user('abu bakar' ,'waheed' , 19 ,'muridkey');

// console.log(new_user);
// console.log(new_user.about());
// console.log(new_user.is18());

//  all the obove code works properly 
