const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("I don't have permissions to send embedded messages")

  if (!args[1]) return message.channel.send("You must ask a question for an 8ball response")
  
  let answers = [
    "Not a chance",
    "Why is that even a question?",
    "I rather not say",
    "I think we both know the answer to that",
    "Hell yes",
    "Hell no. Are you stupid?",
    "Idk? Ask your mum",
    "Maybe",
    "Yes",
    "I guess, yes?",
    "I'll give you an answer when i actually care",
    "Heck off, you know that's a no",
    "It's better if it's not said",
    "Ask again later when I'm less busy with your mum",
    "Concentrate and ask again",
    "I'm not sure, but you're definitely stupid",
    "No lmfao",
    "That would be a hell no",
    "Ok, whatever yes",
    "Never, dumbass",
    "When you grow a braincell, yes"
  ];
  let answer = answers[Math.floor(Math.random() * answers.length)];

  message.channel.send(`:8ball: ${answer}`);
};
module.exports.help = {
  name: "8ball"
};
