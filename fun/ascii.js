const figlet = require('figlet');

module.exports.run = async (bot, message, args) => {

    if(!args.slice(1).join(" ")) return message.channel.send('Provide some text').then(m => m.delete(3000))

        const msg = args.slice(1).join(" ")

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Text may not exceed 2000 characters').then(m => m.delete(3000))

            message.channel.send('```' + data + '```')
        })

};

module.exports.help = {
    name: 'ascii'
}