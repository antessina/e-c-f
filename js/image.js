let animation = document.querySelector('#animation');
 
animation.addEventListener('mouseover', () => {
    animation.style.backgroundImage = `url('img/goku fight.gif')`;
});
 
animation.addEventListener('mouseleave', () => {
    animation.style.backgroundImage = null;
});

let fond = document.querySelector('#response');
 
fond.addEventListener('mouseover', () => {
    fond.style.backgroundImage = `url('img/goku ultra.gif')`;
});
 
fond.addEventListener('mouseleave', () => {
    fond.style.backgroundImage = null;
});