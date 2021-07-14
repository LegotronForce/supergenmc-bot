const db = require('quick.db');



var command = {
    name: 'rinv',
    description: 'Reset a bugged inventory',
    category: 'sdmc',
    run: async(client, message, args) => {
        console.log(`${message.author} used "::rinv"`);
        let inventory = db.set(`user_${message.author}`, {'inventory': ['basicpick', 'joemama']}); 

        message.channel.send('Reset Inventory');
    }
};

module.exports = {command};