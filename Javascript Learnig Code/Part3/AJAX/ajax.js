
const URL="file:///E:/Learnings/Learn%20JS/Javascript%20Learnig%20Code/Part3/AJAX/data.json";

const xhr=new XMLHttpRequest();

xhr.open("GET" , URL);

xhr.onload= ()=>{
    if(xhr.status > 200 && xhr.status <300){
        const data=JSON.parse(xhr.response);
        console.log(data);
    }else{
        console.log("SomeThing Went Wrong.!!!!!!!!!");
    }
}

xhr.send();