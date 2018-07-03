const snekfetch = require("snekfetch");

exports.run = (client, msg, args) => {
         if (!args[0]) return msg.channel.send(":x: What do you want to post to Hastebin?");
	 snekfetch.post(`${client.config.hasteurl}/documents`).send(args.slice(0).join(" ")).then(body => {
            msg.channel.send(`:white_check_mark: Posted text to Hastebin at this URL: ${client.config.hasteurl}/${body.body.key}`);
        });
}
