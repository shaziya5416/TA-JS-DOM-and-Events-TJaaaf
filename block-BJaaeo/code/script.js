let initialValue=0;
let display=document.querySelector(".display");
let allBtn=document.querySelectorAll("button")
function handleclick(event){
    if (event.target.classList.contains("equal")){
        display.innerText=eval(display.innerText)
        return;
    }
    if (event.target.classList.contains("clear")){
        display.innerText=initialValue;
        return;
    }
      if (display.innerText==="0"){
        display.innerText=event.target.innerText;   
      }
      else{
    display.innerText+=event.target.innerText;
      }
}


allBtn.forEach((elm)=>{

addEventListener("click",handleclick)

})


display.innerText=initialValue;