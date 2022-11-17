
// LEXICAL SCOPE 
const app= () =>{
    const myvar="var1";

    const myfun = () => {
        // const myvar="abu bakar waheed";
        console.log(`name is ${myvar}`);
    }
    console.log(myvar);
    myfun();
}

app();