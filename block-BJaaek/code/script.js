let box1=document.querySelector(".first")
let box2=document.querySelector(".second")

function generateRandomColor(){
let hexa=[
"0",
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
let final="#"
for (let i=0;i<6;i++){
let index=Math.floor(Math.random()*16)
final=final+hexa[index];
}
return final;
}

function handleclick(){
let color=generateRandomColor();
box1.style.backgroundColor=color;
}
function handleclick2(){
    let color=generateRandomColor();
    box2.style.backgroundColor=color;
    }
box1.addEventListener("click",handleclick)
box2.addEventListener("mousemove",handleclick2);


