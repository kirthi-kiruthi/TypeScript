"use strict";
function projecttype() {
    let testedby = "SQA";
    let duration = "45days";
    let deadline = "testedby" + "duration";
    return deadline;
}
let res = projecttype();
console.log(res);
// function projecttype () {
//     let duration = "45days"
//     let deadline = "testedBy" - "Duration"
//     return deadline
// }
// let res = projecttype() 
// console.log(res)  // No result it will throw errror.
//Functions:
//1.Named function
//2.Ananoyumus fuction
//3.Function Expression
//4.IIFE function
//5.Arrow function
//6.Higher Order function
//7.Callback Function
function calfruits() {
    let a = "Apple";
    let b = "Orange";
    let c = ["Strawberry", "Plum", "Rambutan"];
    let d = a + " " + b + "," + c;
    return d;
}
let res2 = calfruits();
console.log(res2);
