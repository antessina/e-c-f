// burger
var navSlide = function(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".lien");
    var navLinks = document.querySelectorAll(".lien li");
  
    // Apparition barre de navigation
    burger.addEventListener('click', function(){
        nav.style.transition = "transform 0.5s ease-in;";
        nav.classList.toggle("nav-active");
  
        // Apparition des liens animés
        navLinks.forEach(function(link, index){
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger animation
        burger.classList.toggle("toggle");
    });
  }
  
  navSlide();

