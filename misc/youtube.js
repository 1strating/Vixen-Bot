const yt = require('yt-search')
const Discord = require('discord.js')
const { util } = require('discord.js-commando')
module.exports.run = (bot, msg, args, config) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


    if (!args[1]) return msg.channel.send('I need something to search for')
    yt(args.slice(1).join(" "), (err, data) => {

        if (data.videos.length === 0) return msg.channel.send('Could not find any queries')
        if(err) throw err;
        const paginated = util.paginate(data.videos, 1, 15)

        let embed = new Discord.MessageEmbed()
        .setDescription(paginated.items.map(v => `**[${v.title}](${v.url})** ${v.timestamp}`))
        .setColor("RANDOM")
        msg.channel.send(embed)
    })
    
  
}


module.exports.help = {
  name:"youtube",
  aliases: "yt"
}