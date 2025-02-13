const btn =document.getElementById("toggle");
const createbtn=document.getElementById("create");
const popup=document.querySelector(".pop-up");
const form_exit=document.getElementById("form-exit");
const blurbody=document.querySelector(".wrapper");

let currentColour=getComputedStyle(document.body).backgroundColor;

btn.addEventListener("click",function(e){
    if(currentColour==="rgb(127, 255, 212)"){
    document.body.style.backgroundColor="black";
    btn.classList.add("toggle");
}

    else{
        document.body.style.backgroundColor="aquamarine";
        btn.classList.remove("toggle");
    }

    currentColour=getComputedStyle(document.body).backgroundColor;
})

createbtn.addEventListener("click",function(e){
    popup.classList.toggle("popup-show");
    createbtn.disabled=true;
   blurbody.classList.toggle("blur");
//    console.log(blurbody);

  
})

form_exit.addEventListener("click",function(e){
    popup.classList.toggle("popup-show");
    // console.log("debug sucess");
    createbtn.disabled=false;
    blurbody.classList.toggle("blur");

})

