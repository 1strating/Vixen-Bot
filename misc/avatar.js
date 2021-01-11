const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  
  let member = message.mentions.users.first() || message.author;
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.tag, member.displayAvatarURL())
  .setDescription("**Avatar**")
  .setColor("36393f")
  .setImage(member.displayAvatarURL({ dynamic: true, size: 512}))
  message.channel.send(embed)
}

module.exports.help = {
  name: "avatar",
  aliases: "av"
}