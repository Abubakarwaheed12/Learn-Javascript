const head1=document.querySelector(".heading1");
const head2=document.querySelector(".heading2");
const head3=document.querySelector(".heading3");
const head4=document.querySelector(".heading4");
const head5=document.querySelector(".heading5");
const head6=document.querySelector(".heading6");
const head7=document.querySelector(".heading7");

setTimeout(()=>{
    head1.style.color="red";
    head1.textContent="hello one";
    setTimeout(()=>{
        head2.style.color="yellow";
        head2.textContent="hello two";
        setTimeout(()=>{
            head3.style.color="blue";
            head3.textContent="hello three";
            setTimeout(()=>{
                head4.style.color="green";
                head4.textContent="hello four";
                setTimeout(()=>{
                    head5.style.color="purple";
                    head5.textContent="hello five";
                    setTimeout(()=>{
                        head6.style.color="blue";
                        head6.textContent="hello six";
                        setTimeout(()=>{
                            head7.style.color="green";
                            head7.textContent="hello seven";
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);

//  the above code is called callback hell  , Nested Callbacks 