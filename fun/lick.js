const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, msg, args, config) => {
  if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    let user = msg.mentions.users.first()
    var insults = [
      "https://media1.tenor.com/images/efd46743771a78e493e66b5d26cd2af1/tenor.gif",
      "https://media1.tenor.com/images/9643577662a9946de17bd8c3fd124c72/tenor.gif",
      "https://i.kym-cdn.com/photos/images/original/001/005/876/156.gif",
      "https://thumbs.gfycat.com/BestBlueGalapagosalbatross-size_restricted.gif",
      "https://media1.tenor.com/images/81769ee6622b5396d1489fb4667fd20a/tenor.gif",
      "https://media1.tenor.com/images/783188d1592d16bcc83f52639fad8fcb/tenor.gif",
      "https://media1.tenor.com/images/0a2cdce1fc35a069cdcb992f89c8855b/tenor.gif",
      "https://i.kym-cdn.com/photos/images/newsfeed/001/230/497/04d.gif",
      "https://i.gifer.com/MLSy.gif",
      "https://68.media.tumblr.com/b80cda919b3309f2cb974635e429db57/tumblr_osuazevFcj1qcsnnso1_500.gif"
      ]
    let results = insults[Math.floor(Math.random() * insults.length)]


    if(!user) return msg.channel.send('You forgot to mention a user to lick')

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${user.username}** has been licked by **${msg.author.username}**`)
  .setColor("36393f")
  .setImage(results)
  
    msg.channel.send(embed)     

   
}


module.exports.help = {
    name:"lick"
}