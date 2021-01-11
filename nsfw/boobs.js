const superagent = require("snekfetch");
const Discord = require('discord.js')
const rp = require('request-promise-native');
module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW channel only')


return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new Discord.MessageEmbed()
      .setColor(`#36393f`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(lewdembed);
});
  }

  module.exports.help = {
    name: "boobs"
  }