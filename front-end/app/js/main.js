/*
 * MAIN CLASS
 * */

var colors = require('colors');
var ShuffleMatrix = require('./shuffleMatrix.js');
var Util = require('./utils.js');
var MatrixOperation = require('./matrix.js');
var Menu = require('./showMenu.js');

var utilIns = new Util();
var shuffleMatrixIns = new ShuffleMatrix();
var matrixOperationInst = new MatrixOperation();
var menu = new Menu();

Array.prototype.equals = function (array, strict)
{
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

var baseMatrixXAux = [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", "X"]
];

var readImputMain = function(shuffledBaseMatrix)
{
    var startGameFlag = false;
    var readlineMain = require('readline');
    var rlMain = readlineMain.createInterface({
        input: process.stdin,
        output: process.stdout,
        //terminal: false,
        //hidden: true
    });
    rlMain.prompt();
    var prefix = 'Main> Enter the option: ';

    rlMain.on('line', function (line)
    {
        switch (line.trim())
        {
            case '1':
                utilIns.clearScreen();
                matrixOperationInst.displayMatrixConsole(baseMatrixX);
                startGameFlag = true;
                rlMain.close();
                break;
            case '2':
                console.log('Bye!!');
                process.exit(0);
                break;
            default:
                console.log('Wrong value, try again!!');
//                prefix = 'Main> Enter the option: ';
                break;
        }
        if(!startGameFlag)
        {
            rlMain.setPrompt(prefix, prefix.length);
        }

    }).on('close', function () {

        menu.showGameOption();
        readImputGame(true, shuffledBaseMatrix);
    });

    rlMain.setPrompt(prefix, prefix.length);
    rlMain.prompt();
}

var readImputGame = function(gameInProgress, shuffledBaseMatrix)
{
    var baseMatrixX = [
        ["X", "X", "X"],
        ["X", "X", "X"],
        ["X", "X", "X"],
        ["X", "X", "X"]
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
                utilIns.clearScreen();
                gameInProgress = true;
                shuffledBaseMatrix  = shuffleMatrixIns.shuffleMatrixBase(shuffledBaseMatrix);
                //TODO here wiuth new matrix XXX
                baseMatrixX = baseMatrixXAux;
                matrixOperationInst.displayMatrixConsole(baseMatrixX);
                menu.showGameOption();
                prefix = 'Game:'+gameInProgress+'> Enter the FIRST coordinate ie. ##: ';
                break;
            case '2':
                utilIns.clearScreen();
                gameInProgress = false;
                matrixOperationInst.displayMatrixConsole(shuffledBaseMatrix);
                menu.showGameOption();
                prefix = 'Game: '+gameInProgress+'> Enter the option: ';
                break;
            case '3':
                utilIns.clearScreen();
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
                    if(utilIns.regexImputCoord.test(line.trim()))
                    {
                        if(!firstCoordGot) {
                            if (coordMatchedAux.indexOf(line.trim()) > -1) {
                                utilIns.clearScreen();
                                matrixOperationInst.displayMatrixConsole(baseMatrixX);
                                console.log("\nCoord. already entered, try other one!\n");
                                menu.showGameOption();
                            }
                            else
                            {
                                coordX0 = line.trim()[0];
                                coordY0 = line.trim()[1];
                                firstCoordGot = true;

                                utilIns.clearScreen();
                                baseMatrixX = matrixOperationInst.showLetterBaseMatrixX(coordX0, coordY0, shuffledBaseMatrix, baseMatrixX);
                                matrixOperationInst.displayMatrixConsole(baseMatrixX);
                                menu.showGameOption();
                            }
                            prefix = 'Game: '+gameInProgress+'> Enter the SECOND coordinate ie. ##:';
                        }
                        else if(!secondCoordGot)
                        {
                            coordX1 = line.trim()[0];
                            coordY1 = line.trim()[1];
                            firstCoordGot =  false;

                            utilIns.clearScreen();
                            baseMatrixX = matrixOperationInst.showLetterBaseMatrixX(coordX1, coordY1,shuffledBaseMatrix, baseMatrixX);
                            matrixOperationInst.displayMatrixConsole(baseMatrixX);

                            var firstLetter = matrixOperationInst.getLetterBaseMatrix(coordX0, coordY0, shuffledBaseMatrix);
                            var secondLetter = matrixOperationInst.getLetterBaseMatrix(coordX1, coordY1, shuffledBaseMatrix);
                            if(firstLetter != secondLetter)
                            {
                                baseMatrixX = matrixOperationInst.revertBaseMatrix(coordX0, coordY0, coordX1, coordY1,baseMatrixX);
                                console.log(colors.red("\nThe letters do not match, try again!"));

                            }
                            else
                            {
                                coordMatchedAux[coordMatchedAux.length] = coordX0+coordY0;
                                coordMatchedAux[coordMatchedAux.length] = line;
                                console.log(colors.green("\nGood, you guessed one letter = "+coordMatchedAux));

                                if(shuffledBaseMatrix.equals(baseMatrixX))
                                {
                                    gameInProgress = false;
                                    coordMatchedAux = [];
                                    console.log(colors.green("YOU WIN, CONGRATULATIONS!!!!!"));

                                }

                            }
                            menu.showGameOption();
                            if(!gameInProgress) {
                                prefix = 'Game: ' + gameInProgress + '> Enter the option:';
                            }
                            else {
                                prefix = 'Game: ' + gameInProgress + '> Enter the FIRST coordinate ie. ##:';
                            }
                        }
                    }
                    else
                    {
                        utilIns.clearScreen();
                        matrixOperationInst.displayMatrixConsole(baseMatrixX);
                        menu.showGameOption();
                        console.log('\nWrong coordinate value, try again ie. \'01\'.\n');
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
        menu.showMainOption();
        readImputMain(shuffleMatrixIns.shuffleMatrixBase(baseMatrix));
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

var startGame = function(baseMatrix)
{
    menu.showMainOption();
    shuffledBaseMatrix  = shuffleMatrixIns.shuffleMatrixBase(baseMatrix);
    readImputMain(shuffledBaseMatrix);
}


startGame(baseMatrix);