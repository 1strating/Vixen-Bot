const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have permission to use this!");
  let reason = args.slice(2).join(' ');
  
  let memberID = message.content.substring(message.content.indexOf(" ") + 1)
  let member = message.guild.members.cache.get(memberID) || message.mentions.members.first()
    if(!member) return message.channel.send("You must mention a user or provide a **valid** ID to warn")
  
            if(member.user.id === "709672019842826270") return message.channel.send("I can't warn my owner!")
  
      if(message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You cannot warn someone with a role higher than you") 
  
    if (member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("That user is a moderator or admin I cannot warn them")
  if (reason.length < 1) return message.channel.send('You must provide a reason for the warning');
  
    let embed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`**${member.user.tag}** has been warned`)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason)

  message.channel.send(embed)
}

module.exports.help = {
  name: 'warn'
};