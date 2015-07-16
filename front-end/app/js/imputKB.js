/**
 * Created by ronald correa on 7/15/2015.
 */

var readline = require('readline');

var imputKB = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

imputKB.question("Enter cordenadas (1,3): ", function(answer)
{
    console.log(answer);
//    if (answer != "s")
  //      imputKB.close();
    console.log("Sigo dentro");
});


/*
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk)
{
    process.stdout.write('data: ' + chunk);
});

*/

/*
var prompt = require('prompt');

var properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes',
        hidden: true
    },
    {
        name: 'password',
        hidden: true
    }
];

prompt.start();

prompt.get(properties, function (err, result)
{
    if (err)
    {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
    if(result.username == "")
        console.log("IF")
    else
        console.log("ELSE")

});

function onErr(err)
{
    console.log("Erroreando");
    console.log(err);
    return 1;
}
*/

/*
var prompt = require("prompt");

//
// Setting these properties customizes the prompt.
//
prompt.message = "Question!".rainbow;
prompt.delimiter = "><".green;

prompt.start();

prompt.get({
    properties: {
        name: {
            description: "What is your name?".magenta
        }
    }
}, function (err, result) {
    console.log("You said your name is: ".cyan + result.name.cyan);
});*/