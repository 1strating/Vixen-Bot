const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permissions to use this!");

        let cat = message.content.slice(7)
        if (!cat) return message.channel.send("Provide a name for the voice-channel")
     await message.guild.channels.create(cat, {
	type: 'voice',
});
  message.channel.send(`The voice-channel \`${cat}\` has been created`)

}

module.exports.help = {
  name: "addvoice",
  aliases: "addvc"
}