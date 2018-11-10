const { MessageEmbed: embed } = require('discord.js');

exports.run = (client, msg, args) => {
  const rEmbed = new embed()
     .setTitle("Commands:")
     .addField("help","This message.")
     .addField("ping","Pong!")
     .addField("stats","Get the status of this bot.")
     .addField("haste","Upload text to Hastebin!")
     .setTimestamp()
     .setFooter(`Hastebin Bot | Made by ohlookitsderpy#1337`)
   msg.channel.send(rEmbed);
};
