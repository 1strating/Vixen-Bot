const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW channel only')

  const query = args.slice(1).join(' ')
    if (!query) return message.channel.send("Provide a query to search")
    const Pornsearch = require('pornsearch').search(query);
        Pornsearch.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.MessageEmbed()
                .setColor("36393f")
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })

  }

  module.exports.help = {
    name: "pornsearch"
  }