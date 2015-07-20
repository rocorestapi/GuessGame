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

        var shuffleRow1 = [[]];
        var shuffleRow2 = [[]];
        var shuffleColumn1= [[]];
        var shuffleColumn2= [[]];

        for (var i = 0; i<baseMatrix.length; i++)
        {
            shuffleRow1[i] = this.shuffle(baseMatrix[i]);
        }

        for (var j = 0; j<shuffleRow1[0].length; j++)
        {
            shuffleColumn1[j] = this.shuffle(this.getColumnArray(j, shuffleRow1));

        }
        for (var k = 0; k<shuffleColumn1[0].length; k++)
        {
            shuffleColumn2[k] = this.shuffle(this.getColumnArray(k, shuffleColumn1));
        }
        return shuffleColumn2;
    };

};

module.exports = ShuffleMatrix;
