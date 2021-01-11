 
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permissions to add money to users")

  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let member = message.mentions.users.first()
  let memberMentioned = message.author

    if (!args[1]) return message.channel.send("You must provide an amount of money to add")
    
  if(!member) {
        db.add(`money_${message.guild.id}_${memberMentioned.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${memberMentioned.id}`)
        let moneyEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`Added coins to **${memberMentioned.username}**\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
  } 
  if(member) {
        db.add(`money_${message.guild.id}_${member.id}`, args[2])
    let bal = await db.fetch(`money_${message.guild.id}_${member.id}`)
        let moneyEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`Added coins to **${member.username}**\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
  }

};

module.exports.help = {
  name: "addbal",
  aliases: "am"
}