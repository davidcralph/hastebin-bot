const fetch = require("node-fetch");

exports.run = (client, msg, args) => {
    if (!args[0]) return msg.channel.send(":x: I can't post nothing to Hastebin!");
    fetch(`${client.config.hasteurl}/documents`, { 
        method: 'POST',
        body: args.slice(0).join(" "), 
        headers: { 'Content-Type': 'application/json' } 
    })
      .then(res => res.json())
      .then(json => { msg.channel.send(`:white_check_mark: Posted text to Hastebin at this URL: ${client.config.hasteurl}/${json.key}`); });
}
