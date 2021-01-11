const Discord = require('discord.js');
const fs = require("fs");
const config = require("../config.json")

exports.run = (client, message, args) => {
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefix;
  
  if(!args[1]) return message.channel.send(`You must provide a message for me to repeat. **Examples:** \`${prefixes[message.guild.id].prefix}say {message} | ${prefixes[message.guild.id].prefix}say embed {message}\``)
  let text = args.slice(1).join(' ')
  
  if(args[1] === "embed") {
    if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

      const embed = new Discord.MessageEmbed()
    .setColor("36393f")
    .setDescription(args.slice(2).join(' '))
    message.channel.send(embed)
  } else {
message.channel.send(text)
}
}

exports.help = {
  name: 'say',
  aliases: "repeat"
};