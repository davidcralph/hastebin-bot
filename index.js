const { readdir } = require('fs');
const { Client, Collection } = require('discord.js');

const client = new Client({ 
  disableEveryone: true, 
  autoReconnect: true 
});

readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});

client.config = require('./config.json');
client.commands = new Collection();

readdir('./commands/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    let commandName = file.split('.')[0];
    console.log(`Loading ${commandName}.js!`);
    client.commands.set(commandName, require(`./commands/${file}`));
  });
});

client.login(client.config.token);
