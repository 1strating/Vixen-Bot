const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permissions to use this!");
  
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to ban")
  
       if(member.user.id === "709672019842826270") return message.channel.send("I can't ban my owner!")
  
      if(message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot ban someone with a role higher than you")  

    if (member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That user is a moderator or admin, I cannot ban them")
      
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user!");

    
    let reason = args.slice(2).join(' ');
    if(!reason) {
      const res = "No reason given";
    }
    else {
      const res = `${reason}`
    }
    
    await member.ban(reason)

      message.channel.send(`**${member.user.tag}** has been banned`)
}
module.exports.help = {
  name: "ban"
}