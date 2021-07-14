var command = {
    name: 'say',
    description: 'Says whatever you want!',
    category: 'misc',
    runC: async(client, message, args)=>{
            text = '';
            for(let i = 1; i < args.length; i++) {
                    text += args[i] + ' '
            }

            message.channel.send(text);
            message.delete();
            console.log(`I said '${text}'`);
    }
};

module.exports = {command};