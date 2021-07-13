var command = {
    name: 'bread',
    description: 'It\'s a bread party y\'all!',
    category: 'misc',
    run: async (client, message, args) => {
            message.delete();
            message.channel.send(':bread: :bread: :bread: :bread: :bread: :bread: :bread: BREAD PARTY!!!!');
    }
};

module.exports = {
    command
};