/**
 * Created by ronald correa on 7/20/2015.
 */


var Menu = function()
{
    /**
     * FUnction to show main menu
     */
    this.showGameOption = function()
    {

        console.log("");
        console.log("\t\t\t1 - Re-start the Game");
        console.log("\t\t\t2 - Show the letters");
        console.log("\t\t\t3 - Go main menu");
        console.log("\t\t\t4 - Exit");
        console.log("");

    };
    /**
     * function to show Sub menu
     */
    this.showMainOption = function()
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
    };

}

module.exports = Menu;