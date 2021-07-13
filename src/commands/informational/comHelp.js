const { MessageEmbed } = require('discord.js');

var command = {
    name: 'help',
    description: 'Look at all the commands and basic knowledge of the server',
    category: 'informational',
    runC: async(client, message, args)=>{
        // Create an embed
        const embed = new MessageEmbed() // Create the embed
            .setTitle("SuperGenMC Bot - Help") // Set the title to the title of the page.
            .setDescription("SuperGenMC is a Minecraft server made and run\nby Toni300096.") // We make the description the text.
            .addField('Help', '::help - ' + command.description + ' - ' + command.category)
            .setColor([175, 175, 175]) // Then we set the color.
        ;

        message.channel.send(embed); // Then we send the embed.
    }
};

module.exports = {command};