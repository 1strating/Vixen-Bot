const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let member = message.mentions.users.first();
  if (!member) return message.channel.send("You must mention a user to roast");
  var insults = [
    "Is your ass jealous of the amount of shit that just came out of your mouth?",
    "Two wrongs dont make a right, take your parents as an example.",
    "Id like to see things from your point of view but I cant seem to get my head that far up my ass.",
    "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
    "Your family tree must be a cactus because everybody on it is a prick.",
    "You are so ugly, when your mom dropped you off at school she got a fine for littering.",
    "Your birth certificate is an apology letter from the condom factory.",
    "The smartest thing that ever came out of your mouth was a penis.",
    "Calm down. Take a deep breath and then hold it for about twenty minutes.",
    "Aww, it’s so cute when you try to talk about things you don’t understand.",
    "You should use a glue stick instead of chapstick.",
    "I’d explain it to you but I left my English-to-Dumbass Dictionary at home.",
    "Your birth certificate is an apology letter from the condom manufacturer.",
    "You’re like a plunger. You like to bring up old shit."
  ];
  
  let results = insults[Math.floor(Math.random() * insults.length)]
                        
  message.channel.send(`<@${member.id}>, ${results}`)
};

module.exports.help = {
  name: "roast"
};
