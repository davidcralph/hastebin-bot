const { MessageEmbed } = require('discord.js');

exports.run = (client, msg, args) => {
  const embed = new MessageEmbed()
     .setTitle('Commands:')
     .addField('help','Returns this message.')
     .addField('ping','Pong! Returns the ping.')
     .addField('stats','Get the stats of the bot.')
     .addField('haste <text>','Upload text to Hastebin!')
     .setFooter('Made by ohlookitsderpy | https://github.com/ohlookitsderpy/hastebin-bot');
   msg.channel.send(embed);
};
