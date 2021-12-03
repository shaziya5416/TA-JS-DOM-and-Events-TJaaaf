/*
1. Make 500 blocks //DONE
2. generate random number from 0 to 500//
3.generate random color//DONE
5.change random color 
6.change random boxes

*/

function generateRandom(max){
    let random=Math.floor(Math.random()*(max));
    return random;
}

function generateRandomColor(){
let hexa=[
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"a",
"b",
"c",
"d",
"e",
"f"
]
let color="#";
for (let i=0;i<6;i++){
let randomcolor=generateRandom(16)
color=color+hexa[randomcolor];
}
return color;
}


let allboxes=document.querySelector(".flex") 

for(let i=0;i<500;i++){
    let div =document.createElement("div");
    div.classList.add("div")
    let h3=document.createElement("h3");
    let randomNumber500=generateRandom(500);

    h3.innerText=randomNumber500;
    div.append(h3);
    allboxes.append(div);

}
let allDiv=document.querySelectorAll(".div");

function handleclick(){
allDiv.forEach(box=>{
box.style.backgroundColor=generateRandomColor();
box.children[0].innerText=generateRandom(500);
})

}
allboxes.addEventListener("mousemove",handleclick);


