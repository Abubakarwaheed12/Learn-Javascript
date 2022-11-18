
// FIND IS A ARRAY METHOD to find a value in array 

const numbers=['cat' , 'dog' , 'lion' , 'rat' , 'cow' , 'bafflow'];

// find the element with the length 
const find12=numbers.find((n) =>{
 return n.length===4;
});

console.log(find12);

//  find user with the user id in array 

const users=[
    {user_id:1, user_name:'abu bakar', age:21},
    {user_id:2, user_name:'ubaid', age:22},
    {user_id:3, user_name:'talha', age:11},
    {user_id:4, user_name:'hassan', age:31},
    {user_id:5, user_name:'ahmad', age:41},
]

const find_user=users.find((user)=>{
    return user.user_id===3;
})

console.log(find_user);