
function myfun(n){
    if(n%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

myfun(123142324);


//  find target number  fucntion in array 

function arrfun(array ,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i; 
        }      
    }
    return -1;
}

const array_taregt=arrfun([1,2,3,4,5,6,7,8,6] , 5);

console.log(array_taregt);


// Function Expression 

const func=function mfunc(){
    console.log("this function expression");
}

func();