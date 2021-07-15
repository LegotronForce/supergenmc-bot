var command = {
    name: 'tempmute',
    description: 'Mutes a person for a specified time',
    category: 'misc',
    run: async (client, message, args) => {
        if (message.author.id == '557696022004891689') {
            let role = message.guild.roles.cache.find(r => r.name === 'Muted');
            let role2 = message.guild.roles.cache.find(r => r.name === '»【Member】');
            let member = message.mentions.members.first();
            let author = message.guild.members.cache.find(u => u.id === message.author.id);

            if(message.member.roles.cache.some(r => r.name === '»【Owner】') || message.member.roles.cache.some(r => r.name === '»【Admin】') || message.member.roles.cache.some(r => r.name === '»【Moderator】') || message.member.roles.cache.some(r => r.name === ('»【Helper】')))  {
                if(author.roles.cache.some(r => r.name === '»【Owner】') || author.roles.cache.some(r => r.name === '»【Admin】') || author.roles.cache.some(r => r.name === '»【Moderator】') || author.roles.cache.some(r => r.name === '»【Helper】')) {
                    member.roles.add(role);
                    member.roles.remove(role2);
                } else {
                    message.channel.send('Sorry, but you can\'t do that. You just aren\'t staff :/')
                }
            } else {
                message.channel.send('Sorry, but you can\'t do that but you are not allowed to mute staff :/')
            }// All of the roles in order: Owner, admin, mod, helper
        }
    }
};

module.exports = {
    command
};