let allBoxes=document.querySelectorAll(".first li")
let allBoxes2=document.querySelector(".second")
allBoxes.forEach((elm,index)=>{
 elm.addEventListener("click",(event)=>{
     event.target.innerText=index+1;
     setTimeout(()=>{
         event.target.innerText=""
     },5000)
 })

})

allBoxes2.addEventListener("click",(event)=>{
    let value1 =event.target.dataset.value;
    event.target.innerText=value1;
    setTimeout(()=>{
        event.target.innerText=""
    },2000)
})