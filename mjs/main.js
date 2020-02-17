import {animHeader} from "./animHeader.js";
import {animOpacity} from "./animOpacity.js";

// Sélection du titre h1
const elementMod = document.querySelector(".global h1");
// selection du nav/menu
const elementOpa = document.querySelector(".section-ul");
// On Crée les objets d'animation
const animTitle = new animHeader(elementMod);
const animOpa = new animOpacity(elementOpa);
// On les animes
animOpa.animOpacite();
animTitle.animation();