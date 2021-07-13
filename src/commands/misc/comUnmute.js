var command = {
    name: 'unmute',
    description: 'Mutes a person',
    category: 'misc',
    runC: async (client, message, args) => {
        if (message.author.id == '557696022004891689') {
            let role = message.guild.roles.cache.find(r => r.name === 'Muted');
            let role2 = message.guild.roles.cache.find(r => r.name === '»【Member】');
            let member = message.mentions.members.first();
            if(message.member.roles.cache.some(r => r.id === '778764911458516993') || message.member.roles.cache.some(r => r.id === '780824134837862420') || message.member.roles.cache.some(r => r.id === '830679865413861377') || message.member.roles.cache.some(r => r.id === ('778765134788689961')))  {
                if(message.member.roles.cache.some(r => r.id === '778764911458516993') || message.member.roles.cache.some(r => r.id === '780824134837862420') || message.member.roles.cache.some(r => r.id === '830679865413861377') || message.member.roles.cache.some(r => r.id === '778765134788689961')) {
                    member.roles.remove(role);
                    member.roles.add(role2);
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