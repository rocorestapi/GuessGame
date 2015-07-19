/*
* MAIN CLASS
* */

/*
 * MAIN CLASS
 * */



var shuffleMatrixTest = require('./shuffleMatrix.js');

var regexImputCoord = /^[0-7][0-7]$/;

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



var coordMatched = [];
var coordMatchedAux = [];

var revertBaseMatrix = function(x0, y0, x1, y1, baseMatrixX)
{
    //TODO, check out of array
    //console.log("CHAR: "+baseMatrix[Number(x)][Number(y)]);
    baseMatrixX[Number(x0)][Number(y0)] = "X";
    baseMatrixX[Number(x1)][Number(y1)] = "X";
    //console.log(baseMatrixX);
    return baseMatrixX;
}

/*
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


 var baseMatrix = [
 ["A", "B", "C"],
 ["D", "E", "F"],
 ["A", "B", "C"],
 ["D", "E", "F"]
 ];

 var baseMatrixX = [
 ["X", "X", "X"],
 ["X", "X", "X"],
 ["X", "X", "X"],
 ["X", "X", "X"]
 ];
 */

var baseMatrix = [
    ["A", "B"],
    ["A", "B"]
];

var baseMatrixX = [
    ["X", "X"],
    ["X", "X"]
];

var baseMatrixXAux = [
    ["X", "X"],
    ["X", "X"]
];


var showLetterBaseMatrixX = function(x, y, baseMatrix, baseMatrixX)
{
    //console.log("CHAR: "+baseMatrix[Number(x)][Number(y)]);
    baseMatrixX[Number(x)][Number(y)] = baseMatrix[Number(x)][Number(y)];
    //console.log(baseMatrixX);
    return baseMatrixX;
}


var getLetterBaseMatrix = function(x, y, baseMatrix)
{
    var letter = baseMatrix[Number(x)][Number(y)];
    return letter;
}

var clearScreen = function()
{
    process.stdout.write("\u001b[2J\u001b[0;0H");
}
var startGame = function(baseMatrix)
{
    showMainOption();
    var shuffledBaseMatrix  = shuffleMatrixTest.shuffleMatrixBase(baseMatrix);
    readImputMain(shuffledBaseMatrix);
}

var showMainOption = function()
{
    console.log("");
    console.log("\t====================================================");
    console.log("");
    console.log("\t\t\t1 - Start new Game");
    console.log("\t\t\t2 - Exit");
    console.log("");
    console.log("\t====================================================");
    console.log("");
    console.log("");
}

var showGameOption = function()
{

    console.log("");
    console.log("\t\t\t1 - Re-start the Game");
    console.log("\t\t\t2 - Show the game");
    console.log("\t\t\t3 - Go main menu");
    console.log("\t\t\t4 - Exit");
    console.log("");

}


var readImputMain = function(shuffledBaseMatrix)
{
    var baseMatrixX = [
        ["X", "X"],
        ["X", "X"]
    ];

    var startGameFlag = false;
    var readlineMain = require('readline');
    var rlMain = readlineMain.createInterface({
        input: process.stdin,
        output: process.stdout,
        //terminal: false,
        //hidden: true
    });
    rlMain.prompt();
    var prefix = 'Main> ';

    rlMain.on('line', function (line)
    {
        switch (line.trim())
        {
            case '1':
                clearScreen();
                shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
                startGameFlag = true;
                rlMain.close();
                break;
            case '2':
                console.log('Bye!!');
                process.exit(0);
                break;
            default:
                console.log('Wrong value, try again!!');
                //prefix = 'Main> ';
                break;
        }
        if(!startGameFlag)
        {
            rlMain.setPrompt(prefix, prefix.length);
        }

    }).on('close', function () {

        showGameOption();
        readImputGame(true, shuffledBaseMatrix, baseMatrixX);
    });

    rlMain.setPrompt(prefix  + 'Enter the option: ', prefix.length);
    rlMain.prompt();
}


var readImputGame = function(gameInProgress, shuffledBaseMatrix, baseMatrixX)
{
    var baseMatrixXAux = [
        ["X", "X"],
        ["X", "X"]
    ];

    var firstCoordGot = false;
    var secondCoordGot = false;

    var coordX0 = null;
    var coordY0 = null;
    var coordX1 = null;
    var coordY1 = null;
    var gameInProgress = gameInProgress;

    var readlineGame = require('readline');
    var rlGame = readlineGame.createInterface(process.stdin, process.stdout);
    var prefix = 'Game:'+gameInProgress+'> ';

    rlGame.on('line', function (line)
    {
        switch (line.trim())
        {
            case '1':
                clearScreen();
                gameInProgress = true;
                shuffledBaseMatrix  = shuffleMatrixTest.shuffleMatrixBase(shuffledBaseMatrix);
                //TODO here with new matrix XXX
                baseMatrixX = baseMatrixXAux;
                shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
                showGameOption();
                prefix = 'Game:'+gameInProgress+'> Enter the FIRST coordinate ie. ##: ';
                break;
            case '2':
                clearScreen();
                gameInProgress = false;
                shuffleMatrixTest.displayMatrixConsole(shuffledBaseMatrix);
                showGameOption();
                prefix = 'Game: '+gameInProgress+'> Enter the option: ';
                break;
            case '3':
                clearScreen();
                gameInProgress = false;
                var prefix = 'Main> Enter the option: ';
                rlGame.close();
                break;
            case '4':
                console.log('Bye!!');
                process.exit(0);
                break;
            default:
                if(gameInProgress)
                {
                    if(regexImputCoord.test(line.trim()))
                    {
                            if (!firstCoordGot)
                            {
                                if(coordMatchedAux.indexOf(line.trim()) > -1)
                                {
                                    clearScreen();
                                    shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
                                    console.log("\nCoord. already entered, try other one!\n");
                                    showGameOption();
                                }
                                else
                                {
                                    coordX0 = line.trim()[0];
                                    coordY0 = line.trim()[1];
                                    firstCoordGot = true;
                                    clearScreen();
                                    baseMatrixX = showLetterBaseMatrixX(coordX0, coordY0, shuffledBaseMatrix, baseMatrixX);
                                    shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
                                    showGameOption();

                                    prefix = 'Game: ' + gameInProgress + '> Enter the SECOND coordinate ie. ##:';
                                }
                                prefix = 'Game: ' + gameInProgress + '> Enter the FIRST coordinate ie. ##:';
                            }
                            else if (!secondCoordGot) {
                                coordX1 = line.trim()[0];
                                coordY1 = line.trim()[1];
                                firstCoordGot = false;

                                clearScreen();
                                baseMatrixX = showLetterBaseMatrixX(coordX1, coordY1, shuffledBaseMatrix, baseMatrixX);
                                shuffleMatrixTest.displayMatrixConsole(baseMatrixX);

                                var firstLetter = getLetterBaseMatrix(coordX0, coordY0, shuffledBaseMatrix);
                                var secondLetter = getLetterBaseMatrix(coordX1, coordY1, shuffledBaseMatrix);
                                if (firstLetter != secondLetter) {
                                    baseMatrixX = revertBaseMatrix(coordX0, coordY0, coordX1, coordY1, baseMatrixX);
                                    console.log("\n\tCAGAMOS, INTENAT");
                                }
                                else {
                                    coordMatchedAux[coordMatchedAux.length] = coordX0 + coordY0;
                                    coordMatchedAux[coordMatchedAux.length] = line;
                                    console.log("\n\tMuy BINE, pudiste UNO = " + coordMatchedAux);

                                    if (shuffledBaseMatrix.equals(baseMatrixX)) {
                                        gameInProgress = false;
                                        coordMatchedAux = [];
                                        console.log("GANASTE GANASTE GANASTE!!!!!!");
                                    }

                                }
                                showGameOption();
                                if (!gameInProgress) {
                                    prefix = 'Game: ' + gameInProgress + '> Enter the option:';
                                }
                                else {
                                    prefix = 'Game: ' + gameInProgress + '> Enter the FIRST coordinate ie. ##:';
                                }
                            }
                    }
                    else
                    {
                        clearScreen();
                        shuffleMatrixTest.displayMatrixConsole(baseMatrixX);
                        showGameOption();
                        console.log('\nWrong coordinate value, try again ie. \'05\'.\n');
                        if(firstCoordGot)
                        {
                            prefix = 'Game: '+gameInProgress+'> Enter the SECOND coordinate ie. ##:';
                        }
                        else
                        {
                            prefix = 'Game: '+gameInProgress+'> Enter the FIRST coordinate ie. ##:';
                        }

                    }
                }
                else
                {
                    console.log('Wrong option, try again.');
                }
                break;
        }
        rlGame.setPrompt(prefix, prefix.length);
        rlGame.prompt();

    }).on('close', function () {
        showMainOption();
        readImputMain();
    });

    if(!firstCoordGot)
    {
        rlGame.setPrompt(prefix+'Enter the FIRST coordinate ie. ##: ', prefix.length);
        rlGame.prompt();

    }
    else {
        rlGame.setPrompt(prefix + 'Enter the SECOND coordinate ie. ##: ', prefix.length);
        rlGame.prompt();
    }
}

startGame(baseMatrix);


