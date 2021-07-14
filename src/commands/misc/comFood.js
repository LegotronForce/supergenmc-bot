var command = {
    name: 'food',
    description: 'Say a random food emoji',
    category: 'misc',
    run: async(client, message, args)=>{
        var food = [':green_apple:', ':apple:', ':pear:', ':tangerine:', ':lemon:', ':banana:', ':watermelon:', ':grapes:', ':blueberries:', ':strawberry:', ':melon:', ':cherries:', ':peach:', ':mango:', ':pineapple:', ':coconut:', ':kiwi:', ':tomato:', ':eggplant:', ':avocado:', ':olive:', ':broccoli:', ':leafy_green:', ':bell_pepper:', ':cucumber:'];
        var randomFood = food[Math.floor(Math.random() * 10) + 1];
        message.channel.send(randomFood);
    }
};

module.exports = {command};