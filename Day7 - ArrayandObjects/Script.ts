let subjects = ["Tamil", "English", "Hindi"];
console.log(subjects);
var studentID =Array(20, 30 , 40 , 50);
console.log(studentID);
let managers: (string|number)[]
managers = ["Lead", 34, "QA", "STE"];
console.log(managers);
let arr3 = new Array(10, 20 , 30 );
console.log(arr3);

//NestedArray
let nestedarr : (String|number) [][];
nestedarr = [["Anaya"],[340],["Keerthi"]];
console.log(nestedarr);

//Object
let obj : {
    project : string;
    prjID : number;
    status : boolean;
    isprjdone : string;
    address : {
      PermanentAddress : {
        street: String|number
      };
    }
};

obj = {
    project : "BKU",
    prjID : 450,
    status : true,
    isprjdone : "Completed",
    address: {
        PermanentAddress : {
            street : "80th Aameena nagar",
        }
    }
}
console.log(obj);
console.log(obj.address.PermanentAddress.street);
