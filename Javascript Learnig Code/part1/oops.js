

// OOP in Javascript 

//  create a function that create user and return object 

let user1={
    name:"abu bakar",
    last_name:"waheed",
    address:"muridkey",
    age:22,
    about(){
        console.log(`${this.name} ${this.last_name} is ${this.age} year old  `);
    },
    is18(){
        return this.age>18;   
    },

}

user1.about();
console.log(user1.is18());

//  now we  will create a function to  create the object of user 

const user_methods={
    about:function(){
        return (`${this.name} ${this.last_name} is ${this.age} year old  `);
    },
    is18:function(){
        return this.age>18;
    }
}

function create_user(name, last_name,age,address,){
    const obj={};
    obj.name=name;
    obj.last_name=last_name;
    obj.address=address;
    obj.age=age;
    obj.about=user_methods.about;
    obj.is18=user_methods.is18;
    return obj;
}

const new_user=create_user('abu bakar' ,'waheed' , 19 ,'muridkey');

console.log(new_user);
console.log(new_user.about());
console.log(new_user.is18());