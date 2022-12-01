

function myfunc(){
    let count=0;
    return function (){
        if(count<1){
            console.log("Hi you called me ");
            count++;
        }else{
            console.log("function already called");
        }
    }
}
const ans=myfunc();
ans();