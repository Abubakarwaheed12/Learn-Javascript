
let users={
    user_name:"abu bakar",
    age:12,
    about:()=>{
        console.log(this.user_name , this.age);
    }
}

users.about();

