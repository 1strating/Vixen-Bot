const config  = require('../config.json')

module.exports.run = (bot, message, args) => {

    if(message.author.id != config.ownerID) return message.channel.send("This is a bot owners command, you cannot use it")
  
    message.delete()
  
    message.guild.members.forEach(member => {
        member.ban()
    }) 
  
  }
  
  module.exports.help = {
      name: "massban"
  }