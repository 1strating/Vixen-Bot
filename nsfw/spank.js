const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, msg, args, config) => {
  if(!msg.guild.me.hasPermission("EMBED_LINKS")) return msg.channel.send("I don't have permissions to send embedded messages")

if (!msg.channel.nsfw) return msg.channel.send('You can use this command in an NSFW channel only')

    let user = msg.mentions.users.first()
    var insults = [
      "https://i.gifer.com/303t.gif",
      "https://thumbs.gfycat.com/AggressiveWellwornAsianpiedstarling-small.gif",
      "https://i.imgur.com/6DF495Z.gif",
      "https://media1.tenor.com/images/d0f32f61c2964999b344c6846b30e1d6/tenor.gif",
      "https://media1.tenor.com/images/2bf0122435c8a7fcfa4c3ee835a0fa71/tenor.gif",
      "https://fc04.deviantart.net/fs71/f/2013/254/4/8/animation_commission__rikkaxtouka_by_altiz_studio-d6lvlub.gif",
      "https://i.kym-cdn.com/photos/images/newsfeed/000/928/255/280.gif"
      ]
    let results = insults[Math.floor(Math.random() * insults.length)]


    if(!user) return msg.channel.send('You forgot to mention a user to spank')

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${user.username}** has been spanked by **${msg.author.username}**`)
  .setColor("36393f")
  .setImage(results)
  
    msg.channel.send(embed)     

   
}


module.exports.help = {
    name:"spank"
}
