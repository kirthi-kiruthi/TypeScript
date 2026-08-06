//Let 

let a = 10
console.log(a)

let ArrofData =["Kiruthika","Annaya", "Murugan"]; //String
console.log(ArrofData);

let ArrOfUsers= ["0.00","0.99","0.88"]; //decimals
console.log(ArrOfUsers);

let Arrofclass = [12,23,24];//numbers
console.log(Arrofclass);

let ArrofJob = ['True', 'False'];//boolean
console.log(ArrofJob);
export {};

//Const --> Any value assigned to const will be the type of the constant.
// Value itself become the type.

const Gender1= "Male";
console.log(Gender1);

const gender: string = "Female";
console.log(gender);

const pincode: Number = 605602;
console.log(pincode);

const injob: boolean = true;
console.log(injob);

//Type Annotations:

let student : {
    name : string;
    studentID : number;
    course : string | number;
}

student = {
    name : "Ananya",
    studentID : 973,
    course : "Typescript",
}
console.log(student);

export {};

let arrofrelatives : (String | null| undefined| boolean)[];
//arrofrelatives = ["kirthi", "ananya", "nisha"];
arrofrelatives = ["null", "undefined",'true'];
console.log(arrofrelatives);

let arrof2user : {
    name : string;
    age : number;
    course : string | number}[];

arrof2user = [{name: "kirthi ", age:34, course :"typescipt"}];
console.log(arrof2user);


//literal type 
let status =  "approved"| "pending"|"rejected";
status = "approved";
console.log(status);
status = "Completed"; //







