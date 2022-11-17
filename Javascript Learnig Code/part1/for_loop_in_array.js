let fruits=['banana' , 'mango', 'apple' , 'orange', 'amrood'];

let fruit1=[];
for(i in fruits){
    fruit1.push(fruits[i].toUpperCase());
}

console.log(fruit1);

for(let fruit of fruits){
    console.log(fruit);
}