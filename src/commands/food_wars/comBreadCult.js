var command = {
    name: 'breadcult',
    description: 'Join the bread cult, become a "god!"',
    category: 'food_wars',
    runC: async(client, message, args)=>{
        message.author.send('https://discord.gg/zrgGeyBpFc')
    }
};

module.exports = {command};