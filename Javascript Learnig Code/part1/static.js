//  In this code we will practice static method or static properties
class animal{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }
    is_cute(){
        return this.age<=1;
    }
    cute(){
        return "cute"
    }
    // static method
    static hobby(){
        console.log("animal has many hbbies");
    }
    // static property
    static des="hello";
}

const cat=new animal("billi" , 1);
console.log(cat);
console.log(cat.is_cute());
//  static methods related to class so we can call this with the class name 
animal.hobby();
console.log(animal.des);