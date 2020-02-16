export class animHeader{
    constructor(element){
    this.element = element;
    }
    animation(){
        this.element.style.transform = "translateY(0px)";
        this.element.style.transition = "all 2s";
        this.element.style.opacity = "0.4";
        this.element.style.transform = "scale(0.6)";
        this.element.addEventListener("transitionend",function(){
            this.style.color = "#4d4dff";
            this.style.opacity = "1";
            this.style.transform = "scale(1)";
        });
    }
}