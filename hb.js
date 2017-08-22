const { Client } = require("discord.js")
const client = new Client({
    disableEveryone: true
});
const fs = require("fs");
const config = require("./config.json");
const snekfetch = require('snekfetch');

client.on('ready', () => {
    console.log('beep boop')
    client.user.setGame("with Hastebin")
    client.user.setStatus('dnd');
});
client.on('guildCreate', (guild) => {
    guild.defaultChannel.send("Hello, I am Hastebin Bot and I post data to Hastebin. Do **hb!help** for my commands!")
    snekfetch
       .post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
       .set(`Authorization`, ) // Add a key ;)
       .send({
        server_count: client.guilds.size
       })
       .then(console.log(`[oliyBots] Posted O:`))
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);
