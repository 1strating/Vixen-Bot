const Discord = require("discord.js")
const ms = require("ms")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions to use this!");
    
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to ban")
  
       if(member.user.id === "709672019842826270") return message.channel.send("I can't ban my owner!")
  
      if(message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot ban someone with a role higher than you")
  
    if (member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That user is a moderator or admin I cannot ban them")
      
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user!");

    
    let reason = args.slice(3).join(' ');
    if(!reason) reason = "No reason given"
  
  let banTime = args.slice(2).join(' ');
  if(!banTime) return message.channel.send("You must provide ban-time of how long the member would be banned")
    
    await member.ban({days: 7, reason: reason})

      message.channel.send(`**${member.user.tag}** has been banned for \`${ms(ms(banTime))}\``)
    
  setTimeout(() => {
try {
message.guild.unban(member)
} catch(e) {
  console.log(e.stack)
}
}, ms(banTime))
}
module.exports.help = {
  name: "tempban"
}