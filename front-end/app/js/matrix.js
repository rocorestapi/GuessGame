var shuffleMatrixTest = require('./shuffleMatrix.js');
var colors = require('colors');


/**
 *
 * @constructor
 * Main class to do some required operations over arrays
 */
var MatrixOperation = function()
{
    /**
     * @param x0, y0, the first (x,y) coord
     * @param x1, y1, the second (x,y) coord
     * @param baseMatrixX, basic array
     * @returns {*}: a multidimensional array
     */
    this.revertBaseMatrix = function(x0, y0, x1, y1, baseMatrixX)
    {
        //TODO, check out of array
        baseMatrixX[Number(x0)][Number(y0)] = "X";
        baseMatrixX[Number(x1)][Number(y1)] = "X";
        return baseMatrixX;
    }

    /**
     *
     * @param baseMatrix: only dispolay the a multidimensional array in  console
     */
    this.displayMatrixConsole = function (baseMatrix)
    {
        console.log("");
        console.log("===================================");
        //TODO, here is failing
        for (var i = 0; i < baseMatrix[0].length; i++)
        {
            if (i == 0)
            {
                process.stdout.write("  |\t");
            }
            process.stdout.write(i + "\t");
        }
        console.log("");
        console.log("===================================");
        for (var i = 0; i < baseMatrix.length; i++) {
            for (var j = 0; j < baseMatrix[i].length; j++) {
                //console.log(fila1[i][j] );
                if (j == 0) {
                    process.stdout.write(i + " |\t");
                }
                //console.log(fila1[i][j]);
                //process.stdout.write("X\t");
                process.stdout.write(baseMatrix[i][j] + "\t");
            }
            console.log("");
            console.log("");
        }
        console.log("===================================");
    };

    /**
     * @param x, y, Coord (x,y) to show the letter in the multidimensional array
     * @param baseMatrix
     * @param baseMatrixX
     * @returns {*}
     */
    this.showLetterBaseMatrixX = function(x, y, baseMatrix, baseMatrixX)
    {
        //TODO, check out of array
        baseMatrixX[Number(x)][Number(y)] = colors.green(baseMatrix[Number(x)][Number(y)]);
        return baseMatrixX;
    };

    this.getLetterBaseMatrix = function(x, y, baseMatrix)
    {
        var letter = baseMatrix[Number(x)][Number(y)];
        return letter;
    };


    /**
     * @param x0, y0, the first (x,y) coord
     * @param x1, y1, the second (x,y) coord
     * @param baseMatrixX
     * @returns {*}
     */
    this.revertBaseMatrix = function(x0, y0, x1, y1, baseMatrixX)
    {
        //TODO, check out of array
        baseMatrixX[Number(x0)][Number(y0)] = "X";
        baseMatrixX[Number(x1)][Number(y1)] = "X";
        return baseMatrixX;
    };

}



module.exports = MatrixOperation;