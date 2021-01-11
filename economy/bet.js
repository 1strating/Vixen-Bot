 
const slotItems = ["<:grapes:731698009586270218>", "<:watermelon:731698913190346833>", "<:orange:731698711700176967>", "<:apple:731700056087986177>", "<:strawberry:731700056088117328>", "<:banana:731700056272666626>", "<:cherry:731700056180260914>"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[1]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(`You are betting more than you have`);

    let moneyhelp = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`Specify an amount of coins`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won **${money}** coins`)
            .setColor("36393f")
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost **${money}** coins`)
            .setColor("36393f")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
  
  module.exports.help = {
    name:"bet"
  }