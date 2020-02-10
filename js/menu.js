function myFunction(x) {
    x.classList.toggle("change");
    var element = document.querySelector("nav");
    element.classList.toggle("nav-height");
    var elementUl = document.querySelector("ul");
    elementUl.classList.toggle("ul-opacity");
}  