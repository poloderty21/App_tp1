export class animOpacity{
    constructor(element){
        this.element = element;
    }
    animOpacite(){
        //console.log(this.element);
        this.element.style.opacity = "1";
        this.element.style.transition = "all 5s";
        //console.log(this.element.childNodes);
        const hoverEl = this.element.childNodes;
        const array = [];
        array[0] = this.element.childNodes[1];
        array[1] = this.element.childNodes[3];
        array[2] = this.element.childNodes[5];
        //console.log(array);
        array.forEach(element => {
            element.addEventListener("mouseover",function(){
                //console.log(this.childNodes[0]);
                this.childNodes[0].style.color = "rgb(77, 77, 255)";
            });
        });
        array.forEach(element => {
            element.addEventListener("mouseout",function(){
                //console.log(this.childNodes[0]);
                this.childNodes[0].style.color = "#fff";
            });
        });
    }
}