const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);


// recherche

function setSearch(oEvent){
    console.log(oEvent); 
    oEvent.preventDefault();
    var sType = oEvent.type,
        sClass =  "search",
        oSearch = oEvent.currentTarget,
        oForm  =  oSearch.form; 
    if((sType == 'focus' || sType == 'click') && !oForm.classList.contains(sClass)){
      oForm.classList.add(sClass)
    }else if(sType == 'blur' && oSearch.value.trim() == ''){
      oForm.classList.remove(sClass)
    }
  }
  //Quand le DOm est dispo
  document.addEventListener('DOMContentLoaded',function(){
    var oInput = document.forms["form-search"]["search"];
    oInput.addEventListener('focus',setSearch)
    oInput.addEventListener('blur',setSearch);
    
    document.getElementById("bt-search").addEventListener('click', function(oEvent){
      oEvent.preventDefault();oInput.focus() ;
    });
    
    document.getElementById("bt-close").addEventListener('click', function(oEvent){
      oEvent.preventDefault();
      oInput.form.classList.remove("search");
      oInput.value ='';
    });
  });



