"use strict";
//Type and Interfernce
let empdata;
let empdata1 = {
    empname: "BKU",
    empID: 450,
    empstatus: true,
    isempworking: "yes",
    empskills: {
        skills: "java,python,SQL",
    }
};
console.log(empdata1);
console.log(empdata1.empskills);
let empdata2 = {
    empname: "BKUtest",
    empID: 550,
    empstatus: false,
    isempworking: "yes",
};
console.log(empdata2);
console.log(empdata2);
let student1 = {
    studentname: "kiruthika",
    studentIdtype: String,
    IdNumber: 793,
    studentworking: true,
    companyname: {
        company: "Indium",
        companyAddress: {
            street: "KVR Street",
            Area: "Chennai",
            pincode: 605602
        }
    }
};
console.log(student1);
console.log(student1.companyname);
console.log(student1.companyname.companyAddress);
console.log(student1.companyname.companyAddress.street);
//array inside Object
let arrofemp1 = {
    arrofsections: ["labour", "header", "service"],
    arrofskills: ["Javascript123", "python"],
};
console.log(arrofemp1);
console.log(arrofemp1.arrofsections);
console.log(arrofemp1.arrofskills);
let arrofStudents = {
    empID: 793,
    empname: "KIRUTHIKA",
    address: {
        PermanentAddress: {
            streetname: "OSCAR NAGAR",
            pin: 88888,
            city: "CHENNAI",
            state: "Tamilnadu",
        },
        communicationAddress: {
            Streetname: "Annanagar",
            pin: 605602,
            city: "Chennai",
            state: "Tamilnadu",
        }
    }
};
console.log(arrofStudents);
