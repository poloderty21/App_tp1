// evt pour changer les url dynamiquement
window.addEventListener("load",function(){
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

//changer les textes de la vie étudiante
const nodeListp =  document.querySelectorAll(".vie-etudiante p");
nodeListp.forEach(p => {
    p.style.textDecoration = "underline";
    p.style.cursor = "pointer";
    p.addEventListener("click",function(evt){
        console.log(evt.target);
    });
});