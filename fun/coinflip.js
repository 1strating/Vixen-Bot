const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let outcomes = ["heads", "tails"]
  let outcomesIndex = Math.round(Math.random() * outcomes.length);
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`Coin has been flipped! Landed on **${outcomes[outcomesIndex]}**`)

    message.channel.send(embed);
}

module.exports.help = {
    name:"coinflip"
} 