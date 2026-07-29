// Interview - Type Annotation

// Interview - Type interfernce

// "Any" data type

let user:any[] = ["Kiruthika", 20 , null , true, undefined, 1232342543546757878n, 987676.7656];
console.log(user);

//Objects:

//It is a non primitive data type.

let project: {
    Projectname : String;
    Projectnumber : number;
    Projectstarteddate : object;
    Projectenddate : object | string;
    Projectcompleted : boolean;
}
project = {
    Projectname : "Qspiders",
    Projectnumber : 3793,
    Projectstarteddate : new Date(),
    Projectenddate : new Date().toDateString(),
    Projectcompleted : true,
}
console.log(typeof project);
console.log(project);

let projectlead : string = "Amarjeet";
project.projectlead = "Amarjeet";
console.log(project);
export{}
