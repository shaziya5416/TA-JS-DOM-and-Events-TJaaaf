// add event listener to form----------done
//make a handle fucntion-------done
// have variable ----------done
//prevent the submit default
//make userInfo to other modal

let userInfo={};
let name=document.querySelector("#name");
let email=document.querySelector("#email");
let gender=document.querySelector("#gender");
let color=document.querySelector("#color");
let fiction=document.querySelector("#fiction");
let range=document.querySelector("#range");
let nonfiction=document.querySelector("#non-fiction");
let adventure=document.querySelector("#adventure");
let terms=document.querySelector("#terms");
let forms=document.querySelector("form");

function handleEvent(event){
    event.preventDefault();
    userInfo.name=forms.elements.text.value;
    userInfo.Email=forms.elements.email.value;
}




forms.addEventListener("submit",handleEvent)
