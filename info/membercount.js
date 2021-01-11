const Discord = require("discord.js")
module.exports.run = async (bot, message, args, command) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  var userCount = message.guild.memberCount;
  var humanCount = message.guild.members.cache.filter(member => !member.user.bot).size
  var botCount = message.guild.members.cache.filter(member => member.user.bot).size
  
      const embed = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setAuthor("Guild membercount stats")
      .setDescription(`**➣ Total:** ${userCount}\n**➣ Human:** ${humanCount}\n**➣ Bots:** ${botCount}`)
      message.channel.send(embed)  
}

module.exports.help = {
  name: "membercount",
  aliases: "mc"
}