"use strict";
var rlSync = require('readline-sync');
var a = rlSync.questionInt("Enter Number: ");
var i = a;
var f = 1;
while (i > 0) {
    f = f * i;
    i--;
}
console.log("Factorial is: ", f);
