const Discord = module.require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {
    if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

   try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/memes.json?sort=top&t=week') //fetches from 'r/memes'
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes! Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor("36393f")
        .setTitle("**" + allowed[randomnumber].data.title + "**")
        .setImage(allowed[randomnumber].data.url)
        .setFooter("⬆ " + allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments + " | " + allowed[randomnumber].data.author)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}
module.exports.help = {
  name: 'meme'
}