//  very useful in realworld Applications

let myarr=['abu bakar' , {'afd':'sadas'} , 'waheed'];

console.log(myarr);

const users=[
    {
        name:'abu bakar',
        age:21,
        education:14,
    },
    {
        name:'talha',
        age:22,
        education:12,
    },
    {
        name:'ubaid',
        age:25,
        education:16,
    }
]

console.log(users);

//  for loop in array 

for(user of users){
    console.log(user.name);
}