const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot, msg, args, config) => {
  if(!msg.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

    const {body} = await superagent
    .get(`https://neko-love.xyz/api/v1/smug`);

  const embed = new Discord.MessageEmbed()

  .setColor("36393f")
  .setImage(body.url)
  
    msg.channel.send(embed)     

   
}


module.exports.help = {
    name:"smug"
} 