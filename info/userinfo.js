const Discord = require('discord.js');
const moment = require("moment");

exports.run = (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

      let member = message.mentions.users.first() || message.author;
  
      var permissions = [];
    var acknowledgements = 'None';
  
      if(message.guild.members.cache.get(member.id).hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
              acknowledgements = 'Server Moderator';
    }
    
    if(message.guild.members.cache.get(member.id).hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
              acknowledgements = 'Server Moderator';
    }
    
    if(message.guild.members.cache.get(member.id).hasPermission("ADMINISTRATOR")){
        permissions.push("Administrator");
              acknowledgements = 'Server Administrator';
    }

    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_MESSAGES")){
        permissions.push("Manage Messages");
    }
    
    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
    
    if(message.guild.members.cache.get(member.id).hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }

    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }

    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }

    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }

    if(message.guild.members.cache.get(member.id).hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }

    if(permissions.length == 0){
        permissions.push("No Key Permissions Found");
    }
  
    if(member.id == message.guild.owner){
        acknowledgements = 'Server Owner';
    }

  const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
  };
  
const statuses = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};
  
  const userFlags = member.flags.toArray();
  
  function game() {
  let game;
    if(member.presence.activities.length >= 1) game = `${member.presence.activities[0].name}`
  else if(member.presence.activities.length < 1) game = "Not Playing Anything"
    return game;
  }
  
  let nickname = message.guild.members.cache.get(member.id).nickname
  if(!nickname) nickname = "No Nickname Set"
  
  let booster = message.guild.members.cache.get(member.id).premiumSince;
if (booster) booster = "Yes"
else booster = "No"
  
  let isBot = member.bot;
  if(isBot) isBot = "Yes"
  else isBot = "No"
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`**User information for __${member.username}__**`)
  .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 512 }))
  .setColor("36393f")
  .addField("User", [
    `**➣ Username:** ${member.username}`,
    `**➣ Nickname:** ${nickname}`,
    `**➣ Discriminstor:** ${member.discriminator}`,
    `**➣ ID:** ${member.id}`,
    `**➣ Status:** ${statuses[member.presence.status]}`,
    `**➣ Game:** ${game()}`,
    '\u200b'
])
  .addField("Member", [
    `**➣ Account Registration Date:** ${moment(member.createdAt).format("dddd, MMMM Do, YYYY | LT")}`,
    `**➣ Guild Arrival Date:** ${moment.utc(message.guild.members.cache.get(member.id).joinedAt).format("dddd, MMMM Do, YYYY | LT")}`,
    `**➣ Roles[${message.guild.members.cache.get(member.id).roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]:** ${message.guild.members.cache.get(member.id).roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join("  ") || "No Roles"}`,
    `**➣ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : "None"}`,
    `**➣ Bot:** ${isBot}`,
    `**➣ Booster:** ${booster}`,
    `**➣ Permissions:** ${permissions.join(', ')}`,
    `**➣ Acknowledgement:** ${acknowledgements}`
])
  
  message.channel.send(embed)
}
    module.exports.help = {
        name: "whois",
        aliases: "userinfo"
    }