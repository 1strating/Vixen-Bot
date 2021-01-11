const Discord = require("discord.js");
const ms = require("ms");
const config = require("../config.json")
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions to use this!"); 
  
  let role = args.slice(1).join(" ")
  if(!role) return message.channel.send("Provide a role name to assign to all members")
  
  let gRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === role.toLowerCase())
    if(!gRole) return message.channel.send(`The role \`${role}\` could not be found`)
  
message.guild.members.cache.filter(m => m.user.bot).forEach(member => {
  member.roles.add(gRole)
});
  message.channel.send(`The role \`${role}\` has been added to all bots`)
  
}

module.exports.help = {
  name: "rolebots"
}