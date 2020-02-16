import {animHeader} from "./animHeader.js";

let elementMod = document.querySelector(".global h1");
const animTitle = new animHeader(elementMod);
animTitle.animation();