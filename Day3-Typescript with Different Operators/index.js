// Interview - Type Annotation
// Interview - Type interfernce
// "Any" data type
let user = ["Kiruthika", 20, null, true, undefined, 1232342543546757878n, 987676.7656];
console.log(user);
//Objects:
//It is a non primitive data type.
let project;
project = {
    Projectname: "Qspiders",
    Projectnumber: 3793,
    Projectstarteddate: new Date(),
    Projectenddate: new Date().toDateString(),
    Projectcompleted: true,
};
console.log(typeof project);
console.log(project);
let projectlead = "Amarjeet";
project.projectlead = "Amarjeet";
console.log(project);
export {};
