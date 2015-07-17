/**
 * Created by ronald correa on 7/15/2015.
 */


var ShuffleMatrix = function()
{
    this.shuffle = function (array)
    {
        var elementsRemaining = array.length, temp, randomIndex;
        while (elementsRemaining > 1) {
            randomIndex = Math.floor(Math.random() * elementsRemaining--);
            if (randomIndex != elementsRemaining) {
                temp = array[elementsRemaining];
                array[elementsRemaining] = array[randomIndex];
                array[randomIndex] = temp;
            }
        }
        return array;
    };

    this.displayMatrixConsole = function (baseMatrix)
    {
        console.log("");
        console.log("=================================================================");
        for (var i = 0; i < baseMatrix[0].length; i++)
        {
            if (i == 0)
            {
                process.stdout.write("  |\t");
            }
            process.stdout.write(i + "\t");
        }
        console.log("");
        console.log("=================================================================");
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
        console.log("=================================================================");
    };

    this.displayMatrixConsoleX = function (baseMatrix)
    {
        console.log("");
        console.log("=================================================================");
        for (var i = 0; i < baseMatrix[0].length; i++)
        {
            if (i == 0)
            {
                process.stdout.write("  |\t");
            }
            process.stdout.write(i + "\t");
        }
        console.log("");
        console.log("=================================================================");
        for (var i = 0; i < baseMatrix.length; i++) {
            for (var j = 0; j < baseMatrix[i].length; j++) {
                //console.log(fila1[i][j] );
                if (j == 0) {
                    process.stdout.write(i + " |\t");
                }
                //console.log(fila1[i][j]);
                //process.stdout.write("X\t");
                //process.stdout.write(baseMatrix[i][j] + "\t");
                process.stdout.write("X\t");
            }
            console.log("");
            console.log("");
        }
        console.log("=================================================================");
    };


    this.getColumnArray = function(index, matrix)
    {
        var columnArray = [];
        for(var i = 0;i<matrix.length; i++)
        {
            for(var j = 0;j<matrix[i].length ; j++)
            {
                if (index == j)
                {
                    columnArray[i] = matrix[i][index];
                    //console.log(matrix[i][index]);
                    break;
                }
            }
        }
        return columnArray;
    };

    this.getRowArray = function(index, matrix)
    {
        var columnArray = [];
        for(var i = 0;i<matrix.length; i++)
        {
            for(var j = 0;j<matrix[i].length ; j++)
            {
                if (index == j)
                {
                    columnArray[i] = matrix[i][index];
                    //console.log(matrix[i][index]);
                    break;
                }
            }
        }
        return columnArray;
    };

    this.shuffleMatrixBase = function(baseMatrix)
    {
        //console.log("Before Row: ")
        //this.displayMatrix(baseMatrix);

        var shuffleRow1 = [[]];
        var shuffleRow2 = [[]];
        var shuffleColumn1= [[]];
        var shuffleColumn2= [[]];

        //console.log("ES.................... "+Array.isArray(baseMatrix[0]))

        for (var i = 0; i<baseMatrix.length; i++)
        {
            shuffleRow1[i] = this.shuffle(baseMatrix[i]);
        }

        //console.log("After Row: ")
        //displayMatrix(shuffleRow1);

        //console.log("Before Column: ")
        //var arrayRow = [];
        for (var j = 0; j<shuffleRow1[0].length; j++)
        {
            //arrayRow = getColumnArray(j, shuffleRow1);
            //console.log(arrayTest);
            shuffleColumn1[j] = this.shuffle(this.getColumnArray(j, shuffleRow1));

        }
        //displayMatrix(shuffleColumn1);

        //var arrayTest2 = [];
        for (var k = 0; k<shuffleColumn1[0].length; k++)
        {
            //arrayTest2 = getColumnArray(k, shuffleColumn1);
            //console.log(arrayTest2);
            shuffleColumn2[k] = this.shuffle(this.getColumnArray(k, shuffleColumn1));
        }
        //displayMatrix(shuffleColumn2);
        return shuffleColumn2;
    };

};

/*
 var shuffleMatrixTest = new shuffleMatrix();
 var baseMatrix = [
 ["A", "B", "C", "D", "E", "F", "G", "H"],
 ["I", "J", "K", "L", "M", "N", "O", "P"],
 ["A", "B", "C", "D", "E", "F", "G", "H"],
 ["I", "J", "K", "L", "M", "N", "O", "P"]
 ];

 console.log("BEFORE");
 shuffleMatrixTest.displayMatrixConsole(baseMatrix);
 console.log("AFTER");
 shuffleMatrixTest.displayMatrixConsole(shuffleMatrixTest.shuffleMatrixBase(baseMatrix));

 */


module.exports = new ShuffleMatrix();
