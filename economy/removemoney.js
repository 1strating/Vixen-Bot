 
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permissions to remove coins from users")
  
      let member = message.mentions.users.first()
  let memberMentioned = message.author
  
  if(!member) {
    if (!args[1]) return message.channel.send("You must provide an amount of coins to remove")
    db.subtract(`money_${message.guild.id}_${memberMentioned.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${memberMentioned.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`Removed coins from **${memberMentioned.username}**\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
  } 
  
  if(member) {
    if (!args[2]) return message.channel.send("You must provide an amount of coins to remove")
        db.subtract(`money_${message.guild.id}_${member.id}`, args[2])
    let bal = await db.fetch(`money_${message.guild.id}_${member.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`Removed coins from **${member.username}**\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
  }
  
  
};


module.exports.help = {
  name:"removebal",
  aliases: "rm"
}