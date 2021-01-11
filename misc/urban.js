const Discord = require("discord.js");
const urban = require("urban")

module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  if(!args[1]) return message.channel.send("You must provide a word to search")
  
  let str = args.join(" ")
  urban(str).first(json => {
    if(!json) return message.channel.send("No results were found")

  let image = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg"
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setAuthor(`The Urban Dictionary`, image)
  .setTitle(json.word)
  .setThumbnail(image)
  .setDescription(json.definition)
  .addField("Upvotes:", json.thumbs_up)
  .addField("Downvotes:", json.thumbs_down)
  .setFooter(`Written by ${json.author}`)
  
  message.channel.send(embed)
    
  })
}

module.exports.help = {
  name: 'urban'
};