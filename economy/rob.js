
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {  
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

let user = message.mentions.members.first()
if(!user) return message.channel.send("You must mention a user to rob them")
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`You have already robbed someone\n\nTry again in **${time.minutes}m ${time.seconds}s**`);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`That user needs atleast **200** coins in their wallet to rob them`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(` ${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setDescription(`You robbed **${user.user.username}** and got away with \`${random}\` coins`)
.setColor("36393f")
message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${message.author.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

module.exports.help = {
  name:"rob",
  aliases: "steal"
}