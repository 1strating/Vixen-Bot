module.exports.run = async (bot, msg, args, config) => {
    if(!args.slice(1).join(" ")) return  msg.channel.send('You must input text to be reversed')
  
    msg.channel.send(args.slice(1).reverse().join(' '));
   
}


module.exports.help = {
    name:"reverse"
} 