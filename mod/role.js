const Discord = require("discord.js");
const ms = require("ms");
const config = require("../config.json")

module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions to use this!");
  
  let member = message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user to assign/remove roles to/from")
  
      if(message.guild.members.cache.get(member.id).roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot assign/remove roles of someone with a role higher than you")  
  
  let role = args.slice(2).join("")
  if(!role) return message.channel.send("Provide a role name to assign/remove")
  
  let gRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === role.toLowerCase())
  
      if(message.guild.members.cache.get(member.id).roles.highest.position < gRole.position) {
message.channel.send("That role is above your highest role, it can't be managed")
  }
  
        if(message.guild.members.cache.get(member.id).roles.highest.position === gRole.position) {
message.channel.send("That role is your highest role, it can't be managed")
  }
  
    if(!gRole) return message.channel.send(`The role \`${role}\` could not be found`)
  
        if(message.guild.members.cache.get(member.id).roles.highest.position > gRole.position) {
  if(!member.roles.cache.has(gRole.id)) {
await member.roles.add(gRole.id)
    message.channel.send(`The role \`${role}\` has been added to **${member.user.username}**`)
} else {
await member.roles.remove(gRole.id)
    message.channel.send(`The role \`${role}\` has been removed from **${member.user.username}**`)
}
    }

}

module.exports.help = {
  name: "role"
}