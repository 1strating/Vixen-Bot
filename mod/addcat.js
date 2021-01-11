const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
  
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permissions to use this!");

        let cat = message.content.slice(8)
        if (!cat) return message.channel.send("Provide a name for the category")
     await message.guild.channels.create(cat, {
	type: 'category',
});
  message.channel.send(`The category \`${cat}\` has been created`)

}

module.exports.help = {
  name: "addcategory",
  aliases: "addcat"
}