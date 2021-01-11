const Discord = require('discord.js')
const InsultCompliment = require("insult-compliment");
module.exports.run = async (bot, msg, args, config) => {
    if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


    msg.channel.send(new Discord.MessageEmbed()
      .setDescription(InsultCompliment.Insult())
      .setColor("36393f"))     

   
}


module.exports.help = {
    name:"joke"
} 