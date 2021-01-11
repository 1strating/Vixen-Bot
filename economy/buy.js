const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {  
    if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(` You need \`3500\` coins to purchase **Bronze VIP**`);

    if (args[1] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You have purchased **bronze VIP** For \`3500\` coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[1] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You need \`600\` coins to purchase some **Nikes**`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You have purchased some resh **Nikes** For \`600\` coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[1] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You need \`800\` coins to purchase a **New Car**`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You have purchased a **New Car** for \`800\` coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[1] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(` You need **1200** coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You have purchased a **Mansion** For \`1200\` Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription('Provide an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: "purchase"
  }