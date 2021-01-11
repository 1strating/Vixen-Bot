const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args, config) => {
  
  const status = new db.table("AFKs")
  let afk = await status.fetch(message.author.id)
  if(!afk) {
    message.channel.send(`**${message.author.username}**, I set your afk: \`${args.slice(1).join(" ") ? args.slice(1).join(" ") : "AFK"}\``)
    status.set(message.author.id, args.slice(1).join(" ") || `AFK`)
  } else {
    status.delete(message.author.id)
  }

   
}


module.exports.help = {
    name:"afk"
}   