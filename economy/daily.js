
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let user = message.author;
  
       let amountBoard = [
       "200",
       "500",
       "480",
       "360",
       "800",
       "120",
       "970"
     ]
     
    let results = amountBoard[Math.floor(Math.random() * amountBoard.length)]

  let timeout = 86400000;
  let amount = results;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`You've already collected your daily reward\n\nYou may collect it again in **${time.hours}h ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You've collected your daily reward of **${amount}** coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
  }
};


module.exports.help = {
  name:"daily"
}