/*
    Class animOpacity
    Classe qui anime l'opacité du survole d'un autre texte
*/

export class animOpacity{
    constructor(element){
        this.element = element;
    }

    
    animOpacite(){
        //console.log(this.element);
        this.element.style.opacity = "1";
        this.element.style.transition = "all 5s";
        const eleLi = document.createElement("li");
        eleLi.style.color = "rgb(77, 77, 255)";
        eleLi.style.position = "absolute";
        // console.log(this.element);
        this.element.appendChild(eleLi);
        // const hoverEl = this.element.childNodes;
        const array = [];
        array[0] = this.element.childNodes[1];
        array[1] = this.element.childNodes[3];
        array[2] = this.element.childNodes[5];
        array[3] = this.element.childNodes[7];
        array.forEach(element => {
            element.addEventListener("mouseover",function(){
                const attr = this.childNodes[0].getAttribute("href");
                let tooltip;
                switch (attr) {
                    case "#vie-etudiante":
                        tooltip = "Des liens pour aider les étudiants";
                    break;
                    case "#projet":
                        tooltip = "Des projets que certain étudiants ont fait";
                    break;
                    case "#horaire":
                        tooltip = "Horraire typique d'un étudiant du tim";
                    break;
                }
                this.childNodes[0].style.color = "rgb(77, 77, 255)";
                eleLi.innerHTML = tooltip;
            });
        });
        array.forEach(element => {
            element.addEventListener("mouseout",function(){
                //console.log(this.childNodes[0]);
                this.childNodes[0].style.color = "#fff";
                eleLi.innerHTML = "";
            });
        });
    }
}