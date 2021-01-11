const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions to use this!");

        let cat = message.content.slice(9)
        if (!cat) return message.channel.send("Provide a name for the role")
     await message.guild.roles.create({
  data: {
    name: cat
  }
})
  
  message.channel.send(`The role \`${cat}\` has been created`)

}

module.exports.help = {
  name: "addrole"
}