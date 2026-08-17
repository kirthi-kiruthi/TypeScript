"use strict";
//Function all these are named function
let sumOfNums = function (a, b, c) {
    return a + b + c;
};
let data = sumOfNums(23, 44, "Kiruthika");
console.log(data);
//Function Expression:
let mycompany = function (a, b) {
    console.log("This is function expression");
    return a + b;
};
let data1 = mycompany(23, 1233445);
console.log(data1);
let qspiders = function (a, b) {
    return a + b;
};
let data2 = qspiders("Amarjeet", "Kumar");
console.log(data2);
//IIFE Function
//Syntax : (declaration)(exceution)
(function (a, b) {
    console.log("This is Typescript class");
    console.log(a + b);
})(8.655656456, "kiruthika");
