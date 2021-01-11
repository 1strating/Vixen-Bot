const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permissions to use this!")
    try {
        message.guild.leave();
        	} catch(e) {
     		    console.log(e.stack);
          }
            message.channel.send("Okay, leaving the server")
}

module.exports.help = {
    name: "leaveserver",
    desc: "Leaves the server.",
}