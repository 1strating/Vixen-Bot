const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to use this!");
  
  if(!args[1]) return message.channel.send("Please provide an amount of messages to purge")
  
  if(args[1] > 100) return message.channel.send("You can only purge up to **100** messages")
    
  message.delete()

  if(args[1] < 200) {
  message.channel.bulkDelete(args[1]).then(() => {
message.channel.send(`Deleted \`${args[1]}/${args[1]}\` messages`).then(m => m.delete({timeout: 5000}))
})
  }
    
}

module.exports.help = {
  name: "purge",
  aliases: "clear"
}