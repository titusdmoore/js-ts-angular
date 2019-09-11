"use strict";
var rlSync = require('readline-sync');
function rNum() {
    return Math.floor(Math.random() * Math.floor(101));
}
console.log("Shall we play a game? [y]/[n]");
var play = rlSync.question("> ");
while (play.toLowerCase() == 'y') {
    var a = rNum();
    console.log("Welcome to Random Number Guessing Game. Pick a number between 0 and 100");
    console.log(a);
    var g = -1;
    var count = 0;
    while (g !== a) {
        console.log("Enter your guess");
        g = rlSync.questionInt("> ");
        if (a !== g) {
            var diff = a - g;
            // Check Low
            if (diff > 10 && diff < 20) {
                console.log("A little Low!");
            }
            else if (diff <= 10) {
                console.log("Just Below!");
            }
            else if (diff >= 20 && diff < 40) {
                console.log("Getting Too Low!");
            }
            else if (diff >= 40) {
                console.log("Too Low!");
            }
            // Check High
            if (diff < 0) {
                if (diff > -10 && diff < -20) {
                    console.log("A little High!");
                }
                else if (diff <= -10) {
                    console.log("Just High!");
                }
                else if (diff >= -20 && diff < -40) {
                    console.log("Getting Too High!");
                }
                else if (diff >= -40) {
                    console.log("Too High!");
                }
            }
        }
        count++;
        if (count === 10) {
            g = 999;
            a = 999;
        }
    }
    if (a === g && a !== 999) {
        console.log("You Got It!! The number was " + a + " and you guessed " + g + " in " + count + " guesses");
        console.log("Play again? [y]/[n]");
        play = rlSync.question("> ");
    }
    else if (count > 10) {
        console.log("You have failed to guess it in 10 tries");
        console.log("Play again? [y]/[n]");
        play = rlSync.question("> ");
    }
}
