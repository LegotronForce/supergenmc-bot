const db = require('quick.db');



var command = {
    name: 'database',
    description: 'Idk what this is',
    category: 'misc',
    run: async(client, message, args)=>{
        if(args[1] == 'read') {
            message.channel.send(db.get(client.user.id));
        } else if(args[1] == 'set') {
            if(args[2] != 'NULL') {
                db.add(client.user.id + '.' + args[2], args[3]);
            } else {
                db.add(client.user.id, args[3]);
            } // 807052285355098113.items, 'potato' -> {items: ['potato', 'weirdoItem']}
        }
    }
};

module.exports = {command};