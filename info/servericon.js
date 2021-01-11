const Discord = require("discord.js");
const moment = require("moment")
const bot = new Discord.Client()
module.exports.run = async (bot, message, args) => {

    if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")
    
      const embed = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setImage(message.guild.iconURL({ dynamic:true }))

    message.channel.send(embed);
}

module.exports.help = {
  name:"servericon"
}
