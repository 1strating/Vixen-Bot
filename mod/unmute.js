const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions to use this!");
    
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to unmute")
  
  let muteRole = message.guild.roles.cache.find(role => role.name === "Muted")
  
  if(!muteRole) {
     message.channel.send("There was no **Muted** role found. it was either deleted or one was never made.")
  }
  
  if(muteRole) {
member.roles.remove(muteRole.id)
    message.channel.send(`**${member.user.tag}** has been unmuted`)
}
}

module.exports.help = {
  name: "unmute"
}