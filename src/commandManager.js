const { MessageEmbed } = require('discord.js');
const chalk = require('chalk');
const fs = require('fs');
const {getTime} = require("./other");
const dir = 'src/commands';

var commands = [];
var totalCommands = 0;
var help = new MessageEmbed();
help
    .setTitle("SuperGenMC Bot - Help") // Set the title to the title of the page.
    .setDescription("SuperGenMC is a Minecraft server made and run\nby Toni300096.") // We make the description the text.
    .setColor([175, 175, 175]);

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

commands.forEach((val, index) => {
    help.addField(`${val.name}`, `::${val.name} - ${val.description} - ${val.category}`);
});

// var helpCommand = {
//     name: 'help',
//     description: 'Look at all the commands and basic knowledge of the server',
//     category: 'informational',
//     run: async(client, message, args)=>{
//         message.channel.send(help); // Then we send the embed.
//     }
// };

// commands.push(helpCommand);
totalCommands = commands.length;

const data = require('../resources/data.json');
if(data.debug) {
    for(let i = 0; i < commands.length; i++) {
        console.log(`[COMMAND LOG - TIME: ${getTime(new Date())}] NAME: ${chalk.green(commands[i].command.name)} || DESCRIPTION: ${chalk.green(commands[i].command.description)} || CATEGORY: ${chalk.green(commands[i].command.category)}`);
    }
}

// console.log(commands);
// console.log(totalCommands);

module.exports = {
    commands,
    totalCommands
};