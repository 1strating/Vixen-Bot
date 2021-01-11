const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permissions to use this!");
  
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to kick")
  
       if(member.user.id === "709672019842826270") return message.channel.send("I can't kick my owner!")
  
      if(message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot kick someone with a role higher than you")  

  
    if (member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That user is a moderator or admin, I cannot kick them")
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");

    
    let reason = args.slice(2).join(' ');
    if(!reason) {
      const res = "No reason given";
    }
    else {
      const res = `${reason}`
    }
    
    await member.kick(reason)

      message.channel.send(`**${member.user.tag}** has been kicked`)
}
module.exports.help = {
  name: "kick"
}