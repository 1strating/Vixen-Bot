module.exports.run = async (bot, message, args, command) => {
  message.channel.send(`**Latency is \`${Date.now() - message.createdTimestamp}\`ms\nAPI Latency is \`${Math.round(bot.ws.ping)}\`ms**`);
}

module.exports.help = {
  name: "ping"
}