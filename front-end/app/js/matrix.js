var shuffleMatrixTest = require('./shuffleMatrix.js');

/*
 * MAIN CLASS
 * */

//Show options
//var readline = require('readline');



var baseMatrix = [
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"],
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"]
];

shuffleMatrixTest.displayMatrixConsoleX(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));

var showGameOption = function()
{
    console.log("\t\t\t1 - Re-start the Game");
    console.log("\t\t\t2 - End the game");
    console.log("\t\t\t3 - Go main menu");
}