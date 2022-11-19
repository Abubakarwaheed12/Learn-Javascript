
// const user_methods={
//     about:function(){
//         return (`${this.name} ${this.last_name} is ${this.age} year old  `);
//     },
//     is18:function(){
//         return this.age>18;
//     }
// }


function create_user(name, last_name,age,address,){
    const obj=Object.create(create_user.prototype);
    obj.name=name;
    obj.last_name=last_name;
    obj.address=address;
    obj.age=age;
    return obj;
}
//  here will create above methods in funcion prototype 
create_user.prototype.about=function(){
            return (`${this.name} ${this.last_name} is ${this.age} year old  `);
        }
create_user.prototype.is18=function(){
    return this.age>18;
}


const new_user=create_user('abu bakar' ,'waheed' , 19 ,'muridkey');

console.log(new_user);
console.log(new_user.about());
console.log(new_user.is18());