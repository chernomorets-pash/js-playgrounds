"use strict";

// console.log("Before conditional")
// let random = Math.random();
// if (random < 0.5){
//     console.log("Less then 0.5");
    
// }
// else {
//     console.log("Your number is EQUAL of GRETHAER then 0.5")
// }
// console.log(random);

// const dayOfWeek = prompt("Enter the day").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("Ой! Снова Понедельник :(")
// } else if (dayOfWeek === "saturday") {
//     console.log("А вот и Суббота, Ура! :)")
// } else if (dayOfWeek === "friday") {
//     console.log("Fridays are Great!")
// } else {
//     console.log ("MEH")
// }

// const age = 69;

// if (age < 5 ){
//     console.log("You are Baby - FREE for you")
// } else if (age < 10) {
//     console.log ("You are a child, 10$")
// } else if (age <65) {
//     console.log("You are Adult, Proce: 20$")
// } else if (age > 65) {
//     console.log ("You are Pensioner, Price is 10$")
// } 

// const password = prompt ("Plese, enter new password");

// //password must be 6+ characters 
// if (password.length >= 6) {
// //password must noy include any spaces
//     if (password.indexOf(" ") == -1) {
//         console.log ("Password is VALID");
//     } else {
//     console.log ("Password is too shore, it must be min 6 Characters")
// }
// }else {
//     console.log("Too short")
// }

// && And

// const password = prompt("Eneter Pass");
// if (password.length >=6 && password.indexOf(' ') === -1) {
//     console.log ("Valid password")
// }else {
//     console.log ('Your password is too shoret of contains spaces')
// }

// || Or

// 0 -5 FREE
// 5 -10 10$
// 10 - 65 $20
//>65 - FREE

// const age = 1 0;
// if (age >= 0 && age < 5 || age >=65){
//     console.log("FREE");
// } else if (age >=5 && < 10) {
//     console.log("10$")
// } else if (age <65) {
//     console.log ("20$")
// } 

// const user = {firstName: 'Mick', lastName: 'Jagger'}
// const user1 = {firstName: "Mickak", lastName: "Jacksoon"}




//LOOPS
// for (let i = 100; i>=0; i -= 10) {
//     console.log(i);
// }


// for (let i = 0; i<=10; i ++) {
//     console.log(i);
// }

// let age = 13;
// let accompanied = false;
// if (age >= 12 || accompanied === true) {
//     console.log("Ok")
// } else {
//     console.log("Not")
// }
//  let arrey = [];


//Построить алгоритм, который    будет выдавать случайный
//номер елемента из массива, и выводить его на экран

// let massive = ["element1","element2","element3","element4","element5","element6"];
// let randomElement = (Math.floor(Math.random() * massive.length));
// console.log("Random element from massive:")
// console.log(massive[randomElement]);
// console.log("Random element from massive - shorter:")
// console.log(massive[Math.floor(Math.random() * massive.length)]);
















// let partA = ["Хорошо бы", "Тебе обязательно", "Думаю не стоит", "Без разговоров",];
// let partB = [" закатать"," сожрать"," не парится и изучить"," приготовить"];
// let partC = [" бульйончик"," суп"," кортошечку"," сосисочки в тесте"];
// let partD = [" из квашеной капусты", " под соусом бешамель", " притрушенные кукурузной мукой", " свареные в собствунном соку"];
// let randomA = (Math.floor(Math.random() * partA.length));
// let randomB = (Math.floor(Math.random() * partB.length));
// let randomC = (Math.floor(Math.random()* partC.length));
// let randomD = (Math.floor(Math.random() * partD.length));
// console.log(partA[randomA] + partB[randomB] + partC[randomC] + partD[randomD]);

// let name = "Paul";
// if (name === "Paul") {
//     console.log("Hello, Me!")
// }else {
//     console.log("Hello, stranger!")
// }

// let sheepCounted = 0;
// while (sheepCounted <= 10 ) {
//     console.log("Counted sheeps: " +sheepCounted + "!");
//     sheepCounted++;
// } 
// console.log("ZzzzzZzzzZzzzz...");

// let animals = ["Tiger", "Lion", "Cat", "Hipopotamos", "Geraffee"];
// for (let i=0; i < animals.length; i++) {
//     console.log("In out Zoo we have " + animals[i] + "!")
// }

// for (let x = 3; x < 10000; x =x * 3){
//     console.log(x);
// }

// let x = 3;
// while (x < 10000){
//     console.log(x = x * 3);
// }

// let animals = ["Cat", "Fish", "Lepard", "Comadian Varan"];
// for (let i=0; i <= animals.length; i++){
//     console.log(animals[i] + " - beautiful creature")
// }


// console.log('heloo');
// //My alphabet 
// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// // Generator of random number from 0 - .lenght of alphabet
// let randomString = Math.floor(Math.random() * alphabet.length)
// let myAlphabet = [];
// console.log(myAlphabet)
// while (myAlphabet < 5) {
//     let randomString = Math.floor(Math.random() * alphabet.length)
//     console.log(myAlphabet = myAlphabet[randomString])
// }
// console.log(myAlphabet)


// console.log(' Nested Loops - Вложенные циклы')
// for ( let i = 1; i <= 10; i++){
//     console.log(`i is: ${i}`)
//     for (let j = 2; j <= 5; j++){
//         console.log(`    j is: ${j}`)
//     }
// }


// let students = [
//     ["Man1","Man2","Man3","Man4"],
//     ["Man5","Man6","Man7","Man8"],
//     ["Man9","Man10","Man11","Man12"],
// ] 

// for (let i = 0; i<= students.length; i++){
//      const row = students[i];
//      console.log (`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++);

// }

// let sayHelloTo = function (name) {
//     console.log ("Hello " + name)
// };

let pickRandomWord = function