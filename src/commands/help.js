const { MessageEmbed } = require('discord.js');

exports.run = (_client, msg) => {
  const embed = new MessageEmbed()
    .setTitle('Commands:')
    .addField('help', 'Returns this message.')
    .addField('ping', 'Pong! Returns the bot\'s ping.')
    .addField('stats', 'Get the bot stats.')
    .addField('haste <text>', 'Upload text to Hastebin.')
    .setFooter('Made by davidjcralph | https://github.com/davidjcralph/hastebin-bot');

  msg.channel.send(embed);
};
