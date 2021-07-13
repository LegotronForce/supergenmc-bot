const fs = require('fs')

var command = {
    name: 'recipes',
    description: 'Look at the recipes in SuperGenMC',
    category: 'sdmc',
    runC: async(client, message, args) => {
        message.channel.send(fs.readFileSync('resources/recipe.md').toString());
    }
};

module.exports = {command};