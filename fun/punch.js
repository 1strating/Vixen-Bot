const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, msg, args, config) => {
  if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://neko-love.xyz/api/v1/punch`);


    if(!user) return msg.channel.send('You forgot to mention a user to punch')

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${user.username}** has been punched by **${msg.author.username}**`)
  .setColor("36393f")
  .setImage(body.url)
  
    msg.channel.send(embed)     

   
}


module.exports.help = {
    name:"punch"
} 