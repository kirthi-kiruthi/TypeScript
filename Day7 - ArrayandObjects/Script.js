"use strict";
let subjects = ["Tamil", "English", "Hindi"];
console.log(subjects);
var studentID = Array(20, 30, 40, 50);
console.log(studentID);
let managers;
managers = ["Lead", 34, "QA", "STE"];
console.log(managers);
let arr3 = new Array(10, 20, 30);
console.log(arr3);
let nestedarr;
nestedarr = [["Anaya"], [340], ["Keerthi"]];
console.log(nestedarr);
//Object
let obj;
obj = {
    project: "BKU",
    prjID: 450,
    status: true,
    isprjdone: "Completed",
    address: {
        PermanentAddress: {
            street: "80th Aameena nagar",
        }
    }
};
console.log(obj);
console.log(obj.address.PermanentAddress.street);
