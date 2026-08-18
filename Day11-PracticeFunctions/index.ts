//TYPE Function

type typescript1 = {
    (username : string , userid: number , userjob: string): string | number
};

let employee : typescript1 = function (username, userid, userjob)
{
    console.log("This is type function");
    return username + userid + userjob;
    //console.log("This is type function");
}
let empdetails = employee ("kiruthika", 793 , "Automation Tester")
console.log(empdetails);

//find number of "A" in a particular word

let username = "Kiruthikaa"
function countinname (username: string): number
{
 let count:number  = 0;
 for (let  i = 0 ; i <username.length ; i++)
    {
    if (username[i]== "a"){
    count += 1;
    }
 }
return count;
}
let countOfA = countinname ("Kiruthikaa");
console.log(countOfA);

//Check Palindrom for "Racecar"

function isplalindrome(word: string): boolean 
{
let str = "";
for (let i = word.length - 1; i >=0; i--){
    str = str + word[i];
}
console.log(str);
if (str === word)
    {
    return true;
}
else 
{
    return false;
}}
let palindRes = isplalindrome("Malayalam");
console.log(palindRes);