//Function all these are named function

// function projecttype () {
//     let testedby = "SQA";
//     let duration = "45days";
//     let deadline = "testedby" + "duration";
//     return deadline;
// }
// let res = projecttype();
// console.log(res);

// // function projecttype () {
// //     let duration = "45days"
// //     let deadline = "testedBy" - "Duration"
// //     return deadline
// // }
// // let res = projecttype() 
// // console.log(res)  // No result it will throw errror.

// //Functions:
// //1.Named function
// //2.Ananoyumus fuction
// //3.Function Expression
// //4.IIFE function
// //5.Arrow function
// //6.Higher Order function
// //7.Callback Function

// function calfruits (): string {
//     let a = "Apple";
//     let b = "Orange";
//     let c = ["Strawberry", "Plum", "Rambutan"];
//     let d = a + " "+ b + ","+ c;
//     return d;
// }
// let res2 = calfruits();
// console.log(res2);

//we can define function in type (=>)

//Type Function

// type Function = {
//     (a: string , b: string , c: number): string | number ;
// };

// let Sumofstrings: Function = function(a, b, c){
//      return a*b*c;
// };

// let data = Sumofstrings("Kiruthika", "Murugan" , 21)
// console.log (data);

type FunctionType = {
    (a: number,b: number,c: string): number |string
}

let sumOfNums: FunctionType  = function(a, b, c) {
    return a + b + c
}

let data = sumOfNums(23, 44, "Kiruthika")
console.log(data)


//Function Expression:

let mycompany = function (a : number , b : number)
{ 
    console.log ("This is function expression");
    return a + b;
}
let data1 = mycompany(23, 1233445);
console.log(data1);



//Sample program 

type trainer = { 
   ( a : string , b : string) : string;
}
let qspiders : trainer = function (a,b)
{
    return a + b;
};
let data2 = qspiders ("Amarjeet" , "Kumar");
console.log(data2);

//IIFE Function

//Syntax : (declaration)(exceution)
(function(a : number , b : string){
    console.log("This is Typescript class");
    console.log(a + b);
})(8.655656456 , "kiruthika");
