"use strict";

let randomWords = ["lorem","lorem2","lorem3"];

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

pickRandomWord(randomWords);

