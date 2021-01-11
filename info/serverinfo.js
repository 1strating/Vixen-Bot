const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  var userCount = message.guild.memberCount;
  var humanCount = message.guild.members.cache.filter(member => !member.user.bot).size
  var botCount = message.guild.members.cache.filter(member => member.user.bot).size
  var onlineCount = message.guild.members.cache.filter(m => m.presence.status === 'online').size
  var idleCount = message.guild.members.cache.filter(m => m.presence.status === 'idle').size
  var dndCount = message.guild.members.cache.filter(m => m.presence.status === 'dnd').size
  var invCount = message.guild.members.cache.filter(m => m.presence.status === 'offline').size
  
  const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    VERY_HIGH: "Extreme"
  };
  
  const regions = {
    brazil: "Brazil",
    europe: "Europe",
    hongkong: "Hong Kong",
    india: "India",
    japan: "Japan",
    russia: "Russia",
    singapore: "Singapore",
    southafrica: "South Africa",
    sydney: "Sydney",
    'us-central': "US Central",
    'us-east': "US East",
    'us-west': "US West",
    'us-south': "US South"
  };

      const embed = new Discord.MessageEmbed()
      .setDescription(`**Guild information for __${message.guild.name}__**`)
      .setColor("36393f")
      .setThumbnail(message.guild.iconURL({ dynamic:true }))
      .addField("General", [
        `**➣ Name:** ${message.guild.name}`,
        `**➣ ID:** ${message.guild.id}`,
        `**➣ Owner:** ${message.guild.owner.user.tag} | ${message.guild.owner.id}`,
        `**➣ Region:** ${regions[message.guild.region]}`,
        `**➣ Boost Tier:** ${message.guild.premiumTier}`,
        `**➣ Verification Level**: ${verificationLevels[message.guild.verificationLevel]}`,
        `**➣ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} | ${moment(message.guild.createdTimestamp).format('LL')} | ${moment(message.guild.createdTimestamp).fromNow()}`,
        '\u200b'
      ])
      .addField("Statistics", [
        `**➣ Role Count:** ${message.guild.roles.cache.size}`,
        `**➣ Emoji Count:** ${message.guild.emojis.cache.size}`,
        `**➣ Regular Emoji Count:** ${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}`,
        `**➣ Animated Emoji Count:** ${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`,
        `**➣ Text-Channels Count:** ${message.guild.channels.cache.filter(channel => channel.type === "text").size}`,
        `**➣ Voice-Channels Count:** ${message.guild.channels.cache.filter(channel => channel.type === "voice").size}`,
        `**➣ Categories Count:** ${message.guild.channels.cache.filter(channel => channel.type === "category").size}`,
        `**➣ Boosts Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
        '\u200b'
      ])
      .addField("Members", [
        `**➣ Member Count:** ${userCount}`,
        `**➣ Human Count:** ${humanCount}`,
        `**➣ Bot Count:** ${botCount}`,
        `➣ **Online:** ${onlineCount}`,
        `➣ **Idle:** ${idleCount}`,
        `➣ **Dnd:** ${dndCount}`,
        `➣ **Invisible:** ${invCount}`
      ])
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)

    message.channel.send(embed);
}

module.exports.help = {
  name:"serverinfo"
}
