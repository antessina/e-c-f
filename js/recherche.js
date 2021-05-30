//recherche
let message= document.querySelector("#research");

let clic= document.querySelector("bt-search").addEventListener("click", contact);

function contact(f){
f.preventDefault();

window.find(message.value, false, false, false,
    false, false, false);
}