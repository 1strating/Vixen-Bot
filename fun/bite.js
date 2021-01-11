const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, msg, args, config) => {
  if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    let user = msg.mentions.users.first()
    var insults = [
      "https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif",
      "https://i.pinimg.com/originals/17/9a/16/179a16220f6cf2712073ccdc759ff3e1.gif",
      "https://i.gifer.com/np4.gif",
      "https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif",
      "https://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif",
      "https://thumbs.gfycat.com/DefiniteBossyFlounder-size_restricted.gif",
      "https://i.pinimg.com/originals/95/79/ed/9579ed2059c327e0715a2c3608acdda4.gif",
      "https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-size_restricted.gif",
      "https://i.imgur.com/M3H3256.gif",
      "https://i.imgur.com/xKJw3mX.gif",
      "https://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-7.gif"
      ]
    let results = insults[Math.floor(Math.random() * insults.length)]


    if(!user) return msg.channel.send('You forgot to mention a user to bite')

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${user.username}** has been bit by **${msg.author.username}**`)
  .setColor("36393f")
  .setImage(results)
  
    msg.channel.send(embed)     

   
}


module.exports.help = {
    name:"bite"
}