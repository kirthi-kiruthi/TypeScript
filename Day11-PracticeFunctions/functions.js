"use strict";
//Anonoymus function:
let Maths = function () {
    let Subject = "Mathematics";
    let Trainer = "Siva";
    console.log(Subject + Trainer);
    return Maths;
};
Maths();
//Arrow Function --> Synatx = ()=>
let welcome = (name) => {
    return "Hello" + name;
};
console.log(welcome);
let house = (fathername, mothername, sister) => {
    return "Hi" + " " + fathername + " " + mothername + " " + sister;
};
let family = house("Murugan", "Vennila", 12345);
console.log(family);
//Higher order function and Callback function
let HOF = (multiply) => {
    let a = 6770;
    multiply(a);
};
// let operation = (a*b*c);
// console.log(HOF)
HOF(function (a) {
    let b = 5600;
    let c = 8900;
    let operation = a * b * c;
    console.log(operation);
});
