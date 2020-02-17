import {animHeader} from "./animHeader.js";
import {animOpacity} from "./animOpacity.js";


const elementMod = document.querySelector(".global h1");
const elementOpa = document.querySelector(".section-ul");
const animTitle = new animHeader(elementMod);
const animOpa = new animOpacity(elementOpa);
animOpa.animOpacite();
animTitle.animation();