const { MessageAttachment } = require("discord.js");

var command = {
    name: 'enchantedbread',
    description: 'It\'s enchanted bread!',
    category: 'misc',
    runC: async(client, message, args)=>{
        const attachment = new MessageAttachment('resources/img/coolenchantedbread.png');
        message.channel.send(attachment);
    }
};

module.exports = {command};