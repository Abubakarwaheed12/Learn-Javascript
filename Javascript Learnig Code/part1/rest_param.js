
function add(...a){
    let total=0;
    for(let num of a){
        total=total+num;
    }
    console.log(total);
}

add(1,2,3,4,5,6,7,8);