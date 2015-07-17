/*
* MAIN CLASS
* */



var shuffleMatrixTest = require('./shuffleMatrix.js');

var regexImputCoord = /^[0-7][0-7]$/;

var baseMatrix = [
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"],
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"]
];


var clearScreen = function()
{
    process.stdout.write("\u001b[2J\u001b[0;0H");
}
var startGame = function(baseMatrix)
{
    showMainOption();
    readImputMain(baseMatrix);
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


var readImputMain = function()
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
            var prefix = 'Main> ';

            rlMain.on('line', function (line)
            {
                switch (line.trim())
                {
                    case '1':
                        clearScreen();
                        shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                        startGameFlag = true;
                        rlMain.close();
                        /*
                         //console.log('Starting new Game!...............');
                         shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                         //readImputGame();
                         prefix = '> Enter first coordinate ie. X,Y: ';
                         startGameFlag = true;
                         showGameOption();*/
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
        readImputGame(true);
    });

    rlMain.setPrompt(prefix  + 'Enter the option: ', prefix.length);
    rlMain.prompt();
}


var readImputGame = function(gameInProgress)
{
    var firstHit = false;
    var secondHit = false;

    var firstCoordGot = false;
    var secondCoordGot = false;

    var firstX0 = null;
    var firstY0 = null;
    var secondX1 = null;
    var secondY1 = null;
    var gameInProgress = gameInProgress;

    var counter = 0;
    var startGameAttempt = 0;

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
                shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                showGameOption();
                prefix = 'Game:'+gameInProgress+'> Enter the FIRST coordinate ie. ##: ';
                break;
            case '2':
                clearScreen();
                gameInProgress = false;
                shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                showGameOption();
                prefix = 'Game: '+gameInProgress+'> Enter the option: ';
                break;
            case '3':
                clearScreen();
                gameInProgress = false;
                //console.log('Going to main menu!');
                var prefix = 'Main> Enter the option: '; //Game:'+gameInProgress+'> ';
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
                        if(!firstCoordGot)
                        {
                            firstX0 = line.trim()[0];
                            firstY0 = line.trim()[1];
                            firstCoordGot =  true;

                            clearScreen();
                            shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                            showGameOption();

                            prefix = 'Game: '+gameInProgress+'> Enter the SECOND coordinate ie. ##:';

                        }
                        else if(!secondCoordGot)
                        {
                            secondX1 = line.trim()[0];
                            secondY1 = line.trim()[1];
                            firstCoordGot =  false;

//                            secondCoordGot =  true;

                            // CALLING control functions

                            clearScreen();
                            shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
                            showGameOption();
                            prefix = 'Game: '+gameInProgress+'> Enter the FIRST coordinate ie. ##:';
                            console.log('OKOKOKOKOKKK SECOND');

                        }
                    }
                    else
                    {
                        clearScreen();
                        shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
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
        //console.log('GAWEM GAME GAME END!');
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

//shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));
startGame(baseMatrix);


