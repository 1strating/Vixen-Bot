const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions to use this!");
    
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to mute")
  
            if(member.user.id === "709672019842826270") return message.channel.send("I can't mute my owner!")
  
      if(message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot mute someone with a role higher than you") 
  
    if (member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) return message.channel.send("That user is a moderator or admin I cannot mute them")
  
  let muteRole = message.guild.roles.cache.find(role => role.name === "Muted")
  
  if(!muteRole) {
     message.channel.send("There was no **Muted** role, so I created one.")
    try {
muteRole = await message.guild.roles.create
      ({
  data: {
  name: "Muted",
  color: "#000000",
  permissions: []
  }
})
      message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muteRole, {
SEND_MESSAGES: false,
  ADD_REACTIONS: false,
    SPEAK: false
});
});
} catch(e) {
console.log(e.stack)
}
}
  
  if(muteRole) {
member.roles.add(muteRole.id)
    message.channel.send(`**${member.user.tag}** has been muted`)
}
}

module.exports.help = {
  name: "mute"
}