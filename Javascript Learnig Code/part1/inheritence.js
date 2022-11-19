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
}

const cat=new animal("billi" , 1);
console.log(cat);
console.log(cat.is_cute());

//  Inheritence 

class dogs extends animal{
    //  this class inherit all the properties from animal class 
        constructor(name, age, health){
            super(name, age);
            this.health=health;
        }
    speed(){
        console.log("dog run 120kmh speed in deserts");
    }

    // we can modify the base class methods 
    cute(){
        console.log("dog is cute");
    }
}
const dog=new dogs("booli" , 121, "not a good ");
console.log(dog);
dog.speed();
dog.cute();


//  class of person 
//  Getter And Setter 

class person{
    constructor(name,city,age){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    // with get it can trear as a property 
    // get fullname(){
    //     console.log(`${this.name}, ${this.city}`)
    // }
    set fullname(fullname){
        const[name, city]=fullname.split(" ");
        this.name=name;
        this.city=city;
    }
}

const user=new person("abu bakar" , "muridley" , 12); 
user.fullname("abu bakar");
console.log(user);