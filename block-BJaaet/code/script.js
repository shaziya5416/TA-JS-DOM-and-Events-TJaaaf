//create input box with basic UI of an emty list from html
//when press enter should be added a list below
//
//when clicking cross it must delete
let rootElm=document.querySelector("ul")
let input=document.querySelector(`input[type="text"]`);
let list=document.querySelector("label");
let allMovies=[];

//for deleting movies

function deleteMovie(event){
    event.target.parentElement.remove();
}
//Added movies to the list
input.addEventListener("keyup",(event)=>{
    if(event.keyCode===13){
    allMovies.push({
        name:event.target.value,
        watched:false
    })
    }
createMovies();
})

//make li of the movie
    /*<ul>
        <li>
          <input class="styled-checkbox" id="1" type="checkbox">
          <label for="1">MovieName</label>
          <button>X</button>
        </li>
      </ul>
      */
function createMovies(){
    rootElm.innerHTML="";
allMovies.forEach((elm,i)=>{
let li=document.createElement("li");
let inputUI=document.createElement("input");
inputUI.classList.add("styled-checkbox");
inputUI.id="i";
inputUI.checked=elm.watched;
inputUI.type="checkbox";
let label=document.createElement("label");
label.for="i";
label.innerText=elm.name;
let button=document.createElement("button");
button.innerText="X";
button.addEventListener("click",deleteMovie)

li.append(inputUI,label,button);
rootElm.append(li);
}
)
}
createMovies();