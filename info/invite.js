const Discord = require("discord.js");
const moment = require("moment")
const bot = new Discord.Client()
module.exports.run = async (bot, message, args) => {

  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")
  
      const embed = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setThumbnail(bot.user.displayAvatarURL({ dynamic:true }))
      .addField("Invite Links", [
        `**➣ Invite Me:** [Click Here](https://discord.com/oauth2/authorize?client_id=745013910754820096&scope=bot&permissions=2097151231)`,
        `**➣ Support Server:** [Click Here](https://discord.gg/R5ap3ZkgW6)`,
        `**➣ Discord Bot List:** [Click Here](https://linktr.ee/hafca)`
      ])
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)

    message.channel.send(embed);
}

module.exports.help = {
  name:"invite"
}
