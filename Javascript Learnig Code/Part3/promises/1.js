// 
const bucket=['nan' , 'haleem' , 'chawal' , 'roti'];

function rice(){
    return  new Promise((resolve,reject)=>{
        if(bucket.includes("haleem") && bucket.includes("chawal")){
            resolve("hallem chawal are available")
        }
        else{
            reject("Coud't Do It.....!!!!!!");
        }
    });
}

rice().then((chawal)=>{
    console.log(`lets eat ${chawal}`);
}).catch((error)=>{
    console.log(error)
});