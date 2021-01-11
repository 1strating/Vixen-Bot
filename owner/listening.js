const config  = require('../config.json')

module.exports.run = (bot, message, args) => {

  if(message.author.id != config.ownerID) return message.channel.send("This is a bot owners command, you cannot use it")

    if (!args.slice(1).join(" ")) return message.reply('I need a message to set as listening').then(m => m.delete(3000))

    bot.user.setActivity(args.slice(1).join(" "), { type: "LISTENING"})
    message.react("🎲")
  
  message.delete({timeout: 5000})

}

module.exports.help = {
    name: "set-listening"
}