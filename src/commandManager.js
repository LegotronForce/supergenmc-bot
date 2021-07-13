const fs = require('fs');
const dir = 'src/commands';

var commands = [];
var totalCommands = 0;


fs.readdirSync('src/commands/informational').forEach(file => {
    commands.push(
        require(`./commands/informational/${file}`)
    );
});

fs.readdirSync('src/commands/food_wars').forEach(file => {
    commands.push(
        require(`./commands/food_wars/${file}`)
    );
});

fs.readdirSync('src/commands/misc').forEach(file => {
    commands.push(
        require(`./commands/misc/${file}`)
    );
});

fs.readdirSync('src/commands/superdiscordmc').forEach(file => {
    commands.push(
        require(`./commands/superdiscordmc/${file}`)
    );
});

totalCommands = commands.length;

// console.log(commands);
// console.log(totalCommands);

module.exports = {
    commands,
    totalCommands
};