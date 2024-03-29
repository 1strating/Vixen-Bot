 
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  
    let user = message.author;
  
  if(!args[1]) {
    const embed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription("Provide which owned item from your inventory you would like to sell")
    message.channel.send(embed)
  }

    if(args[1] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You don't have **Nikes** to sell`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`Sold Fresh **Nikes** For \`600\` Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You don't have a **Car** to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`Sold a **Car** For \`800\` Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[1] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`You don't have a **Mansion** to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription(`Sold a **Mansion** For \`1200\` Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    };

}
  
  module.exports.help = {
    name:"sell"
  }