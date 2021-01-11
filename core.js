const http = require('http');
const express = require('express');
const app = new express();
const db = require("quick.db")
const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const bot = new Discord.Client();
const fs = require('fs');
const { MessageEmbed } = require("discord.js")
const queue = new Map()
const path = require("path")
var cheerio = require("cheerio");
var request = require("request");

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
})

const config = require('./config.json');
bot.prefix = config.prefix

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./admin/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let admin = require(`./admin/${f}`);
    bot.commands.set(admin.help.name, admin);
    bot.aliases.set(admin.help.aliases, admin);
  });
  
  console.log(`Loaded ${jsFiles.length} administration commands`);
});

fs.readdir('./mod/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let mod = require(`./mod/${f}`);
    bot.commands.set(mod.help.name, mod);
    bot.aliases.set(mod.help.aliases, mod);
  });
  
  console.log(`Loaded ${jsFiles.length} moderation commands`);
});


fs.readdir('./info/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let info = require(`./info/${f}`);
    bot.commands.set(info.help.name, info);
    bot.aliases.set(info.help.aliases, info);
  });
  
  console.log(`Loaded ${jsFiles.length} information commands`);
});

fs.readdir('./misc/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let misc = require(`./misc/${f}`);
    bot.commands.set(misc.help.name, misc);
    bot.aliases.set(misc.help.aliases, misc);
  });
  
  console.log(`Loaded ${jsFiles.length} miscellaneous commands`);
});

fs.readdir('./fun/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let fun = require(`./fun/${f}`);
    bot.commands.set(fun.help.name, fun);
    bot.aliases.set(fun.help.aliases, fun);
  });
  
  console.log(`Loaded ${jsFiles.length} fun commands`);
});

fs.readdir('./economy/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let economy = require(`./economy/${f}`);
    bot.commands.set(economy.help.name, economy);
    bot.aliases.set(economy.help.aliases, economy);
  });
  
  console.log(`Loaded ${jsFiles.length} economy commands`);
});

fs.readdir('./nsfw/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let nsfw = require(`./nsfw/${f}`);
    bot.commands.set(nsfw.help.name, nsfw);
    bot.aliases.set(nsfw.help.aliases, nsfw);
  });
  
  console.log(`Loaded ${jsFiles.length} nsfw commands`);
});

fs.readdir('./owner/', (err, files) => {
  if (err) throw err;
  

  let jsFiles = files.filter(f => f.split('.').pop() === 'js');

  jsFiles.forEach(f => {
    let owner = require(`./owner/${f}`);
    bot.commands.set(owner.help.name, owner);
    bot.aliases.set(owner.help.aliases, owner);
  });
  
  console.log(`Loaded ${jsFiles.length} owner commands`);
});

String.prototype.capitalize = function(allWords) {
  if (allWords) return this.split(/ +/g).map(str => str.charAt(0).toUpperCase() + str.toLowerCase().substring(1)).join(' ');
  else return this.toLowerCase().charAt() + this.toLowerCase(0).substring(1);
}


let ownerID = config.ownerID
  
bot.on('message', async (message, args) => {
  

if(message.author.bot) return;

if(message.content.includes("@here")) return;

if(message.content.includes("@everyone")) return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;  
  
    if(message.content === `<@${bot.user.id}>`) {
message.channel.send(`Hello, my prefix is **${prefixes[message.guild.id].prefix}**\nType **${prefixes[message.guild.id].prefix}help** to see the help guide.`)
}
  
  if (message.content.startsWith(prefixes[message.guild.id].prefix)) {
    let args = message.content.substring(prefixes[message.guild.id].prefix.length).trim().split(/ +/g);
    let cmd = bot.commands.get(args[0].toLowerCase()) || bot.aliases.get(args[0].toLowerCase());
    if (cmd) cmd.run(bot, message, args);
  }

  
  let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if(mentioned) {
    let status = await afk.fetch(mentioned.id)
    
    if(status) {
      message.channel.send(`**${mentioned.user.username}** is afk: \`${status}\``)
    }
  }
  
  if(authorStatus) {
    message.channel.send(`**${message.author}**, your afk has been removed`)
    afk.delete(message.author.id)
  }


  var parts = message.content.split(" ");
 

    if (parts[0] === `${prefixes[message.guild.id].prefix}img` || parts[0] === `${prefixes[message.guild.id].prefix}image`) {
 
        image(message, parts);
 
    }

 
function image(message, parts) {
 
    var search = parts.slice(1).join(" ");
    if(!search) return message.channel.send("Provide an image search")
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
        
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            
            return;
        }
 
        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setImage(urls[0])
        message.channel.send(embed);

      })
    }
  
});

const usersMap = new Map();
const LIMIT = 7;
const TIME = 10000;
const DIFF = 2000;




bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.member.hasPermission("ADMINISTRATOR")) return;

  if(usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    if(difference > DIFF) {
      clearTimeout(timer);
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
      }, TIME)
      usersMap.set(message.author.id, userData);
    } else {
    ++msgCount;
    if(parseInt(msgCount) === LIMIT) {
      let muteRole = message.guild.roles.cache.find(role => role.name === "Muted")
  
  if(!muteRole) {
    try {
muteRole = await message.guild.roles.create
      ({
  data: {
  name: "Muted",
  color: "#000000",
  permissions: []
  }
})
      message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muteRole, {
SEND_MESSAGES: false,
  ADD_REACTIONS: false,
    SPEAK: false
});
});
} catch(e) {
console.log(e.stack)
}
}

  message.member.roles.add(muteRole.id)
  message.reply("you have been muted for spamming")
  setTimeout(() => {
    message.member.roles.remove(muteRole.id)
  }, 1800000)
    } else {
      userData.msgCount = msgCount;
      usersMap.set(message.author.id, userData);
    }
  }
} else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn
    });
  }

});

bot.on('ready', async () => {
  console.log(`Bot, ${bot.user.tag} is online!`)
})

bot.snipes = new Map()
bot.on("messageDelete", async (message, channel) => {
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    authorAv: message.author.displayAvatarURL(),
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

bot.esnipes = new Map()
bot.on("messageUpdate", async (message, channel) => {
  bot.esnipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    authorAv: message.author.displayAvatarURL(),
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

let ticket = new Map()
bot.on("message", async message => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;

  const  ticketChannel = message.guild.channels.cache.find(c=> c.name.toLowerCase() === `${message.author.username}-ticket`.toLowerCase())
  if(message.content.startsWith(`${prefixes[message.guild.id].prefix}ticket`)) {
    if(ticketChannel || ticket.get(message.author.id) === true) return message.channel.send("You already have an open ticket")
    const ticketCreated = await message.guild.channels.create(`${message.author.username}-ticket`, {
      type: 'text',
      permissionOverwrites: [
        {
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
          id: message.author.id
        },
        {
          deny: 'VIEW_CHANNEL',
          id: message.guild.id
        }
      ]
    })

    const embed = new Discord.MessageEmbed()
    .setDescription("**Welcome to your own private ticket**\n\n Send your issues or need of assistance below, and a admin will be with you as soon as possible")
    .setColor("RANDOM")
    .setFooter(`If your issue is resolved, type ${prefixes[message.guild.id].prefix}close`)
    ticket.set(message.author.id, true)
    ticketCreated.send(embed)
    message.channel.send(`Your ticket has been created | ${ticketCreated}`)
  } else {
    if(message.content.startsWith(`${prefixes[message.guild.id].prefix}close`)) {
      if(!message.channel.name.includes('ticket')) return message.channel.send("This message needs to be sent in your open ticket, or you don't have one at all")
      message.channel.delete()
      ticket.set(message.author.id, false)
    }
  }
})

bot.login(process.env.token);
