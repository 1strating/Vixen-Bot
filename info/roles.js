const Discord = require("discord.js")
module.exports.run = async (bot, message, args, command) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


let rolesCount = message.guild.roles.cache.size
let rolesName = message.guild.roles.cache.filter(r => r.id !== message.guild.id).map(roles => roles.name).join("\n").replace("@everyone", " ")
  
      const embed = new Discord.MessageEmbed()
      .setColor("36393f")
      .setAuthor(`Total Server Roles: ${rolesCount}`)
      .setDescription(rolesName)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send(embed) 
}

module.exports.help = {
  name: "roles"
}