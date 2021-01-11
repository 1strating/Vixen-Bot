const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {  
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  let user = message.author;
  
     let amountBoard = [
       "100",
       "250",
       "50",
       "360",
       "500",
       "750",
       "1500"
     ]
     
    let results = amountBoard[Math.floor(Math.random() * amountBoard.length)]

  let timeout = 43200000;
  let amount = results;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(` You've already begged recently\n\nYou may beg again in **${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`You've begged and received **${amount}** coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"beg"
}