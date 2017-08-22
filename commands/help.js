const { RichEmbed } = require('discord.js');
exports.run = (client, msg, args) => {
  const embed = new RichEmbed()
     .setTitle(`Hastebin Bot`)
     .addField('Commands:', '`help` `ping` `stats` `haste` `cat` `invite`')
     .setTimestamp()
     .setFooter(`Hastebin Bot; Made by ohlookitsderpy`)
   msg.channel.send({
       embed: {
           disableEveryone: true
       }});
};
