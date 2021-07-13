var command = {
    name: 'potato',
    description: 'Join the potato cult, become an ultimate potato priest (Baked potato)!',
    category: 'food_wars',
    runC: async(client, message, args)=>{
        message.author.send('https://discord.gg/hUr2gsp8qj')
    }
};

module.exports = {command};