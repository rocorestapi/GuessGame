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

shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
