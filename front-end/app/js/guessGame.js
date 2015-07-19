/**
 * Created by ronald correa on 7/14/2015.
 */

var shuffleMatrixTest = require('./shuffleMatrix.js');

Array.prototype.equals = function (array, strict) {
    if (!array)
        return false;

    if (arguments.length == 1)
        strict = true;

    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i], strict))
                return false;
        }
        else if (strict && this[i] != array[i]) {
            return false;
        }
        else if (!strict) {
            return this.sort().equals(array.sort(), true);
        }
    }
    return true;
}


var baseMatrix = [
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"],
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"]
];

var baseMatrixX = [
    ["X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X"]
];

var showLetterBaseMatrixX = function(x, y, baseMatrix, baseMatrixX)
{
    //console.log("CHAR: "+baseMatrix[Number(x)][Number(y)]);
    baseMatrixX[Number(x)][Number(y)] = baseMatrix[Number(x)][Number(y)];
    //console.log(baseMatrixX);
    return baseMatrixX;
}
var guessBaseMatrixTwoCoord = function(x0, y0, x1, y1, baseMatrix, baseMatrixX)
{
    //console.log("CHAR: "+baseMatrix[Number(x)][Number(y)]);
    baseMatrixX[Number(x)][Number(y)] = baseMatrix[Number(x)][Number(y)];
    //console.log(baseMatrixX);
    return baseMatrixX;
}

var revertBaseMatrixToX = function(x0, y0, x1, y1, baseMatrixX)
{
    //TODO, check out of array
    //console.log("CHAR: "+baseMatrix[Number(x)][Number(y)]);
    baseMatrixX[Number(x0)][Number(y0)] = "X";
    baseMatrixX[Number(x1)][Number(y1)] = "X";
    //console.log(baseMatrixX);
    return baseMatrixX;
}


var getValue = function(x, y, baseMatrix)
{
    var value = "";
    value = baseMatrix[Number(x)][Number(y)];

    console.log("VALUE: "+ value);
    return value;
}

var baseMatrixShuffled = shuffleMatrixTest.shuffleMatrixBase(baseMatrix);
shuffleMatrixTest.displayMatrixConsole(baseMatrixShuffled);
shuffleMatrixTest.displayMatrixConsole(baseMatrixX);

//var baseMatrixGuessed = guessBaseMatrixOneCoord(2, 3, baseMatrixShuffled, baseMatrixX);
//shuffleMatrixTest.displayMatrixConsole(baseMatrixGuessed);

//getValue(3,7,baseMatrixShuffled);
/*
var showGameOption = function()
{
    console.log("\t\t\t1 - Re-start the Game");
    console.log("\t\t\t2 - End the game");
    console.log("\t\t\t3 - Go main menu");
}*/
/*
var displayCoord = function (firstCoord, secondCoord, baseMatrix)
{
    for (var i = 0; i< baseMatrix.length; i++)
    {
        for (var j = 0; j< baseMatrix.length; j++)
        {

        }

    }

}

var checkGuess = function (firstCoord, secondCoord, baseMatrix)
{
    for (var i = 0; i< baseMatrix.length; i++)
    {
        for (var j = 0; j< baseMatrix.length; j++)
        {

        }

    }

}

    */

function randomIntInc (low, high)
{
    return Math.floor(Math.random() * (high - low + 1) + low);
}

/*
// WORKING FINE, DONOT TOUCH

var baseMatrixGuessed = [[]];
var x = randomIntInc(0,3);
var y = randomIntInc(0,7);
var contador = 0;

do
{
    baseMatrixX = guessBaseMatrix(x, y, baseMatrixShuffled, baseMatrixX);
    var x = randomIntInc(0,3);
    var y = randomIntInc(0,7);
    console.log("))))))))))))))))))))))))))))))))))+++++++++++++++++++++=-");
    shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
    //contador++;
} while(!baseMatrixX.equals(baseMatrixShuffled));
//} while(contador<300);
*/

var baseMatrixGuessed = [[]];
var x0 = randomIntInc(0,3);
var y0 = randomIntInc(0,7);
var x1 = randomIntInc(0,3);
var y1 = randomIntInc(0,7);

var contador = 0;

do
{
    baseMatrixX = guessBaseMatrixOneCoord(x, y, baseMatrixShuffled, baseMatrixX);
    x0 = randomIntInc(0,3);
    y0 = randomIntInc(0,7);
    x1 = randomIntInc(0,3);
    y1 = randomIntInc(0,7);
    console.log("))))))))))))))))))))))))))))))))))+++++++++++++++++++++=-");
    shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
    //contador++;
} while(!baseMatrixX.equals(baseMatrixShuffled));
//} while(contador<300);

shuffleMatrixTest.displayMatrixConsole(baseMatrixShuffled);


//console.log("equals: " +baseMatrixShuffled.equals(baseMatrixShuffled));