const { readdir } = require('fs');
const { Client, Collection } = require('discord.js');

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_INTEGRATIONS',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_TYPING',
    'DIRECT_MESSAGES',
    'DIRECT_MESSAGE_TYPING'
  ],
  disableEveryone: true,
  autoReconnect: true
});

readdir('./events/', (err, files) => {
  if (err) {
    return console.log(err);
  }

  files.forEach(file => {
    let eventName = file.split('.')[0];
    const event = require(`./events/${file}`);
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});

client.config = require('./config.json');
client.commands = new Collection();

readdir('./commands/', (err, files) => {
  if (err) {
    return console.log(err);
  }

  files.forEach(file => {
    let commandName = file.split('.')[0];
    console.log(`Loading ${commandName}.js!`);
    client.commands.set(commandName, require(`./commands/${file}`));
  });
});

client.login(client.config.token);
