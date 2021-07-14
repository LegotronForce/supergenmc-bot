const { MessageEmbed } = require('discord.js');

var command = {
    name: 'info',
    description: 'Shows some info about the Discord server',
    category: 'informational',
    run: async(client, message, args) => {
        // Create an embed
        const embed = new MessageEmbed() // Create the embed
            .setTitle("SuperGenMC Bot - Info") // Set the title to the title of the page.
            .setDescription("The SuperGenMC bot project was started and currently being run by the admin LegotronForce.") // We make the description the text.
            .setColor([175, 175, 175]) // Then we set the color.
        ;

        message.channel.send(embed); // Then we send the embed.
    }
};

module.exports = {command};