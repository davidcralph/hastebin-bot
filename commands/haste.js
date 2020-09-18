const fetch = require('node-fetch');

exports.run = async (client, msg, args) => {
    if (!args[0]) return msg.channel.send(':x: | I can\'t post nothing to Hastebin!');

    const options = {
        method: 'POST',
        body: args.slice(0).join(' '),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await (await fetch(`${client.config.hasteurl}/documents`, options)).json();

    msg.channel.send(`:white_check_mark: | Posted text to Hastebin at this URL: ${client.config.hasteurl}/${res.key}`);
}
