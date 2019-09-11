var rlSync = require('readline-sync');

let str1: string = rlSync.question('Whats your name!?!?!');

let a: number = rlSync.questionInt("Number 1: ");
let b: number = rlSync.questionInt("Number 2: ");

console.log("Welcome: " + str1);
console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Remainder: ", a % b);