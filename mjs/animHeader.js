/*
    Class animHeader
    Animation du header en POO
*/
export class animHeader{
    constructor(element){
    this.element = element;
    }
    animation(){
        this.element.style.transform = "translateY(0px)";
        this.element.style.transition = "all 2s";
        let compteur = 0;
        const arrayLettre = ["s","i","t","e"," ", "u","t","i","l","i","t","a","i","r","e"," ", "p","e","r","s","o"];
        const target = document.querySelector(".global h1");
        const arrayLenght = arrayLettre.length;       
        //A chaque .2 seconde on ajoute l'animation à la prochaine lettre
        const anim = window.setInterval(function(){
            target.innerHTML += `${arrayLettre[compteur]}`;
            compteur++;
            // Si le compteur arrive au bout du tableau, on arrete l'animation
            if(compteur == arrayLenght){
                clearInterval(anim);
            }
        },200);
        //On set l'animation
        this.element.style.opacity = "0.4";
        this.element.style.transform = "scale(0.6)";
        //On change l'apparence une fois l'animation terminée
        this.element.addEventListener("transitionend",function(){
            this.style.color = "#4d4dff";
            this.style.opacity = "1";
            this.style.transform = "scale(1)";
        });
    }
}