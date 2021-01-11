const Discord = module.require("discord.js");
const fs = require("fs");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefix;
  
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")


  const embed = new Discord.MessageEmbed()
    .setTitle("General Help")
    .setColor("36393f")
    .setDescription(
      `Type \`${prefixes[message.guild.id].prefix}help <category>\` for the list of commands.\n\n**Administration\nModeration\nInformation\nEconomy\nMisc\nFun\nnsfw**`
    )
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`);

  if(!args[1]) return message.channel.send(embed)

  if (args[1] === "administration") {
    const embed2 = new Discord.MessageEmbed()
      .setTitle("Moderation Commands List")
      .setColor("#36393f")
      .setDescription(
        "Prefix\nLeaveserver\nUnbanall"
      )
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(embed2);
  }

  if (args[1] === "moderation") {
    const embed2 = new Discord.MessageEmbed()
      .setTitle("Moderation Commands List")
      .setColor("36393f")
      .setDescription(
        "Ban\nTempban\nUnban\nUnbanall\nKick\nMute\nTempmute\nUnmute\nWarn\nRole\nRoleall\nRolehumans\nRolebots\nAddrole\nAddtext\nAddvoice\nAddcat\nPurge\nNuke\nLockdown\nUnlock"
      )
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(embed2);
  } 
  
  if (args[1] === "information") {
      const embed3 = new Discord.MessageEmbed()
  .setTitle("Information Commands List")
  .setColor("36393f")
  .setDescription("Botinfo\nInvite\nServerinfo\nServericon\nWhois\nMembercount\nUptime\nPing\nRoles")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed3)
  }
  
    if (args[1] === "misc") {
      const embed3 = new Discord.MessageEmbed()
  .setTitle("Miscellaneous Commands List")
  .setColor("36393f")
  .setDescription("Avatar\nUrban\\nIplookup\nYoutube\nSnipe\nEsnipe\nAfk\nTranslate\nWeather")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed3)
  }
  
      if (args[1] === "fun") {
      const embed3 = new Discord.MessageEmbed()
  .setTitle("Fun Commands List")
  .setColor("36393f")
  .setDescription("8ball\nAscii\nReverse\nMemeCoinfip\nSay\nJoke\nRps\nPenis\nRoast\nHowgay\nHug\nKiss\nPat\nSlap\nPunch\nLick\nBite\nSmug")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed3)
  }
  
        if (args[1] === "economy") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Economy Commands List")
    .setDescription("Work\nBeg\nRob\nPay\nBalance\nInventory\nAddbal\nRemovebal\nWithdraw\nDeposit\nDaily\nWeekly\nStore\nBuy\nSell\nRoulette\nBet")
    .setColor("36393f")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed)
  }

    if (args[1] === "nsfw") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Nsfw Commands List")
    .setDescription("4k\nAnal\nAss\nBoobs\nPussy\nThigh\nHentai\nSpank\nPornsearch")
    .setColor("36393f")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed)
    }

    if (args[1] === "owner") {
      if(message.author.id != config.ownerID) return message.channel.send("This is a bot owners command category, you cannot view it")
      let embed = new Discord.MessageEmbed()
      .setTitle("Owner Commands List")
      .setDescription("Set-listening\nSet-playing\nSet-watching\nSet-streaming\nMassban\nMasskick\nPower")
      .setColor("36393f")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send(embed)
      }
  
};

module.exports.help = {
  name: "help"
};
