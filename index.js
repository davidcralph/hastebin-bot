/*
  _    _           _       _     _         ____        _   
 | |  | |         | |     | |   (_)       |  _ \      | |  
 | |__| | __ _ ___| |_ ___| |__  _ _ __   | |_) | ___ | |_ 
 |  __  |/ _` / __| __/ _ \ '_ \| | '_ \  |  _ < / _ \| __|
 | |  | | (_| \__ \ ||  __/ |_) | | | | | | |_) | (_) | |_ 
 |_|  |_|\__,_|___/\__\___|_.__/|_|_| |_| |____/ \___/ \__|
  Made by ohlookitsderpy, pull requests made by other people!
  MIT License TM                                                        
*/ 

const { readdir }            = require('fs');
const { Client, Collection } = require('discord.js');

const client = new Client({ disableEveryone: true, autoReconnect: true });

readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loading ${eventName}!`);
    client.on(eventName, event.bind(null, client));
  });
});

client.config   = require('./config.json');
client.commands = new Collection();

readdir('./commands/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading ${commandName}!`);
    client.commands.set(commandName, props);
  });
});

client.login(client.config.token);
