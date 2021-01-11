
const Discord = require('discord.js')
const iplookup = require('ipapi.co')
module.exports.run = async (client, msg, args, config) => {

    if(!args[1]) return msg.channel.send('You forgot an IP')

 
    iplookup.location(function(data) { 
        if(data.error || data.reserved) return msg.reply('Could not find info about that IP address')
       
      let embed = new Discord.MessageEmbed()
      .setColor("36393f")
      .setTitle(data.ip)
      .addField(`City`, data.city,true)
      .addField(`Region`, data.region,true)
      .addField(`Region Code`, data.region_code,true)
      .addField('Country', data.country_name,true)
      .addField(`Capital`, data.country_capital,true)
      .addField(`Europe`, data.in_eu === true ? "yes" : "no",true)
      .addField(`Postal Code`, data.postal,true)
      .addField(`Latitude`, data.latitude,true)
      .addField(`Longitude`, data.longitude,true)
      .addField(`Orginaziation`, data.org,true)
      
      msg.channel.send(embed)
    }, args[1])

    
  
}


module.exports.help = {
    name:"iplookup"
}