
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let user = message.mentions.users.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You don't have that much money`);

  if (member < args[2]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You have payed **${user.username}** \`${args[2]}\` coins`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[2])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[2])

}

module.exports.help = {
  name:"pay",
  aliases: "givemoney"
}