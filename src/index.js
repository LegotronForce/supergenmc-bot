// Imports
const {
    Client
} = require("discord.js");
const cm = require('./commandManager');
const data = require("../resources/data.json");
const client = new Client();
const {
    getTime
} = require("./other");
const dotenv = require('dotenv');
dotenv.config();

client.on('ready', () => {
    console.log(`[ONLINE] Turned on. Version: ${data.versiontype} ${data.version}. Debug mode is ${data.debug}.`);
    client.user.setActivity(`${data.token}help`, {
            type: "PLAYING"
        })
        .then(presence => {
            console.log(`[SET ACTIVITY] Set activity to ${presence.activities[0].name}`);
            console.log(`[LOG-TIME : BEGIN] ${getTime(new Date())}`);
        })
        .catch(console.error);
});

// Emitted when a member (or bot) makes a message 
client.on('message', (message) => {
    // lego.roles.remove(role);

    let args = message.content.substring(data.token.length).split(" ");
    if (message.author.bot) {
        console.log(`[BOT MESSAGE - TIME: ${getTime(new Date())}] ${message.channel.name} - ${message.author.username} : ${message.content}`);
    } else {
        console.log(`[MESSAGE - TIME: ${getTime(new Date())}] ${message.channel.name} - ${message.author.username} : ${message.content}`);
    }

    for (let i = 0; i < cm.totalCommands; i++) {
        if (cm.commands[i].command.name == args[0]) {
            cm.commands[i].command.run(client, message, args);
        }
    }

    if (message.content == '[$]') {
        message.channel.send(':dollar:');
        message.delete();
    }
    // if (message.channel.toString() === "<#805584807811219477>" && message.attachments.size > 0 && message.attachments.every(attachIsImage)) { message.react('❤️'); message.react('❌'); }
});

client.login(process.env.BOT_ID);