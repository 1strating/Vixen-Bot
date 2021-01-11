const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permissions to use this!");
  
    message.guild.fetchBans().then(bans => {
    bans.forEach(banInfo => {
      message.guild.members.unban(banInfo.user);
    });
    message.channel.send(`Unbanned **${bans.size}** members`)
  })
  
  }

module.exports.help = {
  name: "massunban",
  aliases: "unbanall"
}