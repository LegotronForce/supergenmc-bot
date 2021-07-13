const db = require('quick.db');

/**
 * @example ::craft furnace
 * @description Allows the player to craft many items, such as the furnace and better pickaxes
 */

var command = {
    name: 'craft',
    description: 'Craft something!',
    category: 'sdmc',
    runC: async(client, message, args) => {
        // console.log(`${message.author} used "::inventory"`);
        // let inventory = db.get(`user_${message.author}`).inventory;
        
        // if(inventory == null || inventory == '{}') {
        //     db.set(`user_${message.author}`, {});
        //     db.add(`user_${message.author}.inventory`, []);
        // };

        // for(let i = 0; i < inventory.length; i++) {
        //     if(inventory.length == i) {} // Last object
        //     else {}; // Every other object
        // }

        // message.channel.send(`\`${inventory}\``);

        message.channel.send('We are currently working on this command, so hang tight and relax.')
    }
};

module.exports = {command};