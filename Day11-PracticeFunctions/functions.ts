//Anonoymus function:

let Maths = function()
{
    let Subject = "Mathematics";
    let Trainer = "Siva";
    console.log(Subject + Trainer);
    return Maths;
}
Maths();

//Arrow Function --> Synatx = ()=>

let welcome = (name: string ) : string => {
    return "Hello"+ name;
}
console.log(welcome);

let house = (fathername: string , mothername: string , sister : number) : string|number =>{
    return "Hi" + " " + fathername + " " + mothername + " " + sister;
}
let family = house("Murugan", "Vennila",12345 );
console.log(family)


//Higher order function and Callback function

let HOF = (multiply : Function) => 
{
let a = 6770;
multiply (a);
}

// let operation = (a*b*c);
// console.log(HOF)
HOF(function(a:number){
    let b: number = 5600
let c : number = 8900
    let operation = a*b*c
    console.log(operation);
    
})