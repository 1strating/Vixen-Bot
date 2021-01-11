const Discord = require('discord.js');
const config = require("../config.json")
const fs = require("fs")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
  if(args[1]) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permissions to use this!")
}
  
if(!args[1]) return message.channel.send(`You need to specify a new prefix to change it`)

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;
  
    prefixes[message.guild.id] = {
      prefix: args[1]
    }
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  })
  
  
  message.channel.send(`Prefix has been set to **${args[1]}**`)
}

module.exports.help = {
  name: "prefix",
  aliases: "changeprefix"
}