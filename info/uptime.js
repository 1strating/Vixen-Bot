const moment = require("moment")
const Discord = require("discord.js");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
  
  const duration = moment.duration(bot.uptime).format("D [days], H [hours], m [minutes], s [seconds]")
  
  const embed = new Discord.MessageEmbed()
      .setColor("#36393f")
      .setAuthor("Uptime")
      .setDescription(duration)
      message.channel.send(embed)
}

module.exports.help = {
  name: 'uptime'
};