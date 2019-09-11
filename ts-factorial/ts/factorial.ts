var rlSync = require('readline-sync');

let a: number = rlSync.questionInt("Enter Number: ");
let i: number = a;
let f: number = 1;

while(i > 0){
    f = f * i;
    i--;
}

console.log("Factorial is: ", f);