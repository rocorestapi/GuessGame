/*
* MAIN CLASS
* */

//Show options

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
});


var fila1 = [
            ["A", "B", "C", "D", "E", "F", "G", "H"],
            ["I", "J", "K", "L", "M", "N", "O", "P"],
            ["A", "B", "C", "D", "E", "F", "G", "H"],
            ["I", "J", "K", "L", "M", "N", "O", "P"]
            ];

var fila2 = [
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"],
    ["A", "B", "C", "D", "E", "F", "G", "H"],
    ["I", "J", "K", "L", "M", "N", "O", "P"]
    ];

/*
for (var i =0; i<fila1.length; i++)
{
    for (var j =0; j<fila1[i].length; j++)
    {
        //console.log(fila1[i][j] );
        process.stdout.write(fila1[i][j]+"\t");
    }
    console.log("");
    console.log("");
}
*/
console.log("=================================================================");
for (var i =0; i<fila1[0].length; i++)
{
    if (i == 0) {
        process.stdout.write("  |\t");
    }
    process.stdout.write(i+"\t");
}
console.log("");
console.log("=================================================================");
for (var i =0; i<fila1.length; i++)
{
    for (var j =0; j<fila1[i].length; j++)
    {
        //console.log(fila1[i][j] );
        if (j == 0) {
            process.stdout.write(i+" |\t");
        }
        process.stdout.write("X\t");
    }
    console.log("");
    console.log("");
}
console.log("=================================================================");