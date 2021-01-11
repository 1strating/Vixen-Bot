const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {  
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let user = message.author;
  
         let amountBoard = [
       "500",
       "1000",
       "1500",
       "2000",
       "2500",
       "3000",
       "5000"
     ]
     
    let results = amountBoard[Math.floor(Math.random() * amountBoard.length)]
  
  let timeout = 604800000;
  let amount = results;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`You have already collected your weekly reward\n\nCollect it again in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You've collected your weekly reward of **${amount}** coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"weekly"
}