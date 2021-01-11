
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {  
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [?buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [?buy nikes]\nCar: 800 [?buy car]\nMansion: 1200 [?buy mansion]")
    .setColor("36393f")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store"
}