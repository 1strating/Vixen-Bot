const Discord = require("discord.js");
const superagent = require('superagent');
module.exports.run = (bot, message, args) => {

  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW channel only')

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'pussy'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
            .setColor("#36393f")
            .setImage(response.body.message)
            
                message.channel.send(embed_nsfw);
        });
  }

  module.exports.help = {
    name: "pussy"
  }