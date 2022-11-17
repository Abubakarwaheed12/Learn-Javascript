let winning_number=10;
let user_guess= +prompt("guess a number ");

if(user_guess===winning_number){
    

    console.log("winner");
}
else{
    if(user_guess<winning_number){
        console.log("too low");
    }
    else{
        console.log("too high"); 
    }
}