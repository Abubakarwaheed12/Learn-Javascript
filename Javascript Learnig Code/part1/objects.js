// objects in javascript 
let data={
    name:'abubakar',
    age:21,
    city:'narowal',
    jobbies:['cricket', 'football', 'travelling'],
}
// how to add key value pair 
data.gender='male';
data['health']='good';
// key value ger from variable 
let key='email';
data[key]="abubakarwaheed6346528@gmail.com";
console.log(data);
console.log(typeof(data));
console.log(data.name);
console.log(data.age);
console.log(data.city);


// for loop 
// object.keys

for(key in data){
    console.log(`${key} :  ${data[key]}`);
}

console.log(Object.keys(data));
