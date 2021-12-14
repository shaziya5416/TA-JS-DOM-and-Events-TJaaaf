
/*
Tasks:
0.Make UI of the entire page.
1. Make UI for the cards dynamically
2.Make UI for the tags dynamically
3.
*/
let rootTag=document.querySelector(".tags")
let rootCards=document.querySelector(".cards")
let search=document.querySelector(".search")

let allPeople=got.houses.reduce((acc,cv)=>{
 acc=acc.concat(cv.people);
 return acc;
}
,[]);
let allHouses=got.houses.map(house=>house.name);
let activeHouse="";
/*
         <li>
         <img class="imgOfGOT" src="" alt="">
         <h2>Name</h2>
         <h3>Description</h3>
         <button class="knowMore">Know More</button>
         </li>
         */
//create card dynamically

function createCards(data=[]){
rootCards.innerHTML="";
data.forEach((people)=>{
let div=document.createElement("div");
let img=document.createElement("img");
img.classList.add("imgOfGOT");
img.src=people.image;
img.alt=people.name;
let h2=document.createElement("h2");
h2.innerText=people.name;
let h3=document.createElement("h3");
h3.innerText=people.description;
let button=document.createElement("button");
button.classList.add("knowMore")
button.innerText="Know More";
div.append(img,h2,h3,button);
rootCards.append(div);
})
}
createCards(allPeople);


//create tag dynamically:
function createTags(data=[]){
    rootTag.innerHTML="";
    data.forEach((tag)=>{
        let button=document.createElement("button");
        button.innerText=tag;
        button.addEventListener("click",()=>{
            let filterHouses=got.houses.find((house)=>house.name===tag).people||0;
            createCards(filterHouses);
        })
        rootTag.append(button);
       

    })
}
createTags(allHouses);

function handlesearch(event){
    let searchText=event.target.value;
    let filterPeople=allPeople.filter(p=>p.name.includes(searchText));
    createCards(filterPeople);

}

search.addEventListener("input",handlesearch);

