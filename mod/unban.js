const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions to use this!");
  
    let xdemb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Unban Command")
  .addField("Description:", `Unban a member`, true)
  .addField("Usage:", "\`?unban\` [userID]", true)
  .addField("Example:" ,"\`?unban\` 719908308303216660")
  
                  try {
let bannedMember = args[1]
if(!bannedMember) return message.channel.send(xdemb)
bannedMember = await bot.users.fetch(args[1])
  
                    if(bannedMember) {
                message.guild.members.unban(bannedMember)
                message.channel.send(`**${bannedMember.tag}** has been unbanned`)
                    }
            } catch(e) {
                console.log(e.message)
            }
          
}

module.exports.help = {
  name: "unban"
}