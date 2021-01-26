"use strict";

let mainHeadingElement = document.getElementById("main");
let headingElements = document.getElementsByClassName("h-class")
console.log(mainHeadingElement);

let newMainHeadingElement = prompt ("Please, endter a ned H1 Test: ");
// mainHeadingElement.innerHTML = newMainHeadingElement;

// let newHeadingElements = prompt ("Enter H2 elements text with class h-class: ");
// headingElements.innerHTML = newHeadingElements; 

$("#main").text(newMainHeadingElement);