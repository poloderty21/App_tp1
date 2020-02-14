
function myFunction(x) {
    x.classList.toggle("change");
    var element = document.querySelector("nav");
    element.classList.toggle("nav-height");
    var elementUl = document.querySelector("ul");
    elementUl.classList.toggle("ul-opacity");
}  

// fermeture du menu quand on click sur un li version mobile.

function fermerMobilePage(){
    var screenWith = window.screen.width;
    if(screenWith < 600){
        var target = document.querySelector(".container");
        myFunction(target);
    }
}

// Ajout du smooth scrolling en jQuery
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

