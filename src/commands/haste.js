const fetch = require('node-fetch');
const fs = require('fs');

exports.run = async (client, msg, args) => {
  if (!args[0] || msg.attachments.size < 0) {
    return msg.channel.send(':x: | I can\'t post nothing to Hastebin!');
  }

  // Define body
  let body = [];
  // using ternary operator to check if dir_uploader is true or false.
  client.config.dir_uploader ? body = (fs.existsSync(args[0]) ? fs.readFileSync(args[0], 'utf8') : null) : body = args.slice(0).join(' ');
  if (body === null) { 
    return msg.channel.send(':x: | File doesn\'t exist!');
  }

  const options = {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const res = await (await fetch(`${client.config.hasteurl}/documents`, options)).json();

  msg.channel.send(`:white_check_mark: | Posted text to Hastebin at this URL: ${client.config.hasteurl}/${res.key}`);
};
