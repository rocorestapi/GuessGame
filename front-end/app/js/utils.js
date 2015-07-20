/**
 * Created by ronald correa on 7/20/2015.
 */


var Util = function()
{
    this.regexImputCoord = /^[0-3][0-2]$/;

    this.randomIntInc = function (low, high)
    {
        return Math.floor(Math.random() * (high - low + 1) + low);
    };

    this.clearScreen = function()
    {
        process.stdout.write("\u001b[2J\u001b[0;0H");
    };
};

module.exports = Util;