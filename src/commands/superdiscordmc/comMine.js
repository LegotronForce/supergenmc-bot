const db = require('quick.db');



var command = {
    name: 'mine',
    description: 'Get some stone, iron, coal, maybe even diamonds!',
    category: 'sdmc',
    runC: async(client, message, args) => {
        console.log(`[COMMAND EXECUTE] ${message.author} used "::mine"`);
        let inventory = db.get(`user_${message.author}`).inventory;
        
        if(inventory == null || inventory == '{}') {
            db.set(`user_${message.author}`, {'inventory': ['basicpick']}); 
        };

        var items = ['stone', 'coal', 'iron', 'gold', 'lapis', 'redstone', 'diamond', 'netherite'];
        var randomItem = items[Math.floor(Math.random() * 10) + 1];

        message.channel.send(`You got a ${randomItem}, it will now be added into your inventory!`);
        
        db.push(`user_${message.author}.inventory`, randomItem);
        inventory = db.get(`user_${message.author}`).inventory;
        
        message.channel.send(`Added item, inventory now: \`${inventory}\``)
    }
};

module.exports = {command};