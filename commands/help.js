const { RichEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
  const embed = new RichEmbed()
     .setTitle("Commands:")
     .addField("help","This embed.")
     .addField("ping","Pong.")
     .addField("stats","Get the status of this bot.")
     .addField("haste","Add code to hastebin.")
     .addField("cat","Get a cat picture.")
     .addField("invite","Invite me to your server.")
     .setTimestamp()
     .setFooter(`Hastebin Bot; Made by ohlookitsderpy`)
   msg.channel.send({
       embed: {
           disableEveryone: true
       }});
};
