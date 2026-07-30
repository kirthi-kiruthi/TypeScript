"use strict";
// //Add , Sub , Multiply , Divison , Reminder
// let user1:number = 20; // 470
// let user2:string = "Test"; //Test20 //Test20470
// let user3:boolean = true;
// let user4:number = 450;
// user2 += user1;
// user1 +=user4;
// console.log(user2 += user1);
// console.log (user1 +=user4);
// console.log (user4 -= user1);
// console.log (user4 /= user1);
// console.log (user4 %= user1);
// console.log (user1 *= user4);
// //AND opertors 
// //compare true values and false values 
// //falsely values are null, 0, undefined, "" , Nan
// //when conditions are given it gives results as true or false, if no conditions are given then it checks the true(like string , number) the values.
// let a:string = "Qspiders";
// let b:string = "test";
// let c:number = 300;
// let d:number = -900;
// let e:null = null;
// let f:undefined = undefined;
// let g:any  = 0;
// let res = a>b && b<a;
// let res1 = c && d;
// let res2 = e && f;
// let res3 = g && a;
// console.log (res);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log( a || c );// OR Operator
// console.log (1900 && 200 && "test");
// console.log (300 || "" || "Kirthi");
// //need to check output it is not generated for all print statements
// //short ciruiting in javascript  need to add definition
for (let i = 4; i >= 0; i--) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}
