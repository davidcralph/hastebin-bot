const snekfetch = require("snekfetch");

exports.run = (client, msg, args) => {
         if (!args[0]) { return msg.channel.send(":x: What do you want to post to Hastebin?") }
	 snekfetch.post("https://hastebin.com/documents").send(args.slice(0).join(" ")).then(body => {
            msg.channel.send(":white_check_mark: Posted text to Hastebin at this URL: https://hastebin.com/" + body.body.key);
        });
}
