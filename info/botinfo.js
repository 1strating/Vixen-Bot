const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format");
const os = require("os")

module.exports.run = async (bot, message, args, command) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  
  const duration = moment.duration(bot.uptime).format("D [days], H [hrs], m [mins], s [secs]")
  
  const core = os.cpus()[1]
  
  const embed = new Discord.MessageEmbed()
  .setDescription("**Bot Information**")
  .setColor("36393f")
  .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 512}))
  .addField("General", [
    `**➣ Bot Name:** ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`,
    `**➣ Bot Creation Date:** ${moment(bot.user.createdAt.toLocaleDateString()).format('dddd, MMMM Do, YYYY | LT')}`,
    `**➣ Servers:** ${bot.guilds.cache.size}`,
    `**➣ Users:** ${bot.users.cache.size}`,
    `**➣ Version:** v0.0.1`,
    `**➣ Node.js:** v12`,
    `**➣ Discord.js:** v12.2.0`,
    '\u200b'
])
  .addField("System", [
    `**➣ Platform:** ${process.platform}`,
    `**➣ Uptime:** ${duration}`,
    `**➣ Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
    `**➣ CPU:**`,
    `\u3000 Cores: ${os.cpus().length}`,
    `\u3000 Model: ${core.model}`,
    `\u3000 Speed: ${core.speed}MHz`
])
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  
  message.channel.send(embed)
}

module.exports.help = {
  name: "botinfo",
  aliases: "about"
}
