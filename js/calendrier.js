// evt pour changer les url dynamiquement
window.addEventListener("load",function(){
    var calendrierTexte = document.querySelectorAll("#cours p");
    var arrayLenght = calendrierTexte.length;
    for (let i = 0; i < arrayLenght; i++) {
        if(i == 1 || i == 6 ){
            continue;
        }
        calendrierTexte[i].style.cursor = "pointer";
        calendrierTexte[i].addEventListener("click",function(evt){
            var urlbase = "https://tim.cmaisonneuve.qc.ca/";
            var urlMod = urlbase + evt.target.getAttribute("data");
            window.open(urlMod, '_blank');
        });
    }
});