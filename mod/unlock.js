const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permissions to use this!")


if(!bot.lockit) bot.lockit = [];
  
  message.channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: null
        })
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`\<:dboatsV:792135822802550804>・<#${message.channel.id}> has been unlocked`)
  
  message.channel.send(embed)

}

module.exports.help = {
  name: "unlock",
  aliases: "ulock"
}
