// Imports
const { Client } = require("discord.js");
const fs = require("fs");
const cm = require('./commandManager');
const data = require("../resources/data.json");
// const database = require('./database');

const client    = new Client();
let permissions = {}          ;
var text        = ''          ;

client.on('ready', () => {
    console.log(`Turned on. Version: ${data.versiontype}: ${data.version}. Debug mode is ${data.debug}.`);
    client.user.setActivity(`${data.token}help`, {
            type: "PLAYING"
        })
        .then(presence => console.log(`Set activity to ${presence.activities[0].name}`))
        .catch(console.error);
});

// Emitted when a member (or bot) makes a message
client.on('message', (message) => {
    let args = message.content.substring(data.token.length).split(" ");
    
    if(message.author.bot) console.log('This is bot message: ' + message.content);
    console.log(`${message.channel} - ${message.author.username} : ${message.content}`);
    
    // console.log(message.guild.roles.cache.find(r => r.id === '778765085778509826').name);
    for(let i = 0; i < cm.totalCommands; i++)
    if(cm.commands[i].command.name == args[0]) {
        cm.commands[i].command.runC(client, message, args);
    }

    // if(message.channel.id === '849846323951960094') return;
    if(message.content == '[$]') { message.channel.send(':dollar:'); message.delete();}
    if (message.channel.toString() === "<#805584807811219477>" && message.attachments.size > 0 && message.attachments.every(attachIsImage)) { message.react('❤️'); message.react('❌'); }
});

client.login('ODA3MDUyMjg1MzU1MDk4MTEz.YByYAw.7mgnMnILaUrS_hjgMfoD3ilRXqY');