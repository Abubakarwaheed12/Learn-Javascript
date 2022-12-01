
function getAndAddTwoNUmbers(num1 , num2 , callback){
    // console.log(num1 , num2);
    if( typeof num1==="number" && typeof num2==="number"){
        callback(num1 , num2);
    }
    else{
        console.log("Wrong Input");
    }
}

function callback(num1 , num2){
    console.log(num1+num2);
}

getAndAddTwoNUmbers("2",5,callback)