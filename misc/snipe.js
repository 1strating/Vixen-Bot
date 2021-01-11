const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  
const msg = bot.snipes.get(message.channel.id)
if(!msg) return message.channel.send("There are no **recent** deleted messages in this channel")
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setAuthor(msg.author, msg.authorAv)
  .setDescription(msg.content)
  .setFooter("Message Deleted")
  if(msg.image)embed.setImage(msg.image)  
  message.channel.send(embed)


}
  
  
  module.exports.help = {
      name:"snipe"
  }