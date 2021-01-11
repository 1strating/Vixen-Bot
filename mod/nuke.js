
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You dont have permissions to use this!")
  
  const nukechannel = message.channel;
  
  if(!nukechannel.deletable) return message.channel.send("This channel is not deletable")
  
  const channel = message.channel.id
  const pos = channel.position
  
  const embed = new Discord.MessageEmbed()
  .setColor("36393f")
  .setDescription(`\`Channel has been nuked by:\` ${message.author}`)
  .setImage("https://i.pinimg.com/originals/47/12/89/471289cde2490c80f60d5e85bcdfb6da.gif")
  
  await nukechannel.clone().then((channel2) => {
    channel2.setPosition(pos)
    nukechannel.delete()
    channel2.send(embed)
  })
  
  }
module.exports.help = {
  name: "nuke"
}
