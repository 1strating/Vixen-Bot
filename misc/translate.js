const translate = require('translate-google')
const Discord = require("discord.js")

module.exports.run = async (bot, msg, args, config) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  
    let text = args.slice(1).join("   ")
    if(!text) return msg.reply('I need some text to translate')
  
    if(text > 2000) return msg.reply('Text may not exceed over 2000 characters.')
    translate(text.trimLeft(), { to: "en"}).then(res => {
      const embed = new Discord.MessageEmbed()
      .setAuthor("Google Translator")
      .setDescription(`The text \`${text}\` means **${res}**`)
      .setColor("36393f")
        msg.channel.send(embed)
    }).catch(e => console.log(e))


}
  
  
  module.exports.help = {
      name:"translate"
  }