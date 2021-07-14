const db = require('quick.db');



var command = {
    name: 'inventory',
    description: 'Look in your inventory',
    category: 'sdmc',
    run: async(client, message, args) => {
        console.log(`${message.author} used "::inventory"`);
        let inventory = db.get(`user_${message.author}`).inventory;
        
        if(inventory == null || inventory == '{}') {
            db.set(`user_${message.author}`, {});
            db.add(`user_${message.author}.inventory`, []);
        };

        for(let i = 0; i < inventory.length; i++) {
            if(inventory.length == i) {} // Last object
            else {}; // Every other object
        }

        message.channel.send(`\`${inventory}\``);
    }
};

module.exports = {command};