const Discord = require('discord.js')

module.exports.run = async (bot, msg, args, config) => {
    if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


    let member = msg.mentions.users.first();

    if (!member) member = msg.author

    msg.channel.send(
        new Discord.MessageEmbed()
        .setColor('36393f')
        .setDescription(`**${member.username}** is \`${ran(0, 100)}%\` gay!`)
    );
  
}

function ran(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.help = {
    name:"howgay"
} 