const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permissions to use this!");
  
        let cat = message.content.slice(9)
        if (!cat) return message.channel.send("Provide a name for the text-channel")
     await message.guild.channels.create(cat, {
	type: 'text',
});
  message.channel.send(`The text-channel \`${cat}\` has been created`)

}

module.exports.help = {
  name: "addtext"
}