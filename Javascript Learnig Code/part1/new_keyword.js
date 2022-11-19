
// New keyword

// these function also called constructor
//  this function must call with new keyword 
function create_user(name, last_name,age,address,){
    // const obj=Object.create(create_user.prototype);
    this.name=name;
    this.last_name=last_name;
    this.address=address;
    this.age=age;
}
//  here will create above methods in funcion prototype 
create_user.prototype.about=function(){
            return (`${this.name} ${this.last_name} is ${this.age} year old  `);
        }
create_user.prototype.is18=function(){
    return this.age>18;
}


const new_user= new create_user('abu bakar' ,'waheed' , 19 ,'muridkey');

console.log(new_user);
console.log(new_user.about());
console.log(new_user.is18());

//  all the obove code works properly 
