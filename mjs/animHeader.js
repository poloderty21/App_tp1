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
        const anim = window.setInterval(function(){
            target.innerHTML += `${arrayLettre[compteur]}`;
            compteur++;
            if(compteur ==21){
                clearInterval(anim);
            }
        },200);
        this.element.style.opacity = "0.4";
        this.element.style.transform = "scale(0.6)";
        this.element.addEventListener("transitionend",function(){
            this.style.color = "#4d4dff";
            this.style.opacity = "1";
            this.style.transform = "scale(1)";
        });
    }
}