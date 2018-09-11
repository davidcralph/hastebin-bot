/*
  _    _           _       _     _         ____        _   
 | |  | |         | |     | |   (_)       |  _ \      | |  
 | |__| | __ _ ___| |_ ___| |__  _ _ __   | |_) | ___ | |_ 
 |  __  |/ _` / __| __/ _ \ '_ \| | '_ \  |  _ < / _ \| __|
 | |  | | (_| \__ \ ||  __/ |_) | | | | | | |_) | (_) | |_ 
 |_|  |_|\__,_|___/\__\___|_.__/|_|_| |_| |____/ \___/ \__|
                                                          
*/                                                           
const { Client } = require("discord.js"),
      client = new Client({ disableEveryone: true, autoReconnect: true }),
      config = require("./config.json"),
      log = require("umi-log");

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return log.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    log.info(`[Discord] Loading ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return log.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    log.info(`[Discord] Loading ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);
