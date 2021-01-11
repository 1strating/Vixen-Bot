const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
  
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[1];
        if (!choice) return message.channel.send(`How to play: \`?rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.channel.send("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.channel.send('I won!');
                else return message.channel.send('You won!');
            }
            case 'paper': {
                if (result === 'scissors') return message.channel.send('I won!');
                else return message.channel.send('You won!');        
            }
            case 'scissors': {
                if (result === 'rock') return message.channel.send('I won!');
                else return message.channel.send('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
}

module.exports.help = {
    name: "rps"
} 