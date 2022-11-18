// Callback Functions 
// function take input a function 

function myfun1(name){
    console.log("helo this is myfun1");
    console.log(`your name is ${name}`);
}
function myfun2(Callback){
    console.log(Callback);
}

myfun2(myfun1("abu bakar"));