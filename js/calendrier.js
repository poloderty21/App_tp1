let genere = false;

// evt pour changer les url dynamiquement
window.addEventListener("load",function(){
    eventAdd();
    const calendrierTexte = document.querySelectorAll("#cours p");
    const arrayLenght = calendrierTexte.length;
    for (let i = 0; i < arrayLenght; i++) {
        if(i == 1 || i == 6 ){
            continue;
        }
        calendrierTexte[i].style.cursor = "pointer";
        calendrierTexte[i].addEventListener("click",function(evt){
            const urlbase = "https://tim.cmaisonneuve.qc.ca/";
            const urlMod = urlbase + evt.target.getAttribute("data");
            window.open(urlMod, '_blank');
        });
    }
});


// Ajouter les éléments nécessaire

creationRetour = () =>{
    const section = document.querySelector(".vie-etudiante>div");
    const p = document.querySelector(".vie-etudiante div div:last-child p");
    if(!p.classList.contains("retourColor")){
        const element = document.createElement("div");
        const para = document.createElement("p");
        para.innerHTML = "retour";
        para.classList.add("retourColor");
        element.appendChild(para);
        section.appendChild(element);
    }
}


// Ajouter un event 
eventAdd = () =>{
    const nodeListp =  document.querySelectorAll(".vie-etudiante p");
    const section = document.querySelector(".vie-etudiante>div");
    const element = document.createElement("div");
    nodeListp.forEach(p => {
        p.style.textDecoration = "underline";
        p.style.cursor = "pointer";
        p.addEventListener("click",function(evt){
            creationRetour();
            const data = evt.target.getAttribute("data");
            changerElement(data);
        });
    });
    
}

// Trouver le bon objet  

changerElement = (data) =>{
    texte.forEach(element => {
        if(data == element.section){
            const division = element;
            modifierTexte(division);
        }
    });
}

// modifier les sections avec l'objet sélectionné
modifierTexte = (division) =>{
    const nodeListp =  document.querySelectorAll(".p-texte");
    const texte = division.texte;
    console.log(texte);
    let i = 0;
    nodeListp.forEach(p => {
        p.innerHTML = "";
    });
    nodeListp.forEach(p => {
        p.innerHTML = texte[i];
        if(p.innerHTML == "undefined"){
            p.innerHTML = "";
        }
        i++;
    });
}
