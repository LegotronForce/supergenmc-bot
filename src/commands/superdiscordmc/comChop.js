const db = require('quick.db');



var command = {
    name: 'chop',
    description: 'Get some stone, iron, coal, maybe even diamonds!',
    category: 'sdmc',
    run: async(client, message, args) => {
        console.log(`[COMMAND EXECUTE] ${message.author} used "::${command.name}"`);
        let inventory = db.get(`user_${message.author}`).inventory;
        
        if(inventory == null || inventory == '{}') {
            db.set(`user_${message.author}`, {'inventory': ['basicpick']}); 
        };

        message.channel.send(`You got a LOG, it will now be added into your inventory!`);
        
        db.push(`user_${message.author}.inventory`, 'log');
        inventory = db.get(`user_${message.author}`).inventory;
        
        message.channel.send(`Added item, inventory now: \`${inventory}\``)
    }
};

module.exports = {command};