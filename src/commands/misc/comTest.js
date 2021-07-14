var command = {
    name: 'test',
    description: 'A simple test',
    category: 'misc',
    run: async(client, message, args)=>{
        message.channel.send('Test, world!');
        console.log('Command run: ::test')
    }
};

module.exports = {command};