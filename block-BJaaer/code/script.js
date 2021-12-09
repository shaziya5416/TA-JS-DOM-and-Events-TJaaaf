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
let overlay=document.querySelector(".overlay")
let modelInf0=document.querySelector(".model-info");
let close=document.querySelector(".close");

function handleEvent(event){
    event.preventDefault();
    let variable=event.target.elements;
    userInfo.name=variable.name.value;
    userInfo.color=variable.color.value;
    userInfo.range=variable.range.value;
    userInfo.email=variable.email.value;
    userInfo.books=variable.books.value;
    userInfo.gender=variable.gender.value;
    userInfo.terms=variable.terms.checked;
    
    displayInfo(userInfo);
}
function displayInfo(data={}){
let h1=document.createElement("h1");
h1.innerText=`Hello ${userInfo.name}`;
let email=document.createElement("p");
email.innerText=userInfo.email;
let color=document.createElement("p");
color.innerText=userInfo.color;
modelInf0.append(h1,email,color);

//FOR CLOSING AND OPENING;

close.addEventListener("click",()=>{
    modelInf0.innerHTML="";
    
})

}


forms.addEventListener("submit",handleEvent)
