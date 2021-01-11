const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    let member = message.mentions.users.first();

    if (!member) member = message.author

  let answers = [
    "8D",
    "8=D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D",
    "8===========D",
    "8============D"
  ];
  let answer = answers[Math.floor(Math.random() * answers.length)];
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setTitle("Penis Size Machine")
  .setDescription(`**${member.username}'s** penis size\n${answer}`)
  
  message.channel.send(embed)
}

module.exports.help = {
    name:"penis"
} 